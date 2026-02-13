import { motion } from 'framer-motion'
import './CoverPage.css'

export default function CoverPage({ onStart }) {
  return (
    <motion.div
      className="cover-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <div className="cover-decorations">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="floating-heart"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              fontSize: `${14 + Math.random() * 20}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['💗', '🌸', '✨', '🦋'][i % 4]}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="cover-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="cover-book-icon">💌</div>
        <h1 className="cover-title">To My LPP</h1>
        <p className="cover-subtitle">Kristina, this is for you</p>

        <motion.button
          className="start-btn"
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Open ♡
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
