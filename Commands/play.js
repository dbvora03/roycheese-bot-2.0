const ytdl = require('ytdl-core')
const ytSearch = require('yt-search')
const { execute } = require('./ping')

const queue = new Map();




module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    description: 'Music bot',
    async execute(message, args, client, Discord) {

        const voice_channel = message.member.voice.channel;
        if(!voice_channel) return message.channel.send("Join the channel first")
        const permissions = voice_channel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('you dont have the corrent permissions')
        if(!permissions.has('SPEAK')) return message.channel.send('you dont have the corrent permissions')

        const server_queue = queue.get(message.guild.id)

        if(args[0] === 'play') {


            if(!args.length) return message.channel.send('You need to add a song')

            let song = {}

            if(ytdl.validateURL(args[0])){

                const song_info = await ytdl.getInfo(args[0])
                song = {title: song_info.videoDetails.title, url: song_info.videoDetails.video_url}
            } else {
                const video_finder = async (query) => {
                    const videoResult = await ytSearch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if(video) {
                    song = {title: video.title, url: video.url}
                } else {
                    message.channel.send("couldnt find your video")
                }
            }

            if(!server_queue) {
                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
    
                queue.set(message.guild.id, queue_constructor)
                queue_constructor.songs.push(song)
    
                try {
                    const connection = await voice_channel.join()
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0])
                } catch (err) {
                    queue.delete(message.guild.is)
                    message.channel.send('Error connecting!')
                    throw err
                }
            } else {
                server_queue.songs.push(song)
                return message.channel.send("Song has been added to the queue")
            }
        }
    }
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if(!song) {
        song_queue.voice_channel.leave()
        queue.delete(guild.id)
    }

    const stream = ytdl(song.url, {filter: 'audioonly'})
    song_queue.connection.play(stream, {seek:0, volume:0.5}).on('finish', ()=> {
        song_queue.songs.shift()
        video_player(guild, song_queue.songs[0])
    })

    await song_queue.text_channel.send(`Now playing ${song.title}`)
}