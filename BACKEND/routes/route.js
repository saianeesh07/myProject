const {Router} = require('express')
const {computeQuery} = require('../controllers/controller')

const router = Router()

router.post("/",computeQuery);

module.exports =  router;