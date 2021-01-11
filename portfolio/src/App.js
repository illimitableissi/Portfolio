import Nav from './Components/Nav'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import Footer from './Components/Footer'
import './sass/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Introduction />
      <Footer />
    </div>
  );
}

export default App;
