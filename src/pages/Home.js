import React, { useRef, useState } from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
    const [cancel,setCancel]= useState(true);
    const [scroll,setScroll] = useState(false);
    const categories = useRef();


    const handleCancel=()=>{
        setCancel(false);
    }

    const handleClickScroll = ()=>{
      if(!scroll){
        categories.current.scrollIntoView({behaviour:"smooth", block: "start", inline: "nearest"});
        setScroll(true);
      }
    }

  return (
    <div>
        {cancel && <Announcement handleCancel={handleCancel}/>}
        <Navbar/>
        <Slider click={handleClickScroll}/>
        <div ref={categories}>
          <Categories />
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home;