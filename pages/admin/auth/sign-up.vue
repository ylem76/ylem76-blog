<template>
    <div>
        <form>
            <!-- <ul>
            <li>
                <label for="username">ID: </label>
                <input
                    type="text"
                    id="username"
                    class="username-input"
                    v-model="username"
                    v-bind:class="{ error: isError }"
                />
            </li>
            <li>
                <label for="password">PW : </label>
                <input type="password" id="password" v-model="password" />
            </li>
        </ul> -->
            <button type="submit">
                가입하기
            </button>
        </form>
        <form action="">
            <input type="text" id="sample3_postcode" placeholder="우편번호" />
            <input type="button" @click="openSearchWindow()" value="우편번호 찾기" /><br />
            <input type="text" id="sample3_address" placeholder="주소" /><br />
            <input type="text" id="sample3_detailAddress" placeholder="상세주소" />
            <input type="text" id="sample3_extraAddress" placeholder="참고항목" />
        </form>
        <div
            id="wrap"
            v-if="searchAddress"
            style="border:1px solid;width:500px;height:300px;margin:5px 0;position:relative"
        >
            <img
                src="//t1.daumcdn.net/postcode/resource/images/close.png"
                id="btnFoldWrap"
                style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1"
                onclick="foldDaumPostcode()"
                alt="접기 버튼"
            />
        </div>
    </div>
</template>
<script>
export default {
    head: {
        script: [
            {
                src: 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
            },
        ],
    },
    data() {
        return {
            searchAddress: false,
        };
    },
    mounted() {
        console.log('마운트 완료');
    },
    methods: {
        openSearchWindow() {
            var element_wrap = document.getElementById('wrap');

            new daum.Postcode({
                oncomplete: function(data) {
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                    // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                },
            }).embed(element_wrap);
        },
    },
};
</script>
<style scoped></style>
