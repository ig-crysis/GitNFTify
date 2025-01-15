'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(0deg, #ff1493, #4169e1)',
            'linear-gradient(60deg, #4169e1, #00ffff)',
            'linear-gradient(120deg, #00ffff, #ff1493)',
            'linear-gradient(180deg, #ff1493, #4169e1)',
            'linear-gradient(240deg, #4169e1, #00ffff)',
            'linear-gradient(300deg, #00ffff, #ff1493)',
            'linear-gradient(360deg, #ff1493, #4169e1)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  )
}

