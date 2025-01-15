import React, { useState } from 'react';
import axios from 'axios';
import { GitHubProfile } from './types';
import { ProfileSearch } from './components/ProfileSearch';
import { ProfileCard } from './components/ProfileCard';
import { NFTPreview } from './components/NFTPreview';
import { Web3Info } from './components/Web3Info';
import { EntryPage } from './components/EntryPage';
import { Github } from 'lucide-react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { motion } from 'framer-motion';

const nftImages = [
  'img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.jpeg', 'img6.jpeg',  'img8.jpeg'
];

function App() {
  const [showMain, setShowMain] = useState(false);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [nftImage, setNftImage] = useState<string | null>(null);

  const fetchGitHubProfile = async (username: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfile(response.data);
      const randomImage = nftImages[Math.floor(Math.random() * nftImages.length)];
      setNftImage(`/img/${randomImage}`);
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      alert('Error fetching GitHub profile. Please check the username and try again.');
    }
    setLoading(false);
  };
  

  const handleEntryComplete = (githubUrl: string) => {
    setShowMain(true);
    const username = githubUrl.split('/').pop() || githubUrl;
    fetchGitHubProfile(username);
  };

  const handleDownload = (format: string) => {
    alert(`Downloading NFT in ${format} format...`);
  };

  if (!showMain) {
    return <EntryPage onComplete={handleEntryComplete} />;
  }

  return (
    <>
      <AnimatedBackground />
      <motion.div
        className="min-h-screen relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Github className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              GitNFTify
            </h1>
            <p className="text-2xl text-black-500 underline decoration-double	max-w-2xl mx-auto">
              The Idea is to transform your GitHub profile image or any Image into a unique NFT! with AI and list it on Marketplaces.<br></br>Get CRYPTO Insights! <br></br>Enter your GitHub username
              to get started.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-8">
            <ProfileSearch onSearch={fetchGitHubProfile} />
            
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
              <ProfileCard profile={profile} loading={loading} />
              <NFTPreview imageUrl={nftImage} onDownload={handleDownload} />
            </div>

            {profile && <Web3Info />}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default App;

