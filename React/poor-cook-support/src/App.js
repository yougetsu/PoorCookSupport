import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Reactアプリにおけるルートコンポーネントとして定義される

import RefrigeratorList from './views/pages/RefrigeratorList/RefrigeratorList';

function App() {
  return (
    <BrowserRouter>
        <Routes> //v6
          {/* <Route path="/" element={<Home />} /> //v6 */}
          <Route path="/RefrigeratorList" element={<RefrigeratorList />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
