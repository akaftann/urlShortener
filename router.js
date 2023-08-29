import Router from 'express'
import UrlController from './controllers/UrlController.js'
const router = new Router()

router.post('/shortUrls', UrlController.createShort)
router.get('/', UrlController.getAll)
router.get('/:shortUrl', UrlController.getByShort)

export default router