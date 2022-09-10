import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/GlobalStyles";
import Account from "src/pages/Account";
import Budget from "src/pages/Budget";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="login" />
          <Route path="register" />
          <Route path="account" element={<Account />}>
            <Route path="expenses" element={<div>General Kennobi!</div>} />
            <Route path="budget" element={<Budget/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
