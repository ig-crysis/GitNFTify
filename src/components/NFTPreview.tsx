import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface NFTPreviewProps {
  imageUrl: string | null;
  onDownload: (format: string) => void;
}

export const NFTPreview: React.FC<NFTPreviewProps> = ({ imageUrl, onDownload }) => {
  if (!imageUrl) return null;

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Your Generated NFT</h3>
      <div className="relative group">
        <img
          src={imageUrl}
          alt="Generated NFT"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
          <div className="space-x-4">
            <button
              onClick={() => onDownload('png')}
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <h4 className="text-lg font-semibold">List on NFT Marketplaces</h4>
        <div className="flex gap-4">
          <a
            href="https://opensea.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            OpenSea <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://rarible.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Rarible <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://element.market/create/contract"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Element <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};