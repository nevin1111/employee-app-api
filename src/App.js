import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import DeleteEmployee from './components/DeleteEmployee';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewEmployee/>} />
          <Route path="/Add" element={<AddEmployee/>} />
          <Route path="/Search" element={<SearchEmployee />} />
          <Route path="/Delete" element={<DeleteEmployee />} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;
