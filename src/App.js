import './App.css';
import Header from "./Header"
import Links from "./Links"
import About from './About';
import Interests from './Interests';

function App() {
  return (
    <div className="container">
      <Header />
      <Links />
      <About />
      <Interests />
    </div>
  );
}

export default App;
