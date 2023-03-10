import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch('/api/videos');
      const data = await res.json();
      setVideos(data.videos);
    }
    fetchVideos();
  }, []);

  return (
    <Layout title="Home Page">
      <div className="bg-cover bg-no-repeat bg-center h-screen"
        style={{ backgroundImage: `url('https://dailychiefers.com/wp-content/media/2022/09/Screen-Shot-2022-09-14-at-3.00.46-PM.png')` }}
      >
        <div className="max-w-screen-lg mx-auto h-screen flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center">952 Da Label 😈</h2>
          <h2 className="text-3xl font-bold text-center mb-8">Videos</h2>
          <div className="flex-grow overflow-y-scroll">
            {videos && videos.length > 0 && (
              <ul className="flex flex-wrap justify-center">
                {videos.map((video) => (
                  <motion.li
                    key={video.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                      <motion.div
                        className="relative rounded-lg overflow-hidden group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.25 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <h3 className="text-white font-bold text-lg mb-2 px-4 py-2">{video.title}</h3>
                          <p className="text-white opacity-75 px-4 py-2">{video.description}</p>
                        </motion.div>
                      </motion.div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
