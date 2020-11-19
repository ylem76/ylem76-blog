<template>
    <div>
        <form action="">
            <input type="text" id="sample3_postcode" placeholder="우편번호" />
            <input type="button" @click="searchAddress = !searchAddress" value="우편번호 찾기" />
            <input type="text" id="sample3_address" placeholder="주소" /><br />
            <input type="text" id="sample3_detailAddress" placeholder="상세주소" />
            <input type="text" id="sample3_extraAddress" placeholder="참고항목" />
        </form>
        <p v-if="searchAddress">열렸습니다~</p>
    </div>
</template>
<script>
import SearchAddressForm from '@/components/Admin/SearchAddressForm';
export default {
    head: {
        script: [
            {
                src: 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
            },
        ],
    },
    components: {
        SearchAddressForm,
    },
    data() {
        return {
            searchAddress: false,
        };
    },
    mounted() {
        console.log('마운트 완료');
    },
    methods: {},
};
</script>
