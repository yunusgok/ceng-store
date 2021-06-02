const addCol = async(col, doc) => {

    const result = await col.insertOne(JSON.parse(doc));
    if(result) {
        return { text: `Document added` };
    }
    return { text: `Error stashing` };
}

const removeGame = async(games, users,ratings, playTimes, comments, gameName) => {
    const query = { "gameName":  gameName };
    const gameDelResult = await games.deleteOne( { "gameName":  gameName });
    await playTimes.deleteMany(query );
    await comments.deleteMany(query);
    await ratings.deleteMany(query);
    const update = { $pull: { comments: {gameName: gameName} }};
    const options = { "upsert": false };
    const commentDelResult = await users.updateMany(
        {},
        update,
        options
    );
    return { 
        text: ` ${gameDelResult.deletedCount} games deleted.\n 
        ${commentDelResult.modifiedCount } comments deleted.` 
    };
}

const removeUser = async(games, users,ratings, playTimes, comments, userName) => {
    const query = { "userName":  userName };
    const gameDelResult = await users.deleteOne( { "userName": userName});
    await playTimes.deleteMany(query );
    await comments.deleteMany(query);
    await ratings.deleteMany(query);
    const update = { $pull: { comments: {userName: userName} }};
    const options = { "upsert": false };
    const commentDelResult = await games.updateMany(
        {},
        update,
        options
    );
    return { 
        text: ` ${gameDelResult.deletedCount} users deleted.\n 
        ${commentDelResult.modifiedCount} comments deleted.
        `
    };

}

const changeRating = async(games, gameName, enabled) => {
    const query = {gameName: gameName }
    const update = {
        "$set":{
            "enabled": enabled,
        }
    };
    const options = { "upsert": false }
    const disableResult = await games.updateOne(
        query,
        update,
        options
    )
    return {text: `Successfully matched ${disableResult.matchedCount} and modified ${disableResult.modifiedCount} items.`}

}
const getEntities= async(collection)=>{

  return collection.find({}).toArray();
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
        case "addGame":
            return addCol(games, doc);

        case "removeGame":
            return removeGame(games, users,ratings, playTimes, comments, payload.query.gameName)

        case "disableRating":
            return changeRating(games, payload.query.gameName, false)
        
        case "enableRating":
            return changeRating(games, payload.query.gameName, true)

        case "addUser":
            return addCol(users, doc);

        case "removeUser":
            return removeUser(games, users,ratings, playTimes, comments, payload.query.userName)
            
        case "getGames":
            return getEntities(games);
            
        case "getUsers":
            return getEntities(users);

        default:
            return { text: "Unrecognized command." };
     }
  }