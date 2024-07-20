
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import SortPage from "./components/SortPage"
import TraversePage from "./components/TraversePage"
import "./styles.css"
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <main>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="homepage" element={<HomePage />}/>
          <Route path="sortpage" element={<SortPage />}/>
          <Route path="traversepage" element={<TraversePage />}/>
        </Routes>
      </div>
    </main>
  )
}

export default App
