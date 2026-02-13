import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './LetterPage.css'

const PARTICLES = 30

function Particle({ index }) {
  const isHeart = index % 3 !== 0
  const emoji = isHeart ? '💗' : '🌸'
  const left = Math.random() * 100
  const delay = Math.random() * 5
  const duration = 4 + Math.random() * 4
  const size = 12 + Math.random() * 16

  return (
    <motion.span
      className="particle"
      style={{
        left: `${left}%`,
        fontSize: `${size}px`,
      }}
      initial={{ y: -30, opacity: 0, rotate: 0 }}
      animate={{
        y: '100dvh',
        opacity: [0, 1, 1, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {emoji}
    </motion.span>
  )
}

export default function LetterPage({ direction }) {
  return (
    <motion.div
      className="letter-page"
      initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    >
      <div className="particles">
        {[...Array(PARTICLES)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      <motion.div
        className="letter-card"
        initial={{ y: 40, opacity: 0, rotateX: 10 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="letter-header">💌</div>
        <h2 className="letter-to">Dear Kristina,</h2>
        <div className="letter-body">
          <p>
            Out of 8 billion people,
            I found you.
          </p>
          <p>
            We haven't met in person yet,
            but every moment with you —
            even through a screen —
            is the most precious thing
            in my world.
          </p>
          <p>
            This summer, when we finally meet,
            I'll say everything
            I've been wanting to tell you.
          </p>
          <p>
            Until then, and forever after —
          </p>
          <p className="letter-sign">
            I love you 💕
          </p>
        </div>
      </motion.div>

      <motion.div
        className="happy-valentine"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        Happy Valentine's Day 💝
      </motion.div>
    </motion.div>
  )
}
