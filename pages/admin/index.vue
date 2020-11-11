<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">새 글쓰기</AppButton>
        </section>
        <section class="existing-posts">
            <h1>현재 블로그 글 목록</h1>
            <!-- isAdmin 변수 true로 -->
            <PostList isAdmin />
        </section>
    </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
    layout:'admin',
    components : {
        PostList,
        AppButton
    },
    props: {
        //여기다 props추가하니까 에러 안나네 됴잉
        //다시 삭제하니까 또 괜찮네 떼잉
        // isAdmin: {
        //         type: Boolean,
        //         default: false
        //     }
    }
    
}
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