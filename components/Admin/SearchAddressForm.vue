<template>
	<div id="wrap" style="border:1px solid;width:500px;height:300px;margin:5px 0;position:relative">
		<img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1" onclick="foldDaumPostcode()" alt="접기 버튼" />
	</div>
</template>
<script>
	export default {
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
