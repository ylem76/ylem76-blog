<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">
                    {{ loadedPost.title }}
                </div>
                <div class="post-detail">
                    {{ loadedPost.author }}
                </div>
            </div>
            <div class="post-content">
                {{ loadedPost.content }}
            </div>
        </section>
        <section class="post-feedback">
            <p>Let me know what you think about the post, send a mail to <a
                    href="mailto:test@thebreeze.co.kr">test@thebreeze.co.kr</a></p>
        </section>
    </div>
</template>

<script>
    export default {
        asyncData(context, callback) {
            setTimeout(() => {
                callback(null, {
                    loadedPost: {
                        id: '1',
                        title: 'first Post',
                        previewText: 'this is my first post',
                        author: 'i my me mine',
                        updatedDate: new Date(),
                        content: '이것은 본문입니다.',
                        thumbnail: 'https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    }
                });
            }, 50);

        }
    }
</script>