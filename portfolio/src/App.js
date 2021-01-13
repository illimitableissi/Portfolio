import Nav from './Components/Nav'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import './sass/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
