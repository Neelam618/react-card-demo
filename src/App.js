import './App.css';
import PropertyCard from './components/PropertyCard';

function App() {
  return (
    <div id="app" className="antialiased text-gray-900">
      <div className="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
        <PropertyCard />
      </div>
    </div>
  );
}

export default App;
