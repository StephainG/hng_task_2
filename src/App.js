import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ListItem from './components/ListItem/ListItem';
import ListItemTech from './components/ListItemTech/ListItemTech';
import Footer from './components/Footer/Footer';
import ListItemPandT from './components/ListItemPandT/ListItemPandT';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ListItem />
      <ListItemTech />
      <ListItemPandT />
      <Footer />
    </div>
  );
}

export default App;
