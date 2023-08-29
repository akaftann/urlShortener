import UrlService from '../services/UrlService.js'

class UrlController {
    async getAll(req, res){
        try{
            const urls = await UrlService.getAll()
            res.status(200).json(urls)
        }catch(e){
            res.status(500).json(e.message)
        }
    }


    async createShort(req, res){
        try{
            const fullUrl = req.body.fullUrl
            const short = await UrlService.create(fullUrl)
            res.status(200).json(short)
        }catch(e){
            res.status(500).json(e.message)
        }
    }

    async getByShort(req,res){
        try{
            const shortUrl = req.params.shortUrl
            const short = await UrlService.getByShort(shortUrl)
            if (!short) return res.sendStatus(404)
            res.redirect(short.full)
        }
        catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new UrlController()