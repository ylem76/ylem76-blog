import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, token) {
                state.token = token
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get(process.env.baseUrl + '/posts.json')
                    .then(res => {
                        const postsArray = []
                        for (const key in res.data) {
                            postsArray.push({
                                ...res.data[key],
                                id: key
                            })
                        }
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch(e => context.error(e));
            },
            addPost(vuexContext, postData) {
                const createdPost = {
                    ...postData,
                    updatedDate: new Date()
                }
                return axios
                    .post('https://ylem76-blog.firebaseio.com/posts.json?auth=' + vuexContext.state.token, createdPost)
                    .then(result => {
                        vuexContext.commit('addPost', {
                            ...createdPost,
                            id: result.data.name
                            //argument 맞춰주기
                        })
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return axios
                    .put('https://ylem76-blog.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token,
                        editedPost)
                    .then(res => {
                        alert('수정 성공');
                        vuexContext.commit('editPost', editedPost)
                    })
                    .catch(e => console.log(e))

            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            },
            authenticateUser(vuexContext, authData) {
                const API_KEY = process.env.APIKey; // API 키 필요
                const authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${
                    !authData.isLogin ? 'signupNewUser' : 'verifyPassword'
                }?key=${API_KEY}`


                return this.$axios.$post(authURL, {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    })
                    .then(result => {
                        vuexContext.commit("setToken", result.idToken);
                    })
                    .catch(e => console.error(e))
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    });
};

export default createStore;