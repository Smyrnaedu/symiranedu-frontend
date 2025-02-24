import React from 'react';
import MainMenu from './main-menu';
import "./main-menubar.scss"

// 1. React.FC Kullanımı
const MainMenuBar: React.FC = () => {
  return (
    <div>
      <MainMenu />
    </div>
  );
};

export default MainMenuBar;