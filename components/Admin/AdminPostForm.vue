<template>
    <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
        <AppControlInput v-model="editedPost.previewText">previewText</AppControlInput>
        <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel
        </AppButton>
    </form>
</template>
<script>
    //컴포넌트 임포트 없어도 동작 잘하는 부분 왜인지는 모름.
    import AppControlInput from '@/components/UI/AppControlInput'
    import AppButton from '@/components/UI/AppButton'

    export default {
        components: {
            AppControlInput,
            AppButton
        },
        props: {
            //editedPost 데이터를 다른 컴포넌트에서 사용할 수 있게?
            post: {
                type: Object,
                required: false
            }
        },
        data() {
            return {
                //3항연산자를 이용해 조건문 달아줌 뭔지는 모르겠음
                editedPost: this.post ? {
                    ...this.post
                } : {
                    author: '',
                    title: '',
                    thumbnail: '',
                    previewText: '',
                    content: ''
                }
            }
        },
        methods: {
            onSave() {
                //save the post
                this.$emit('submit', this.editedPost)
            },
            onCancel() {
                //cancel the post
                this.$router.push('/admin');
            }
        }
    }
</script>