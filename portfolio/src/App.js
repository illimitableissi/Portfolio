import Nav from './Components/Nav'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'
import './sass/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
