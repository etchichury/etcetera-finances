import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="login" />
        <Route path="register" />
        <Route path="account">
          <Route path="expenses" />
          <Route path="budget" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
