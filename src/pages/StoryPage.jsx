import { motion } from 'framer-motion'
import './StoryPage.css'

const variants = {
  enter: (dir) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

export default function StoryPage({ story, pageNum, totalPages, direction }) {
  return (
    <motion.div
      className={`story-page ${story.light ? 'light-text' : ''}`}
      style={{ background: story.bg }}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    >
      <div className="story-inner">
        <motion.div
          className="story-emoji"
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          {story.emoji}
        </motion.div>

        <motion.p
          className="story-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {story.text}
        </motion.p>

        <div className="page-indicator">
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              className={`dot ${i === pageNum - 1 ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
