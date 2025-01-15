import React from 'react';
import { Bitcoin, Wallet, Database, Waypoints, HandCoins } from 'lucide-react';

export const Web3Info: React.FC = () => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Web3 & NFT Guide</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Bitcoin className="w-8 h-8 text-orange-500" />
            <h3 className="text-xl font-semibold">Cryptocurrency</h3>
          </div>
          <p className="text-gray-600">
            Digital or virtual currencies that use cryptography for security. Bitcoin
            and Ethereum are the most well-known examples.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Blockchain</h3>
          </div>
          <p className="text-gray-600">
            A decentralized, distributed ledger that records transactions across a
            network of computers securely and transparently.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Wallet className="w-8 h-8 text-green-500" />
            <h3 className="text-xl font-semibold">NFTs</h3>
          </div>
          <p className="text-gray-600">
            Non-Fungible Tokens are unique digital assets that represent ownership
            of digital items like art, music, or collectibles.
          </p>
        </div>
      </div>
      <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Waypoints className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Steps: How easy it is to list an NFT</h3>
          </div>
          <p className="text-gray-600">
            Step-1 Download the NFT by clicking on the NFT<br></br>
            Step-2 Choose your marketplace i.e OpenSea,Elements,Drip,Rarible<br></br>
            Step-3 Connect your Web3 Wallet or login to the marketplace<br></br>
            Step-4 Create ERC-721 contract on the blockchain and boom<br></br>
            YOU ARE READY TO LIST YOUR NFT!!!
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <HandCoins className="w-8 h-8 text-yellow-500" />
            <h3 className="text-xl font-semibold">Earn in Crypto🔥</h3>
          </div>
          <p className="text-gray-600">
            There are millions of blochchains Like Etherium,Bitcoin etc and you can earn it too.
          </p>
        </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold">Bitcoin</h3>
          </div>
          <img
        src='./img/btc.jpg'
        alt='Bitcoin'
        className="w-28 h-28 rounded-md mx-auto border-4 border-blue-500"
      />
      </div>
      <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold">Etherium</h3>
          </div>
          <img
        src='./img/Eth.jpg'
        alt='Etherium'
        className="w-28 h-28 rounded-md mx-auto border-4 border-blue-500"
      />
      </div>
      <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold">Tether-USDT</h3>
          </div>
          <img
        src='./img/usdt.jpg'
        alt='Etherium'
        className="w-28 h-28 rounded-md mx-auto border-4 border-blue-500"
      />
      </div>
        </div>
        <div className="text-xl font-bold text-center mb-8">Made by <a href='https://www.linkedin.com/in/anant-bhatnagar-b2884b219/' target='_blank' className="text-blue-500 underline">Anant Bhatnagar</a></div>
    </div>
    
  );
};