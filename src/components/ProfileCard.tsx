import React from 'react';
import { GitHubProfile } from '../types';
import { Users, GitFork, Star , LayoutGrid } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';

interface ProfileCardProps {
  profile: GitHubProfile | null;
  loading: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, loading }) => {
  if (loading) {
    return (
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <Skeleton height={100} width={100} circle className="mx-auto" />
        <Skeleton height={24} width={200} className="mt-4 mx-auto" />
        <Skeleton count={3} className="mt-4" />
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
      <img
        src={profile.avatar_url}
        alt={profile.name}
        className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500"
      />
      <h2 className="text-2xl font-bold text-center mt-4">{profile.name}</h2>
      <p className="text-gray-600 text-center">@{profile.login}</p>
      <p className="text-gray-700 text-center mt-2">{profile.bio}</p>
      
      <div className="flex justify-center gap-6 mt-6">
        <div className="text-center">
          <Users className="w-5 h-5 mx-auto text-blue-500" />
          <p className="text-sm text-gray-600 mt-1">Followers</p>
          <p className="font-semibold">{profile.followers}</p>
        </div>
        <div className="text-center">
          <GitFork className="w-5 h-5 mx-auto text-blue-500" />
          <p className="text-sm text-gray-600 mt-1">Repos</p>
          <p className="font-semibold">{profile.public_repos}</p>
        </div>
        <div className="text-center">
          <Star className="w-5 h-5 mx-auto text-blue-500" />
          <p className="text-sm text-gray-600 mt-1">Following</p>
          <p className="font-semibold">{profile.following}</p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
          <div className="text-center">
            <LayoutGrid className="w-5 h-5 mx-auto text-green-500" />
            <p className="text-sm text-gray-600 mt-1">Contributions</p>
            <p className="font-semibold">{profile.contributions}</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="text-center">
            <p className="text-md text-black-600 mt-1">Right now its just a random NFT! but with integration of AI LLMs like DALL-E,StabilityAI,Flux etc we can bring the idea into reality</p>
            <p className="font-semibold">{profile.contributions}</p>
          </div>
        </div>
    </div>
  );
};