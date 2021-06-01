const axios = require('axios').default;
const gameUrl = "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/ceng-store-bfjtj/service/store-api/incoming_webhook/game-api"


export const getGameDetail = async (gameName) =>{

    const param = { params: { cmd: "getGameDetail" , gameName: gameName } }
    const response  = await axios.get(gameUrl, param)

    return response.data
}