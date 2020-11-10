<template>
    <section class="post-list">
        <PostPreview id="1" title="first-title"
            thumbnail="https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            previewText="This is my first post!" />
        <PostPreview id="2" title="second-title"
            thumbnail="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            previewText="This is my second post!" />
        <PostPreview id="3" title="third-title"
            thumbnail="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            previewText="This is my third post!" />
    </section>
</template>
<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
    component: {
        PostPreview
    }
    
}
</script>
<style scoped>
    .post-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        
    }
</style>