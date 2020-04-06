module.exports = function(stream, io, Tweets){
    /**
    * if socket is close then, stop stream 
    */
    io.on('end', status => { 
        if(status) {
            stream.destroy();
        }
    });
    stream.on('data', function(data) {
        if (data && data.user !== undefined) {
            const tweet = {
                created_at: new Date(data.created_at),
                twid: data.id_str,
                lang: data.lang,
                text: data.text,
                active: true,
                user: {
                    uid: data.user.id,
                    id_str: data.user.id_str,
                    name: data.user.name,
                    screen_name:  data.user.screen_name,
                    location: data.user.location,
                    description: data.user.description,
                    followers_count: data.user.followers_count,
                    friends_count: data.user.friends_count,
                    statuses_count: data.user.statuses_count,
                    profile_image_url: data.user.profile_image_url,
                },
            }
            const tweetEntry = new Tweets(tweet);
            tweetEntry.save(function(err) {
                if (!err) {
                    io.emit('tweet', tweet);
                }
            });
        }
    });
};
  
