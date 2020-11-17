export default function (context) {
    if(!context.store.getters.isAuthenticated) {
        console.log('로그인 실패');
        context.redirect('/admin/auth');
    } else {
        console.log('로그인 성공');
    }
}