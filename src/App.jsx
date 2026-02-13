import { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import CoverPage from './pages/CoverPage'
import StoryPage from './pages/StoryPage'
import LetterPage from './pages/LetterPage'
import './App.css'

const stories = [
  // — ACT 1: ZOOM IN —
  {
    text: 'In a universe\nof 100 billion galaxies…',
    emoji: '🌌',
    bg: 'linear-gradient(160deg, #0d0d2b 0%, #1a1a40 40%, #2d1b69 100%)',
    light: true,
  },
  {
    text: 'In one galaxy,\namong 100 billion stars…',
    emoji: '✨',
    bg: 'linear-gradient(160deg, #1a1a40 0%, #1b2a5c 50%, #2d1b69 100%)',
    light: true,
  },
  {
    text: 'There is one small planet\ncalled Earth.',
    emoji: '🌍',
    bg: 'linear-gradient(160deg, #1a1a40 0%, #1b3a5c 50%, #2a6496 100%)',
    light: true,
  },
  {
    text: '8 billion people\nliving their lives,\nnever knowing each other.',
    emoji: '🌃',
    bg: 'linear-gradient(160deg, #1b2838 0%, #2c3e50 50%, #4a6741 100%)',
    light: true,
  },
  {
    text: 'On one side — a boy.\nOn the other side of the world —\na girl.',
    emoji: '🌏',
    bg: 'linear-gradient(160deg, #2c3e50 0%, #4a5568 50%, #667eea 100%)',
    light: true,
  },
  {
    text: 'Then one day,\nthrough a glowing screen,\nthey found each other.',
    emoji: '💻',
    bg: 'linear-gradient(160deg, #2d3748 0%, #4a5568 40%, #a78bfa 100%)',
    light: true,
  },
  {
    text: '1 in 8 billion.\nThat is not luck.\nThat is not fate.\nThat cannot be explained.',
    emoji: '💫',
    bg: 'linear-gradient(160deg, #4a1942 0%, #c2185b 50%, #f48fb1 100%)',
    light: true,
  },
  // — ACT 2: HIS HEART —
  {
    text: 'Before her,\nthe world was just a place.\nAfter her,\nit became something worth waking up for.',
    emoji: '🌅',
    bg: 'linear-gradient(160deg, #1a1a2e 0%, #e65100 30%, #ff8f00 70%, #ffd54f 100%)',
    light: true,
  },
  {
    text: 'She made the colors brighter.\nThe music louder.\nThe silence — warmer.',
    emoji: '🎵',
    bg: 'linear-gradient(160deg, #4a1942 0%, #6a1b9a 40%, #ce93d8 100%)',
    light: true,
  },
  {
    text: 'And he started to dream.\nOf walking with her\nunder the same sky.',
    emoji: '🚶',
    bg: 'linear-gradient(160deg, #1a237e 0%, #3949ab 40%, #7986cb 100%)',
    light: true,
  },
  {
    text: 'Holding her hand\nfor the first time.',
    emoji: '🤝',
    bg: 'linear-gradient(160deg, #4a148c 0%, #7b1fa2 40%, #ce93d8 100%)',
    light: true,
  },
  {
    text: 'Going on adventures together.\nSmall ones.\nBig ones.\nAll of them — theirs.',
    emoji: '🗺️',
    bg: 'linear-gradient(160deg, #004d40 0%, #00796b 40%, #4db6ac 100%)',
    light: true,
  },
  {
    text: 'One day, standing together\nand promising forever.',
    emoji: '💍',
    bg: 'linear-gradient(160deg, #b71c1c 0%, #e53935 40%, #ef9a9a 100%)',
    light: true,
  },
  {
    text: 'Building a home.\nFilling it with laughter.\nWatching little ones grow.',
    emoji: '🏡',
    bg: 'linear-gradient(160deg, #f57f17 0%, #fbc02d 40%, #fff9c4 100%)',
    light: false,
  },
  {
    text: 'Growing old together.\nStill holding hands.\nStill choosing each other\nevery single day.',
    emoji: '👴👵',
    bg: 'linear-gradient(160deg, #3e2723 0%, #795548 40%, #d7ccc8 100%)',
    light: true,
  },
  // — ACT 3: ZOOM OUT —
  {
    text: 'Two people\nwho once lived worlds apart —\nbecame each other\'s world.',
    emoji: '🌍',
    bg: 'linear-gradient(160deg, #1a237e 0%, #283593 40%, #5c6bc0 100%)',
    light: true,
  },
  {
    text: 'And this summer,\ntheir story begins.',
    emoji: '✈️',
    bg: 'linear-gradient(160deg, #fce4ec 0%, #f8bbd0 50%, #ff8a80 100%)',
    light: false,
  },
]

export default function App() {
  const [page, setPage] = useState(-1) // -1 = cover
  const [direction, setDirection] = useState(1)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const totalPages = stories.length // 0..N = stories, N+1 = letter

  const goNext = () => {
    if (page < totalPages) {
      setDirection(1)
      setPage(p => p + 1)
    }
  }

  const goPrev = () => {
    if (page > -1) {
      setDirection(-1)
      setPage(p => p - 1)
    }
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) goNext()
      else goPrev()
    }
  }

  const renderPage = () => {
    if (page === -1) {
      return <CoverPage key="cover" onStart={goNext} />
    }
    if (page >= 0 && page < stories.length) {
      return (
        <StoryPage
          key={page}
          story={stories[page]}
          pageNum={page + 1}
          totalPages={stories.length}
          direction={direction}
        />
      )
    }
    return <LetterPage key="letter" direction={direction} />
  }

  return (
    <div
      className="app-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={direction}>
        {renderPage()}
      </AnimatePresence>

      {page >= 0 && (
        <div className="nav-buttons">
          <button className="nav-btn" onClick={goPrev} aria-label="Previous">
            ‹
          </button>
          {page < totalPages && (
            <button className="nav-btn" onClick={goNext} aria-label="Next">
              ›
            </button>
          )}
        </div>
      )}
    </div>
  )
}
