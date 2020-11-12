<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>
<script>
    import PostList from '@/components/Posts/PostList'

    export default {
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