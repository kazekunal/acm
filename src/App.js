import './App.css';
import Navbar from './component/navbar';
import Home from './component/home'
import About from './component/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
