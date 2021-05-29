const axios = require('axios').default;



const getRequest= (url, params, setState) =>{
    axios.get(url,params)
    .then(function (response) {
      setState(response.data)
      console.log(response);
    })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });

}


const homeUrl = "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/ceng-store-bfjtj/service/store-api/incoming_webhook/home-api";
export const getAllGames = async (setState) =>{
    
    const params = { params: { cmd: "getGames" } }
    getRequest(homeUrl, params, setState)
}



