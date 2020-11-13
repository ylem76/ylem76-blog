export default {
    //모드 확인
    // mode: 'spa',
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'ylem76-blog',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap'
            }
        ]
    },
    // loading bar
    loading: { color: 'red', height:'4px', duration: 5000 },
    //spa일 때 로딩 아이콘(??) 너무 빨라서 확인은 안됨
    // loadingIndicator : { 
    //     name : 'circle', color:'#dd11dd'
    //  },
    // 로딩바 사용하지 않음
    //loading:false, 

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~assets/styles/main.css'
    ],
    //transition
    transition: {
        name:'fade',
        mode:'out-in'
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    env: {
        baseUrl: process.env.BASE_URL || 'https://ylem76-blog.firebaseio.com'
    }
}