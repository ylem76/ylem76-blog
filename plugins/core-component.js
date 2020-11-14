import Vue from 'vue'
//js 파일 내부에서 뷰를 불러옴으로써 직접 뷰 컴포넌트에 접근할 수 있다.

import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'
import PostList from '@/components/posts/PostList'

Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList)

//여기서 이렇게 설정하고 Nuxt.config.js파일에서 플러그인 설정을 해준다.