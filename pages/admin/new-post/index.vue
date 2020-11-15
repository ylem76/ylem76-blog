<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    //컴포넌트 임포트 없어도 동작 잘하는 부분 왜인지는 모름.
    import AdminPostForm from '@/components/Admin/AdminPostForm'

    export default {
        layout: 'admin',
        middleware:'auth',
        components: {
            AdminPostForm
        },
        methods: {
            onSubmitted(postData) {
                this.$store.dispatch('addPost', postData)
                .then(() => {
                    this.$router.push("/admin")
                })

            }
        }
    }
</script>
<style scoped>
    .new-post-form {
        width: 90%;
        margin: 20px auto;
    }

    @media (min-width: 768px) {
        .new-post-form {
            width: 500px;
        }
    }
</style>