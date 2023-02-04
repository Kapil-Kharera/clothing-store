import { Routes, Route} from 'react-router'

import { HomePage } from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exaxt path='/' element={ <HomePage />} />
        <Route exaxt path='/shop' element={ <ShopPage /> } />
      </Routes>
    </div>
  );
}

export default App;
