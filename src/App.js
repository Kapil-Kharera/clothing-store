import { Routes, Route} from 'react-router'

import { HomePage } from "./pages/homepage/homepage.component";
import "./index.css";
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route exaxt path='/' element={ <HomePage />} />
        <Route exaxt path='/shop' element={ <ShopPage /> } />
      </Routes>
    </div>
  );
}

export default App;
