import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Travel from './components/Travel';
import travels from './components/data/Data';

function App() {
    let travelData = travels.map((travel, index) => {
        return (
            <Travel
                key={index}
                {...travel}
            />
        );
    });

  return (
    <div className="App">
        <Header />

        <div className="main-content">
            <div className="travel-list">
                {travelData}
            </div>
        </div>
    </div>
  );
}

export default App;
