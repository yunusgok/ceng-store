const axios = require('axios').default;
const userUrl = "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/ceng-store-bfjtj/service/store-api/incoming_webhook/user-api";


export const getUserDetail = async (userName) =>{

    const param = { params: { cmd: "getUserDetail", userName: userName} }
    const response  = await axios.get(userUrl, param)

    return response.data
}




export const addRate = async (userName, gameName, rate) =>{

    const param = { params: { cmd: "rateGame", userName: userName, gameName: gameName, rate: rate} }
    const response  = await axios.get(userUrl, param)

    return response.data
}

export const addComment = async (userName, gameName, comment) =>{

    const param = { params: { cmd: "commentGame", userName: userName, gameName: gameName, comment: comment} }
    const response  = await axios.get(userUrl, param)

    return response.data
}

export const addPlay = async (userName, gameName, time) =>{

    const param = { params: { cmd: "playGame", userName: userName, gameName: gameName, time: time} }
    const response  = await axios.get(userUrl, param)

    return response.data
}


