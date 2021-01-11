import Nav from './Components/Nav'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import './sass/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Introduction />
    </div>
  );
}

export default App;
