import ShortUrl from "../models/shortUrl.js";

class UrlService{

    async getAll(){
        const urlAll = await ShortUrl.find()
        return urlAll
    }

    async getByShort(shortUrl){
        const url = await ShortUrl.findOne({ short: shortUrl })
        return url
    }

    async create(fullUrl){
        const ifExists = await ShortUrl.findOne({ full: fullUrl })
        if(ifExists) return ifExists
        const createdUrl = await ShortUrl.create({ full: fullUrl })
        return createdUrl
    }
}

export default new UrlService()