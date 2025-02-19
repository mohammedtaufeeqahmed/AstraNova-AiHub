import React from 'react';
import '../../styles/MainLayout.css';
import ModelsGrid from '../../components/sections/home_01/ModelsGrid';

const MainLayout = () => {
  return (
    <main className='main-wrapper relative overflow-hidden'>
    <div className="main-container">
      {/* Left-Side Section */}
      <div className="left-section">
        <div className="filters">
          <h2 className='h3-title'>Tasks</h2>
          <input type="text" placeholder="Filter Tasks by name" className="search-bar-left" />
          <div className="categories">
            <h3 className='h3-title'>Multimodal</h3>
            <button className="tag">Image-Text-to-Text</button>
            <button className="tag">Visual Question Answering</button>
            {/* Add more categories */}
            <h3 className='h3-title'>Computer Vision</h3>
            <button className="tag">Depth Estimation</button>
            <button className="tag">Image Classification</button>
            {/* Add more categories */}
          </div>
        </div>
      </div>

      {/* Right-Side Section */}
      <div className="right-section">
        <div className="search-bar">
          <input type="text" placeholder="Search models..." />
        </div>
        <ModelsGrid /> {/* Include the ModelsGrid component here */}
      </div>
    </div>
    </main>
  );
};

export default MainLayout;
