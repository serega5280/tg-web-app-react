import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './components/hooks/useTelegram'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import ProductList from './ProductList/ProductList'
import Form from './Form/Form'

// const tg = window.Telegram.WebApp

function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])



  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
      {/* <button onClick={inClose}>Закрыть</button> */}
    </div>
  );
}

export default App;
