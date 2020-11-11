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
        asyncData(context) {
            return new Promise((resolve, reject) => {
                // setTimeout(() => {
                //     resolve({
                //         loadedPosts: [{
                //                 id: '1',
                //                 title: 'first Post',
                //                 previewText: 'this is my first post',
                //                 thumbnail: 'https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                //             },
                //             {
                //                 id: '2',
                //                 title: 'second Post',
                //                 previewText: 'this is my 2 post',
                //                 thumbnail: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                //             },
                //             {
                //                 id: '3',
                //                 title: 'second Post',
                //                 previewText: 'this is my 3 post',
                //                 thumbnail: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                //             }
                //         ]
                //     });
                // },100);
                reject(new Error())
            })
            .then(data => {
                return data
            })
            .catch(e => {
                context.error(e);
            });
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