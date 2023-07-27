import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './components/hooks/useTelegram'
import Header from './components/Header/Header'

// const tg = window.Telegram.WebApp

function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])



  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>toggle</button>
      {/* <button onClick={inClose}>Закрыть</button> */}
    </div>
  );
}

export default App;
