
const express = require('express')


const Router = express.Router()
// import router from './router'
// api路由中间件
const apiList = require('./apiList/index')
const app = express()
const port = process.env.PORT || 3456


app.use('/node_modules/', express.static('../node_modules/'))
app.use('/public/', express.static('../public/'))


app.use((req, res, next) => {
    // 防跨域问题
    res.set('Access-Control-Allow-Origin', '*')
    next()
})
/* 挂载路由 */
app.use(apiList(Router))

app.listen(port, ()=>{
  
  console.log(`Example app listening on http://127.0.0.1:${port}`)
})

