import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import NotFound from "./page/NotFound";

import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Portfolio" element={<Main />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
