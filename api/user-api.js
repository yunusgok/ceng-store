const getPlayTimeForUserGame = async(userName,gameName)=>{
    const mongodb = context.services.get("mongodb-atlas");
    const db = mongodb.db("store");
    const playTimes = db.collection("playTimes");
    const query = {userName: userName, gameName:gameName };
    const userPlayTime = await playTimes.findOne(query);
    return userPlayTime;
  }  
  
  const getAllPlayTime = async(userName)=>{
    const mongodb = context.services.get("mongodb-atlas");
    const db = mongodb.db("store");
    const playTimes = db.collection("playTimes");
    const query = {userName: userName }
    const userPlayTimes = await playTimes.find(query).toArray();
    total = 0;
    for (i = 0; i < userPlayTimes.length; i++){
      total += userPlayTimes[i].time;
    }
    const mostPlayedGame = await playTimes.find(query).sort({time:-1}).limit(1)
    return [mostPlayedGame, total];
    
  }
  
  const getUserDetail = async(users,userName, comments, ratings) => {
    const query = {userName: userName }
    const userComments = await comments.find(query).toArray();
    const userRatings = await ratings.find(query).toArray();
    total = 0.0;
    for (i = 0; i < userRatings.length; i++){
      total += userRatings[i].rate;
    }
    avg = userRatings.length == 0 ?  0 : total/userRatings.length;
    const [mostPlayedGame, totalPlayTime] = await getAllPlayTime(userName);
    response ={userName: userName, comments: userComments, avgRate: avg, mostPlayedGame: mostPlayedGame, totalPlayTime: totalPlayTime}
    return response;
  
  }
  
  const playGame = async(games, playtimes, userName, gameName, time)=>{
    const doc = {gameName:gameName, userName:userName, time:time}
    const query = {userName: userName , gameName: gameName}
    playDoc = await playtimes.findOne(query);
    if (playDoc){
      await playtimes.updateOne(
        query,
        {$inc:{time:time}})
      return {text:"Play Time updated"}
    }
    else{
      await playtimes.insertOne(doc);
      return {text:"Play Time added"}
    }
  }
  
  const rateGame = async(games, ratings, userName, gameName, rate)=>{
    const doc = {gameName:gameName, userName:userName, rate:rate}
    const query = {userName: userName , gameName: gameName}
    ratingDoc = await ratings.findOne(query);
    if (ratingDoc){
      await ratings.updateOne(
        query,
        {$set:{rate:rate}})
      return {text:"Rating updated"}
    }
    else{
      await ratings.insertOne(doc);
      return {text:"Rating added"}
    }
  }
  
  const commentGame = async(games, comments, userName, gameName, comment)=>{
    const doc = {gameName:gameName, userName:userName, comment:comment}
    const query = {userName: userName , gameName: gameName}
    commentDoc = await comments.findOne(query);
    userPlayTime = await getPlayTimeForUserGame(userName, gameName);
    if (!userPlayTime || userPlayTime.time < 60){
      return {text:"You should play game atleast 1 hour"}
    }
    if (commentDoc){
      await comments.updateOne(
        query,
        {$set:{comment:comment}})
      return {text:"Comment updated"}
    }
    else{
      comments.insertOne(doc);
      return {text:"Comment added"}
    }
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
      const doc=payload.query.doc;
    
      
      switch(cmd) {
          case "getUserDetail":
              return getUserDetail(users, payload.query.userName, comments, ratings);
          case "rateGame":
              return rateGame(games, ratings, payload.query.userName, payload.query.gameName, parseInt(payload.query.rate));
          case "commentGame":
              return commentGame(games, comments, payload.query.userName, payload.query.gameName, payload.query.comment);
          case "playGame":
              return playGame(games, playTimes, payload.query.userName, payload.query.gameName, parseInt(payload.query.time))
          default:
              return { text: "Unrecognized command." };
       }
    }