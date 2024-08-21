import React, { useEffect } from "react";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css'
import ControlledCarousel from "../../Component/Carousel/Carousel";
import Card from "../../Component/Cards/Card";
import { Nav } from "../../Component/Navbar/Navbar";
// import img from '../../Imges/blood.jpg';
import Blood from '../../Imges/blood img.jpg';
// import system from '../../Imges/system.jpg';
import system from '../../Imges/save lives.png';
import Footer from "../../Component/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import bank from '../../Imges/white.png';
import city from '../../Imges/city.png';
import contact from '../../Imges/contact.png';
import time from '../../Imges/clock img.png';
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <>
      <Nav />
      <ControlledCarousel />
      {/* <div>
                <img src={Blood} className="imm" />
             </div>
             */}
      <br></br>
      <div className="blood">
       <Card  img={ bank} title='Blood Avalibility Search' className="h2" />
        <Card   img ={ city}title='Blood Bank  Directory ' />
        <Card  img={time} title='Blood Donation Camps' />
        <Card  img ={contact}title='Blood login ' />
        <Card  img={contact}  title='Register Voluntary ' />
      </div> <br></br>
      <div>

        <h2 className="h">LEARN ABOUT DONATION
        </h2>




      </div>

      <div className="system">
        <div className="koma"
        data-aos="zoom-out-right">
          <div className="o" data-aos="zoom-out-right"
          >   
          <img src={system} className="rol" />

          </div>


          <div className="form">

          </div>

          <form>
            <h4 className="h4"> Compatible Blood Type Donors
            </h4>
            <span className="span">Blood Type</span> <span className="span"> Donate Blood To</span> <span className="span"> Receive  Blood from</span><br></br>
            <hr></hr>   
            <span className="b"> A+ </span>        <span className="a"> A+AB+ </span>               <span className="c"> A+ A-O+O- </span> <br></br>
            <hr></hr>
            <span className="b"> O+ </span >        <span className="a"> O+A+B+AB+ </span>       <span className="c">O+O-</span> <br></br>
            <hr></hr>
            <span className="b"> B+ </span>         <span className="a"> A+AB+ </span>           <span className="c"> B+B-O+O- </span> <br></br>
            <hr></hr>
            <span className="b"> AB+ </span>        <span className="a"> AB+ </span>            <span className="c"> Everyone </span> <br></br>
            <hr></hr>
            <span className="b"> A- </span>        <span className="a"> A+A-AB+AB- </span>       <span className="c" > A-O</span> <br></br>
            <hr></hr>
            <span className="b"> O- </span>        <span className="a"> Everyone </span>        <span className="c"> O- </span> <br></br>
            <hr></hr>
            <span className="b"> AB- </span>        <span className="a"> B+B-AB+AB- </span>        <span className="c"> B-O- </span> <br></br>
            <hr></hr> <br></br> <br></br>

          </form>
        </div>
      </div>

      <h2 className="h">TYPES OF DONATION
      </h2>
      <p className="par">The average human body contains about five liters of blood, which is made of several cellular and non-cellular components such as Red blood cell, Platelet, and Plasma.

        Each type of component has its unique properties and can be used for different indications. The donated blood is separated into these components by the blood centre and one donated unit can save upto four lives depending on the number of components separated from your blood.

      </p>

      <hr></hr><br></br>

      <div className="each">
        <div className="comp"  data-aos="zoom-out">
        
          <h4 className="for">What is it?
          </h4>
          <p className="check">Blood Collected straight from the donor into a blood bag and mixed with an anticoagulant is called as whole blood. This collected whole blood is then centrifuged and red cell, platelets and plasma are separated. The separated Red cells are mixed with a preservative to be called as packed red blood cells.

</p>
    </div>
          <div className="comp" data-aos="zoom-out">
          <h4 className="for">User For?
          </h4>
          <p className="check"> Correction of severe anemia in a number of conditions and blood loss in case of child birth, surgery or trauma settings.

</p>
        </div>
        <div className="comp" data-aos="zoom-out">
          <h4  className="for">How long does it take to donate?
          </h4>
          <p className="check">15-30 minutes to donate.including the pre-donation check-up.

</p>
        </div><br></br>
        </div>
        <br></br>
      
      <Footer/>

    </>
  );
}