import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

const createStore = () => {
	return new Vuex.Store({
		state: {
			loadedPosts: [],
			token: null,
		},
		mutations: {
			setPosts(state, posts) {
				state.loadedPosts = posts;
			},
			addPost(state, post) {
				state.loadedPosts.push(post);
			},
			editPost(state, editedPost) {
				const postIndex = state.loadedPosts.findIndex((post) => post.id === editedPost.id);
				state.loadedPosts[postIndex] = editedPost;
			},
			deletePost(state, deletedPost) {
				const postIndex = state.loadedPosts.findIndex((post) => post.id === deletedPost.id);
				state.loadedPosts.pop(deletedPost);
				console.log(postIndex);
				// state.loadedPosts[postIndex] = editedPost;
			},
			setToken(state, token) {
				state.token = token;
			},
			clearToken(state) {
				state.token = null;
			},
		},
		actions: {
			nuxtServerInit(vuexContext, context) {
				return axios
					.get(process.env.baseUrl + '/posts.json')
					.then((res) => {
						const postsArray = [];
						for (const key in res.data) {
							postsArray.push({
								...res.data[key],
								id: key,
							});
						}
						vuexContext.commit('setPosts', postsArray);
					})
					.catch((e) => context.error(e));
			},
			addPost(vuexContext, postData) {
				const createdPost = {
					...postData,
					updatedDate: new Date(),
				};
				return axios
					.post('https://ylem76-blog.firebaseio.com/posts.json?auth=' + vuexContext.state.token, createdPost)
					.then((result) => {
						vuexContext.commit('addPost', {
							...createdPost,
							id: result.data.name,
							//argument 맞춰주기
						});
					})
					.catch((e) => console.log(e));
			},
			editPost(vuexContext, editedPost) {
				return axios
					.put('https://ylem76-blog.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
					.then((res) => {
						alert('수정 성공');
						vuexContext.commit('editPost', editedPost);
					})
					.catch((e) => console.log(e));
			},
			setPosts(vuexContext, posts) {
				vuexContext.commit('setPosts', posts);
			},
			deletePost(vuexContext, deletedPost) {
				return axios.delete('https://ylem76-blog.firebaseio.com/posts/' + deletedPost.id + '.json?auth=' + vuexContext.state.token, deletedPost).then((res) => {
					alert('DB에서 삭제 성공');
					vuexContext.commit('deletePost', {
						...deletedPost,
					});
				});
			},
			authenticateUser(vuexContext, authData) {
				const API_KEY = process.env.APIKey; // API 키 필요
				const authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${!authData.isLogin ? 'signupNewUser' : 'verifyPassword'}?key=${API_KEY}`;

				return this.$axios
					.$post(authURL, {
						email: authData.email,
						password: authData.password,
						returnSecureToken: true,
					})
					.then((result) => {
						vuexContext.commit('setToken', result.idToken);

						localStorage.setItem('token', result.idToken);
						localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);

						// Cookie.set('jwt', result.idToken);
						// Cookie.set('expirationDate', new Date().getTime() + +result.expiresIn * 1000);

						// vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
						//console.log('쿠키 셋팅 성공');

						//로그인 확인 하는 서버사이드 코드 삽입(~연습~)
						return this.$axios.$post('http://localhost:3000/api/track-data', { data: 'Authenticated!' });
					})
					.catch((e) => console.error(e));
			},
			// 테스트용으로 제작한 코드 실제로 동작할 수 있도록 리팩토링
			// setLogoutTimer(vuexContext, duration) {

			//     setTimeout(() => {
			//         vuexContext.commit('clearToken')
			//     }, duration)
			// },
			initAuth(vuexContext, req) {
				let token;
				let expirationDate;

				// if (req) {
				//     if (!req.headers.cookie) {
				//         return;
				//     }
				//     const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
				//     if (!jwtCookie) {
				//         return alert('쿠키 읽기 실패');
				//     }
				//     token = jwtCookie.split('=')[1];
				//     expirationDate = req.headers.cookie.split(';').find(c => c.trim().startWith('expirationDate='))
				//         .split('=')[1];

				// } else {
				//     token = localStorage.getItem('token');
				//     expirationDate = localStorage.getItem("tokenExpiration");
				// }

				token = localStorage.getItem('token');
				expirationDate = localStorage.getItem('tokenExpiration');
				console.log('토큰정보 : ' + token);

				if (new Date().getTime() > +expirationDate || !token) {
					console.log('No token or invalid token');
					vuexContext.dispatch('logout');
					// vuexContext.commit('clearToken');
					return;
				}
				//로그아웃 타이머 리팩토링
				// vuexContext.dispatch('setLogoutTimer', expirationDate - new Date().getTime());
				vuexContext.commit('setToken', token);
			},
			logout(vuexContext) {
				vuexContext.commit('clearToken');
				// Cookie.remove('jwt');
				// Cookie.romove('expirationDate');
				localStorage.removeItem('token');
				localStorage.removeItem('tokenExpiration');
			},
		},
		getters: {
			loadedPosts(state) {
				return state.loadedPosts;
			},
			isAuthenticated(state) {
				return state.token != null;
			},
		},
	});
};

export default createStore;
