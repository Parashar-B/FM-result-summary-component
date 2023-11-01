import { useState } from 'react'
import ResultSummary from './components/ResultSummary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResultSummary/>
    </>
  )
}

export default App
