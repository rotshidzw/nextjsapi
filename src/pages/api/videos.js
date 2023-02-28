import { google } from 'googleapis';

export default async function handler(req, res) {
  try {
    const youtube = google.youtube({
      version: 'v3',
      auth: process.env.YOUTUBE_API_KEY
    });
    const { data } = await youtube.search.list({
      part: 'snippet',
      channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw', // replace with your channel ID
      maxResults: 10,
      type: 'video'
    });
    const videos = data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url
    }));
    res.status(200).json({ videos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unable to retrieve videos' });
  }
}
