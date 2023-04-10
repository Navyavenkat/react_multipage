import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import PortfolioComponent from './Component/Routes/PortfolioComponent/PortfolioComponent';
import CalculatorComponent from './Component/Routes/CalculatorComponent/CalculatorComponent';
import CartoonComponent from './Component/Routes/CartoonComponent/CartoonComponent';

function App() {
  return (
    <Router>
      <div className='App'>
        
        <ul>
          <li>
            <Link to='/Portfolio' className='link'>Portfolio</Link>
          </li>
          <li>
            <Link to='/Calculator' className='link'>Calculator</Link>
          </li>
          <li>
            <Link to='/Cartoon' className='link'>Cartoon</Link>
          </li>
         
          
        </ul>
        <Routes>
          <Route exact path='/Portfolio' element={<PortfolioComponent/>}></Route>
          <Route exact path='/Calculator' element={<CalculatorComponent/>}></Route>
          <Route exact path='/Cartoon' element={<CartoonComponent/>}></Route>


         
        </Routes>
      </div>
    </Router>
  );
}

export default App;