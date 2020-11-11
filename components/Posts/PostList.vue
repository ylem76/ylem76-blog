<template>
    <section class="post-list">
        <PostPreview v-for="post in posts" :key="post.id" :id="post.id" :is-admin="isAdmin" :thumbnail="post.thumbnail"
            :title="post.title" :previewText="post.previewText" />
    </section>
</template>
<script>
    import PostPreview from '@/components/Posts/PostPreview'

    export default {
        component: {
            PostPreview
        },
        props: {
            //수정화면 진입하는 것과 포스팅 보는 것 분리하기 위하여 isAdmin props 추가
            // 계속 오류 나는데 [Vue warn]: Missing required prop: "isAdmin" 동작은 잘 된다.
            isAdmin: {
                type: Boolean,
                default: false
            },
            posts: {
                type: Array,
                required: true
            }
        },

    }
</script>
<style scoped>
    .post-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;

    }
</style>