import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class GiftsService {
    async getGifts() {
        const res = await api.get('api/gifts')
        logger.log('Got gift', res.data)
    }
}

export const giftsService = new GiftsService()