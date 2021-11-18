import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "src/pages/account";
import GlobalStyle from "src/GlobalStyles";

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
            <Route path="budget" element={<div>Nooooo!</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
