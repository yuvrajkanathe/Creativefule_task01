import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SortableTable from './components/SortableTable';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SortableTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
