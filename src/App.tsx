import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyles"
import Account from "pages/Account"
import Budget from "pages/Budget"

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='account/budget' />} />
          <Route path='login' />
          <Route path='register' />
          <Route path='account' element={<Account />}>
            <Route path='expenses' element={<div>General Kennobi!</div>} />
            <Route path='budget' element={<Budget />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
