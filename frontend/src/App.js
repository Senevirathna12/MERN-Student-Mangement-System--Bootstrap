import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import AddStudent from './Components/AddStudentComponent';
import Header from './Components/Header';

function App() {
  return (
   <Router>
      <div>
        <Header/>
        <Routes><Route path="/add" element={<AddStudent/>}/></Routes>
        
        
      </div>
   </Router>
  );
}

export default App;
