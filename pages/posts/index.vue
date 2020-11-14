<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>
<script>
    import PostList from '@/components/Posts/PostList'

    export default {
        //미들웨어 middleware 프로퍼티로 실행
        //middleware 'log' middleware폴더 내부의 log.js파일 실행
        //라우터 진입 시 실행됨 반면 새로고침 시 새로 실행되지 않음(터미널 상 콘솔에는 찍힘)
        //레이아웃 파일에 넣으면 모든 페이지에서 원활하게 실행됨
        // middleware: 'log',
        component: {
            PostList
        },
        
        computed: {
            loadedPosts() { //데이터 변경됐을 때 loadedPosts() 실행
                return this.$store.getters.loadedPosts
            }
        },
        created() {
            this.$store.dispatch('setPosts', this.loadedPosts)
            //vuex로 저장한 데이터 콘솔로 확인하기
            //console.log(this.$store.getters.loadedPosts)
        }
    };
</script>
<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>