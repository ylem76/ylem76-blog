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
    import PostList from '@/components/Posts/PostList'
    import AppButton from '@/components/UI/AppButton'

    export default {
        layout: 'admin',
        components: {
            PostList,
            AppButton
        },
        asyncData(context, callback) {
            setTimeout(() => {
                callback(null, {
                    loadedPosts: [{
                            id: '1',
                            title: 'first Post',
                            previewText: 'this is my first post',
                            thumbnail: 'https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        },
                        {
                            id: '2',
                            title: 'second Post',
                            previewText: 'this is my 2 post',
                            thumbnail: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        },
                        {
                            id: '3',
                            title: 'second Post',
                            previewText: 'this is my 3 post',
                            thumbnail: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        }
                    ]
                });
            }, 1500);
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