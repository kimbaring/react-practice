import {Routes,Route,Navigate} from 'react-router-dom';
import SideBar from './components/SideBar';

import Dashboard from './views/Dashboard';
import Reports from './views/Reports';

function App() {
  return (
    <div className="view">
      <SideBar isOpened="false" /> 
      <div className="page">
      <Routes>
        <Route exact path="/" element={<Navigate to="/dashboard" />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
      </Routes>
      </div>
    </div>
    
  );
}

export default App;
