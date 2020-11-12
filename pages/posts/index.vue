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
        fetch(context) { //fetch : nuxt의 메소드로 asyncData와 비슷하게 동작한다.
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
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
                },100);
                // reject(new Error())
            })
            .then(data => {
                context.store.commit('setPosts', data.loadedPosts)
            })
            .catch(e => {
                context.error(e);
            });
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