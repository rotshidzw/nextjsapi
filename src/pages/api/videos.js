import { google } from 'googleapis';
import { motion } from 'framer-motion';


export default async function handler(req, res) {
  try {
    const youtube = google.youtube({
      version: 'v3',
      auth: process.env.YOUTUBE_API_KEY
    });
    const { data } = await youtube.search.list({
      part: 'snippet',
      channelId: 'UChOIeBWpgfnSYN9nk1Ns0Bw', // replace with your channel ID
      maxResults: 98,
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
