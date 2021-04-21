const axios = require('axios')
const { userAgent } = require('./userAgent')

// Lib a.d.ts


const request = (paramInfo) => {
    function getDataFn(obj) {
        let getData= {
            url: obj.url,
            method: obj.method ||'get',
            baseURL: 'http://m.maoyan.com/ajax/',
            headers: {
                'User-Agent': obj.ua || userAgent(),
                "Accept": "application/json, text/javascript, text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*; q=0.8,application/signed-exchange;v=b3",
            }
        }
        if (getData.method == 'get'){
            getData.params = obj.data
        } else {
            getData.data = obj.data
        }
        return getData
    }
    
    if(!Array.isArray(paramInfo)){
        return axios(getDataFn(paramInfo))
    } else {
        let fetchArray = paramInfo.map(v => {
            return axios(getDataFn(v))
        })
        return new Promise((resolve, reject) => {
            axios.all(fetchArray).then()

            axios.all(fetchArray)
            .then(axios.spread(function (...arg) {
                // 多个请求现在都执行完成
                resolve(arg)
            })).catch(err => {
                console.log(err)
            })
        })

    }
}

module.exports = request