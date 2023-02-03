import { Routes, Route} from 'react-router'

import { HomePage } from "./pages/homepage/homepage.component";
import "./index.css";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route exaxt path='/' element={ <HomePage />} />
        <Route exaxt path='/hats' element={ <HatsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
