import { Routes, Route} from 'react-router'

import { HomePage } from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signIn-signUp/signInsignUp.component'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exaxt path='/' element={ <HomePage />} />
        <Route exaxt path='/shop' element={ <ShopPage /> } />
        <Route exaxt path='/signin' element={ <SignInSignUp /> } />
      </Routes>
    </div>
  );
}

export default App;
