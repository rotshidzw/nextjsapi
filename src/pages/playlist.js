 /* eslint-disable no-alert, no-console */
import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import axios from 'axios';

function Playlist({ playlist, videos }) {
  return (
    <Layout title={playlist.title}>
      <div
        className="h-screen overflow-hidden relative"
        style={{ backgroundImage: `url('https://media.pitchfork.com/photos/633443581dccce609e4163c5/3:2/w_3000,h_2000,c_limit/Anti-da-Menace-Legendary.jpg')`}}
        >
        <div className="absolute inset-0 bg-opacity-70 z-0">
        <div className="max-w-5xl mx-auto h-full py-6">
          <h1 className="text-3xl text-white font-bold mb-4">{playlist.title}</h1>
          <p className="text-gray-300 mb-8">{playlist.description}</p>

          <div className="h-full overflow-y-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <motion.iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allowFullScreen
                    className="w-full h-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  ></motion.iframe>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{video.title}</h2>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const playlistId = 'PL2Nc0vlZLqflKcZGk2aBgJj0ZlwYR6AGP';
  const apiKey = 'AIzaSyAbbXpzVK4jD_ILNRZLBhD89BSn3vu726k';
  const playlistUrl = `https://www.googleapis.com/youtube/v3/playlists?id=${playlistId}&part=snippet&key=${apiKey}`;
  const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&part=snippet&key=${apiKey}`;

  try {
    // Fetch playlist info
    const playlistResponse = await axios.get(playlistUrl);
    const playlist = playlistResponse.data.items[0].snippet;

    // Fetch playlist items (videos)
    const playlistItemsResponse = await axios.get(playlistItemsUrl);
    const videos = playlistItemsResponse.data.items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
     
    }));

    // Get largest image from playlist thumbnails
    const thumbnail = playlist.thumbnails.maxres
      ? playlist.thumbnails.maxres.url
      : playlist.thumbnails.high.url;

    return {
      props: {
        playlist: {
          title: playlist.title,
          description: playlist.description,
          imageUrl: thumbnail,
        },
        videos,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

export default Playlist;
