import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1
        style={{
          transition: 'color 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={e => (e.target.style.color = '#0078d4')}
        onMouseLeave={e => (e.target.style.color = '')}
      >
        CICD DevOps
      </h1>
    </div>
  )
}

export default App
