import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Reactアプリにおけるルートコンポーネントとして定義される

import RefrigeratorList from './views/pages/RefrigeratorList/RefrigeratorList';
import ReceipeSearch from './views/pages/ReceipeSearch/ReceipeSearch';
import FoodStuffCalculate from './views/pages/FoodStuffCalculate/FoodStuffCalculate';

function App() {
  return (
    <BrowserRouter>
        <Routes> //v6
          {/* <Route path="/" element={<Home />} /> //v6 */}
          <Route path="/RefrigeratorList" element={<RefrigeratorList />} />        {/* 冷蔵庫の中身管理 */}
          <Route path="/ReceipeSearch" element={<ReceipeSearch />} />              {/* レシピ検索 */}
          <Route path="/FoodStuffCalculate" element={<FoodStuffCalculate />} />    {/* 食材算出 */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
