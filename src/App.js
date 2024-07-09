import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ListItem from './components/ListItem/ListItem';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ListItem />
      <Footer />
    </div>
  );
}

export default App;
