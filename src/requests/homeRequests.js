const axios = require('axios').default;
const homeUrl = "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/ceng-store-bfjtj/service/store-api/incoming_webhook/home-api";





export const getAllGames = async () =>{

    const param = { params: { cmd: "getGames" } }
    const response  = await axios.get(homeUrl, param)

    return response.data
}

export const addGame = async (doc)=>{

    const param = { params: { cmd: "addGame", doc: doc } }
    const response  = await axios.get(homeUrl, param)
    return response.data
}

export const removeGame = async (gameName)=>{

  const param = { params: { cmd: "removeGame", gameName: gameName } }
  const response  = await axios.get(homeUrl, param)
  return response.data
}

export const disableComment = async (gameName)=>{

  const param = { params: { cmd: "disableRating", gameName: gameName } }
  const response  = await axios.get(homeUrl, param)
  return response.data
}

export const enableComment = async (gameName)=>{

  const param = { params: { cmd: "enableRating", gameName: gameName } }
  const response  = await axios.get(homeUrl, param)
  return response.data
}
