import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Gift } from "../models/Gift.js"

class GiftsService {
    async getGifts() {
        const res = await api.get('api/gifts')
        logger.log('Got gift', res.data)
        AppState.gifts = res.data.map(gift => new Gift(gift))
    }

    async openGift(giftId) {
        logger.log(giftId)
        let foundGift = AppState.gifts.find(gift => gift.id == giftId)
        foundGift.opened = true
        let giftIndex = AppState.gifts.indexOf(foundGift)
        const res = await api.put(`/api/gifts/${giftId}`, foundGift)
        logger.log(res.data)
        let newGift = new Gift(res.data)
        AppState.gifts.splice(giftIndex, 1, newGift)

    }
}

export const giftsService = new GiftsService()