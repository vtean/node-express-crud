const Router = require('express')
const router = new Router()

const modules = ['countries', 'regions', 'locations']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router