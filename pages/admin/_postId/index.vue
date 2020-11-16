<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
        </section>
    </div>
</template>
<script>
    //이거는 또 빠지면 에러남 왜그런지 모름
    import AdminPostForm from '@/components/Admin/AdminPostForm'
    import axios from 'axios';

    export default {
        layout: 'admin',
        middleware: ['check-auth', 'auth'],
        components: {
            AdminPostForm
        },
        asyncData(context) {
            return axios.get('https://ylem76-blog.firebaseio.com/posts/' + context.params.postId + '.json')
                .then(res => {
                    return {
                        loadedPost: {
                            ...res.data,
                            id: context.params.postId
                        }
                    }
                })
                .catch(e => context.error(e))
        },
        methods: {
            onSubmitted(editedPost) {
                this.$store.dispatch('editPost', editedPost)
                    .then(() => {
                        this.$router.push("/admin");
                    });
            }
        }
    }
</script>