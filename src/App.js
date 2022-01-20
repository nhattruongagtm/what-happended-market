import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Intro from './components/Intro/Intro';
import Products from './components/Products/Products';
import BrandStory from './components/BrandStory/BrandStory';
import HappenedIssue from './components/HappenedIssue/HappenedIssue';
import WhatHappened from './components/WhatHappened/WhatHappened';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="containerf">
        <Header/>
        <Banner/>
        <Intro/>
        <Products/>
        <BrandStory/>
        <HappenedIssue/>   
        <WhatHappened/>
        <Footer/>
    </div>
  );
}

export default App;
