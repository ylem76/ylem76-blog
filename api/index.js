const express = require('express')
const router = express.Router()

const app = express()
router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})

router.post('/track-data', (req, res) => {
    //노드익스프레스 api 이용해서 원하는 DB로 자유롭게 연결 가능하다.
    console.log('Stored data!', req.body.data)
    res.status(200), json({
        message: "success!"
    });

});

module.exports = {
    path: '/api',
    handler: router
    
}