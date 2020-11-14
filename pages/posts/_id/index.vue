<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">
                    미리보기 텍스트 : 
                    {{ loadedPost.previewText }}
                </div>
                <div class="post-detail">
                    글쓴이 : 
                    {{ loadedPost.author }}
                </div>
                <div class="post-detail">
                    수정날짜 : 
                    {{ loadedPost.updatedDate | date }}
                </div>
            </div>
            <div class="post-content">
                내용 : 
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
    import axios from 'axios';

    export default {
        asyncData(context) {
            return axios.get('https://ylem76-blog.firebaseio.com/posts/' + context.params.id + '.json')
                .then(res => {
                    return {
                        loadedPost: res.data
                    }
                })
                .catch(e => context.error(e))

        },
        head: {
            //페이지 단위에서 수정 가능
            title:'A single post',
            titleTemplate: '넉스트 - %s'
        }
    }
</script>