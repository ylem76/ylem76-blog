import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";

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
            },
            clearToken(state) {
                state.token = null;
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

                        localStorage.setItem('token', result.idToken);
                        localStorage.setItem('tokenExpiration', new Date().getTime() + result.expiresIn * 1000);

                        Cookie.set('jwt', result.idToken);
                        Cookie.set('expirationDate', new Date().getTime() + result.expiresIn * 1000);

                        vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
                        console.log('쿠키 셋팅 성공');
                    })
                    .catch(e => console.error(e));
            },
            setLogoutTimer(vuexContext, duration) {
                setTimeout(() => {
                    vuexContext.commit('clearToken')
                }, duration)
            },
            initAuth(vuexContext, req) {
                let token;
                let expirationDate;

                if (req) {
                    if(!req.headers.cookie) {
                        return;
                    }
                    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
                    if(!jwtCookie) {
                        return alert('쿠키 읽기 실패');
                    }
                    token = jwtCookie.split('=')[1];
                    expirationDate = req.headers.cookie.split(';').find(c => c.trim().startWith('expirationDate='))
                    .split('=')[1];


                } else {
                    token = localStorage.getItem('token');
                    expirationDate = localStorage.getItem("tokenExpiration");

                    if (new Date().getTime() > +expirationDate || !token) {
                        return;
                    }

                }

                vuexContext.dispatch('setLogoutTimer', expirationDate - new Date().getTime());
                vuexContext.commit("setToken", token);

            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    });
};

export default createStore;