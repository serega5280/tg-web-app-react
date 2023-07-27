import { useEffect } from 'react'
import './App.css'
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const inClose = () => {
    tg.close()
  }

  return (
    <div>
      work
      <button onClick={inClose}>Закрыть</button>
    </div>
  );
}

export default App;
