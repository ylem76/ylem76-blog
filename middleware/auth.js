export default function (context) {
    if(!context.store.getters.isAuthenticated) {
        context.redirect('/admin/auth')
        console.log('로그인 실패');
    } else {
        console.log('로그인 성공');
    }
}