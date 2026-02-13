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
        <h2 className="letter-to">My Lovable Personal Person,</h2>
        <div className="letter-body">
          <p>
            Remember that night on Moji?
            When you said you liked me first?
            That was the moment
            my whole world changed.
          </p>
          <p>
            Every late night call,
            every message,
            every "goodnight" and "good morning" —
            you made 9,000 km
            feel like nothing.
          </p>
          <p>
            July is coming.
            I'll finally hold your hand.
            I'll finally see your smile
            without a screen between us.
          </p>
          <p>
            Kristina Kim —
            I love everything about that name.
          </p>
          <p className="letter-sign">
            Forever yours,<br/>Jungwook 💕
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
