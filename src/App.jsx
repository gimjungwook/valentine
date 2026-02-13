import { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import CoverPage from './pages/CoverPage'
import StoryPage from './pages/StoryPage'
import LetterPage from './pages/LetterPage'
import './App.css'

const stories = [
  // — ACT 1: THE BEGINNING —
  {
    text: 'One random night.\nOne random app.\nMoji.',
    emoji: '📱',
    bg: 'linear-gradient(160deg, #0d0d2b 0%, #1a1a40 40%, #2d1b69 100%)',
    light: true,
  },
  {
    text: 'A girl from Russia.\nA boy from Korea.\n9,000 km apart.',
    emoji: '🌏',
    bg: 'linear-gradient(160deg, #1a1a40 0%, #1b2a5c 50%, #2d1b69 100%)',
    light: true,
  },
  {
    text: 'She said something first.\nSomething that changed everything.',
    emoji: '💬',
    bg: 'linear-gradient(160deg, #2c3e50 0%, #4a5568 50%, #667eea 100%)',
    light: true,
  },
  {
    text: '"I like you."',
    emoji: '💗',
    bg: 'linear-gradient(160deg, #4a1942 0%, #c2185b 50%, #f48fb1 100%)',
    light: true,
  },
  // — ACT 2: FALLING —
  {
    text: 'That night,\nthey talked until the sun came up.\nAnd the next night.\nAnd the next.',
    emoji: '🌙',
    bg: 'linear-gradient(160deg, #0d1b2a 0%, #1b263b 40%, #415a77 100%)',
    light: true,
  },
  {
    text: 'Time zones didn\'t matter.\nDistance didn\'t matter.\nNothing else mattered.',
    emoji: '⏰',
    bg: 'linear-gradient(160deg, #1a237e 0%, #3949ab 40%, #7986cb 100%)',
    light: true,
  },
  {
    text: 'She became his\nLovable\nPersonal\nPerson.',
    emoji: '🦋',
    bg: 'linear-gradient(160deg, #4a1942 0%, #6a1b9a 40%, #ce93d8 100%)',
    light: true,
  },
  {
    text: 'And he started dreaming\nof a name.',
    emoji: '💭',
    bg: 'linear-gradient(160deg, #1a1a2e 0%, #e65100 30%, #ff8f00 70%, #ffd54f 100%)',
    light: true,
  },
  {
    text: 'Kristina Kim.',
    emoji: '💍',
    bg: 'linear-gradient(160deg, #b71c1c 0%, #e53935 40%, #ef9a9a 100%)',
    light: true,
  },
  // — ACT 3: THE FUTURE —
  {
    text: 'Walking together\nin Seoul.',
    emoji: '🚶‍♂️🚶‍♀️',
    bg: 'linear-gradient(160deg, #004d40 0%, #00796b 40%, #4db6ac 100%)',
    light: true,
  },
  {
    text: 'Holding hands\nfor the first time.',
    emoji: '🤝',
    bg: 'linear-gradient(160deg, #4a148c 0%, #7b1fa2 40%, #ce93d8 100%)',
    light: true,
  },
  {
    text: 'Building a life.\nFilling it with laughter.\nMaking every dream real.',
    emoji: '🏡',
    bg: 'linear-gradient(160deg, #f57f17 0%, #fbc02d 40%, #fff9c4 100%)',
    light: false,
  },
  {
    text: 'Growing old together.\nStill staying up late.\nStill choosing each other.',
    emoji: '👴👵',
    bg: 'linear-gradient(160deg, #3e2723 0%, #795548 40%, #d7ccc8 100%)',
    light: true,
  },
  // — THE MOMENT —
  {
    text: 'July 2026.\nKorea.\nFinally.',
    emoji: '✈️',
    bg: 'linear-gradient(160deg, #1a237e 0%, #283593 40%, #5c6bc0 100%)',
    light: true,
  },
  {
    text: 'Our story\nis just beginning.',
    emoji: '📖',
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
