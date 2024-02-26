import './index.css'
import Header from './components/Header';
import Top from './components/Top';
import Histogram from './components/Histogram';
import Phases from './components/Phases';
import Investigation from './components/Investigation';
import Heroes from './components/Heroes';
import Footer from './components/Footer';

function App() {
  return (
    <div id="start">
      <Header />
      <Top />
      <Histogram />
      <Phases />
      <Investigation />
      <Heroes />
      <Footer />
    </div>
  );
}

export default App