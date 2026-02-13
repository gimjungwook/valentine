import { motion } from 'framer-motion'
import './App.css'

const stories = [
  {
    text: 'One random night.\nOne random app.\nMoji.',
    emoji: '📱',
    bg: 'linear-gradient(160deg, #0d0d2b 0%, #1a1a40 40%, #2d1b69 100%)',
  },
  {
    text: 'A girl from Russia.\nA boy from Korea.\n9,000 km apart.',
    emoji: '🌏',
    bg: 'linear-gradient(160deg, #1a1a40 0%, #1b2a5c 50%, #2d1b69 100%)',
  },
  {
    text: 'She said something first.\nSomething that changed everything.',
    emoji: '💬',
    bg: 'linear-gradient(160deg, #2c3e50 0%, #4a5568 50%, #667eea 100%)',
  },
  {
    text: '"I like you."',
    emoji: '💗',
    bg: 'linear-gradient(160deg, #4a1942 0%, #c2185b 50%, #f48fb1 100%)',
    big: true,
  },
  {
    text: 'That night,\nthey talked until\nthe sun came up.',
    emoji: '🌙',
    bg: 'linear-gradient(160deg, #0d1b2a 0%, #1b263b 40%, #415a77 100%)',
  },
  {
    text: 'And the next night.\nAnd the next.',
    emoji: '✨',
    bg: 'linear-gradient(160deg, #1a237e 0%, #3949ab 40%, #7986cb 100%)',
  },
  {
    text: 'Time zones?\nDidn\'t matter.',
    emoji: '⏰',
    bg: 'linear-gradient(160deg, #004d40 0%, #00796b 40%, #4db6ac 100%)',
  },
  {
    text: 'Distance?\nDidn\'t matter.',
    emoji: '🗺️',
    bg: 'linear-gradient(160deg, #bf360c 0%, #e64a19 40%, #ff8a65 100%)',
  },
  {
    text: 'She became his\nLovable\nPersonal\nPerson.',
    emoji: '🦋',
    bg: 'linear-gradient(160deg, #4a1942 0%, #6a1b9a 40%, #ce93d8 100%)',
    big: true,
  },
  {
    text: 'And he dreamed\nof a name.',
    emoji: '💭',
    bg: 'linear-gradient(160deg, #1a1a2e 0%, #e65100 30%, #ff8f00 70%, #ffd54f 100%)',
  },
  {
    text: 'Kristina Kim.',
    emoji: '💍',
    bg: 'linear-gradient(160deg, #b71c1c 0%, #e53935 40%, #ef9a9a 100%)',
    big: true,
  },
  {
    text: 'July 2026.\nKorea.\nFinally.',
    emoji: '✈️',
    bg: 'linear-gradient(160deg, #1565c0 0%, #42a5f5 40%, #90caf9 100%)',
  },
  {
    text: 'Walking together.\nHolding hands.\nFor real.',
    emoji: '🤝',
    bg: 'linear-gradient(160deg, #2e7d32 0%, #66bb6a 40%, #a5d6a7 100%)',
  },
  {
    text: 'Our story\nis just beginning.',
    emoji: '📖',
    bg: 'linear-gradient(160deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)',
    dark: true,
  },
]

function StorySection({ story, index }) {
  return (
    <section
      className="story-section"
      style={{ background: story.bg }}
    >
      <motion.div 
        className="story-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="story-emoji"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        >
          {story.emoji}
        </motion.div>
        <p className={`story-text ${story.big ? 'big' : ''} ${story.dark ? 'dark' : ''}`}>
          {story.text}
        </p>
      </motion.div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['💗', '✨', '🌸', '💫'][i % 4]}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

function CoverSection() {
  return (
    <section className="cover-section">
      <motion.div 
        className="cover-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div 
          className="cover-emoji"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          💌
        </motion.div>
        <h1 className="cover-title">To My LPP</h1>
        <p className="cover-subtitle">Kristina, this is for you</p>
        <motion.div 
          className="scroll-hint"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll down</span>
          <span className="arrow">↓</span>
        </motion.div>
      </motion.div>
      
      {/* Floating hearts */}
      <div className="cover-particles">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 24}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {['💗', '💕', '🌸', '✨', '🦋'][i % 5]}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

function LetterSection() {
  return (
    <section className="letter-section">
      <motion.div 
        className="letter-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="letter-header"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          💌
        </motion.div>
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
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        Happy Valentine's Day 💝
      </motion.div>

      {/* Falling hearts */}
      <div className="falling-hearts">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="falling-heart"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 20}px`,
            }}
            animate={{
              y: ['-10vh', '110vh'],
              rotate: [0, 360],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {['💗', '💕', '🌸', '💖'][i % 4]}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="app-scroll">
      <CoverSection />
      {stories.map((story, index) => (
        <StorySection key={index} story={story} index={index} />
      ))}
      <LetterSection />
    </div>
  )
}
