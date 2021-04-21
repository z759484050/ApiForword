module.exports = (app) => {
    app.get('/movieOnInfoList', async (req, res) => {
        try {
            const result = await app.request({
                url: 'movieOnInfoList',
                data: {
                    ...req.query
                }
            })
            res.send(result.data)
        } catch (error) {
            res.send({ code: -100, msg: error.message })
        }
       
    })
}