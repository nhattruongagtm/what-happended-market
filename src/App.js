import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Intro from './components/Intro/Intro';
import Products from './components/Products/Products';
import BrandStory from './components/BrandStory/BrandStory';
import HappendedIssue from './components/HappendedIssue/HappendedIssue';
import WhatHappended from './components/WhatHappended/WhatHappended';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
        <Header/>
        <Banner/>
        <Intro/>
        <Products/>
        <BrandStory/>
        <HappendedIssue/>
        <WhatHappended/>
        <Footer/>
    </div>
  );
}

export default App;
