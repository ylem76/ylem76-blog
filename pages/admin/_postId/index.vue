<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>
<script>
//이거는 또 빠지면 에러남 왜그런지 모름
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout:'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost:{ //실제로는 데이터 받아올거지만 일단 하드코딩으로 연습
                author:'me',
                title:'포트스타이틀트ㅡ',
                content:'Super amazing',
                thumbnailLink:'https://www.pexels.com/ko-kr/photo/1442486/'
            }
        }
    }
}
</script>