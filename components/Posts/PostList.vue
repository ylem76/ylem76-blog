<template>
    <section class="post-list">
        <PostPreview id="1" :is-admin="isAdmin"
            thumbnail="https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="first-title" previewText="This is my first post!" />
        <PostPreview id="2" :is-admin="isAdmin" title="second-title"
            thumbnail="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            previewText="This is my second post!" />
        <PostPreview id="3" :is-admin="isAdmin" title="third-title"
            thumbnail="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            previewText="This is my third post!" />
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
            }
        }
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