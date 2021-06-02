
const compareComments = (a,b) =>{
    if ( a.time > b.time ){
    return -1;
  }
  if ( a.time < b.time ){
    return 1;
  }
  return 0;
  
}

const getGame = async(gameName, games) =>{
  const query = {gameName: gameName};
  const game = await games.findOne(query);
}

const getComments = async(gameName, comments, games, playTimes) => {
  const allComments = await comments.find({gameName: gameName}).toArray();
  for (i = 0; i < allComments.length; i++){
    userPlayTime = await playTimes.findOne({userName: allComments[i].userName, gameName: gameName});
    allComments[i]["time"] = userPlayTime.time.toString();
    
  }
  return allComments.sort(compareComments);
}


const getRating = async(gameName, games, users, ratings, playTimes) =>{
  const allRatings = await ratings.find({gameName:gameName}).toArray();
  weightedRating = 0.0;
  for (i = 0; i < allRatings.length; i++){
      userPlayTime = await playTimes.findOne({userName:allRatings[i].userName, gameName: gameName});
      if(! userPlayTime){
        continue;
      }
      weightedRating += userPlayTime.time * allRatings[i].rate;
  }
  
  totalPlayTime = 0.0;
  
  gamePlayTimes = await playTimes.find({gameName: gameName}).toArray();

  for (i = 0; i < gamePlayTimes.length; i++){
    totalPlayTime += gamePlayTimes[i].time;
  }
  if(totalPlayTime==0){
    weightedAvg = 0;
  }
  else{
    weightedAvg = weightedRating/totalPlayTime;
  }

  
  return [weightedAvg.toString(), totalPlayTime.toString()];
}


const getGameDetail= async(gameName, games, users, ratings, comments, playTimes ) =>{
  
  
  [weightedAvg, totalPlayTime] = await getRating(gameName, games, users, ratings, playTimes);
  
  comments = await getComments(gameName, comments, games, playTimes);
  response = {
    rating:weightedAvg,
    totalPlayTime: totalPlayTime,
    comments: comments
  
  } 
  return response;
}




exports = async function(payload) {

    const mongodb = context.services.get("mongodb-atlas");
    const db = mongodb.db("store");
    const games = db.collection("games");
    const users = db.collection("users");
    const ratings = db.collection("ratings");
    const comments = db.collection("comments");
    const playTimes = db.collection("playTimes");

    const cmd=payload.query.cmd;

  
    
    switch(cmd) {
        case "getGameDetail":
            return getGameDetail(payload.query.gameName, games, users, ratings, comments, playTimes);
        default:
            return { text: "Unrecognized command." };
     }
  }