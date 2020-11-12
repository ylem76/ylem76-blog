import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [{
                                id: '1',
                                title: 'first Post',
                                previewText: 'this is my first post',
                                thumbnail: 'https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            },
                            {
                                id: '2',
                                title: 'second Post',
                                previewText: 'this is my 2 post',
                                thumbnail: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            },
                            {
                                id: '3',
                                title: 'second Post',
                                previewText: 'this is my 3 post',
                                thumbnail: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            }
                        ]);
                        resolve();
                    }, 100);

                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    });

    //아래부분 정리가 안 돼서 자꾸 오류가 났었나보다.
}

export default createStore;