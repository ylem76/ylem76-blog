<template>

    <div class="home-page">
        <section class="intro">
            <h1>웰컴 투 마이 블로그</h1>
        </section>
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
    import PostList from '@/components/Posts/PostList'

    export default {
        component: {
            PostList
        },
        asyncData() {
            return {
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
            }

        },
        // data() {
        //     return {
        //         loadedPosts: []
        //     }
        // },
        created() {

        }
    }
</script>

<style scoped>
    .intro {
        height: 300px;
        position: relative;
        padding: 30px;
        box-sizing: border-box;
        background-image: url('~assets/images/top_bg.jpg');
        background-position: center;
        background-size: cover;
    }

    .intro h1 {
        position: absolute;
        top: 10%;
        left: 5%;
        width: 90%;
        font-size: 1.5rem;
        color: black;
        background-color: rgb(211, 211, 211);
        padding: 10px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px black;
        box-sizing: border-box;
        border: 1px solid black;
    }

    @media (min-width: 768px) {
        .intro h1 {
            font-size: 2rem;
        }
    }
</style>