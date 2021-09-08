import './App.css';
import MemoizedCanvas from './components/ParticleRain.js';
import Header from './components/Header.js';
import ParticleSmoke from './components/ParticleSmoke'
function App() {
  return (
    <div className="App">
      <Header />
      {/* <MemoizedCanvas className='canvasImages'/> */}
      <ParticleSmoke className='canvasImages'/>
    </div>
  );
}

export default App;
