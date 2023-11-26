import { Category } from "./components/Category";
import { Navbar } from "./components/Navbar";
import { Pages } from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Category />
          <Pages />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
