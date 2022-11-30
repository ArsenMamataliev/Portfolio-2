import React from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './pages/projects/Projects';
import Main from './pages/main/Main';
import GalleryApp from './projects/photo gallery/GalleryApp';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path ='/'element = {<Main />} />
          <Route path ='/projects'  element = {<Projects />} />
          <Route path ='/gallery'  element = {<GalleryApp />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
