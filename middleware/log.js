export default function (context) {
    // 미들웨어 context를 이용하는 일종의 function
    console.log ('middleware is running');
    //페이지별 추가 가능
    //레이아웃별 추가도 가능
    //nuxt.config.js파일에서도 추가 가능
    //라우터 진입 전에 실행됨
}