<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">새 글쓰기</AppButton>
        </section>
        <section class="existing-posts">
            <h1>현재 블로그 글 목록</h1>
            <!-- isAdmin 변수 true로 -->
            <PostList isAdmin :posts="loadedPosts" />
        </section>
    </div>
</template>
<script>
    //import PostList from '@/components/Posts/PostList'
    //import AppButton from '@/components/UI/AppButton'

    export default {
        layout: 'admin',
        components: {
            // PostList,
            // AppButton
            // 플러그인에 추가했으므로 이렇게 컴포넌트 프로퍼티에 선언할 필요도 없음.
        },
        computed: {
            loadedPosts () {
                return this.$store.getters.loadedPosts
            }
        }
    };
</script>
<style scoped>
    .admin-page {
        padding: 20px;
    }

    .new-post {
        text-align: center;
        border-bottom: 2px solid #ccc;
        padding-bottom: 10px;
    }

    .existing-posts h1 {
        text-align: center;
    }
</style>