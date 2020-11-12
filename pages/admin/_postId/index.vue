<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>
<script>
    //이거는 또 빠지면 에러남 왜그런지 모름
    import AdminPostForm from '@/components/Admin/AdminPostForm'
    import axios from 'axios';

    export default {
        layout: 'admin',
        components: {
            AdminPostForm
        },
        asyncData(context) {
            return axios.get('https://ylem76-blog.firebaseio.com/posts/' + context.params.postId + '.json')
                .then(res => {
                    return {
                        loadedPost: res.data
                    }
                })
                .catch(e => context.error(e))
        }
    }
</script>