export default function (context) {
    console.log('middleware check auth test');
    if (process. client) {
        // null로 해야하는 이유를 알려줬는데, 해석이 안 돼서 정확히 모르겠다.
        // Should be null on the CLIENT of course??
        context.store.dispatch("initAuth", null);
        // context.store.dispatch("initAuth", context.req);
    }
    
}