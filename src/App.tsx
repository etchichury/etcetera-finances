import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
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
