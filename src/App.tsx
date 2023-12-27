// src/App.tsx (或其他组件文件)

import React from 'react';
import LodashPage from './page/LodashPage';

const App: React.FC = () => {
  // 使用封装的 debounce 方法


  return (
    <div>
      <LodashPage></LodashPage>
    </div>
  );
};

export default App;
