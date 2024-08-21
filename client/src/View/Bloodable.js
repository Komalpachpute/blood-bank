import React from "react";
import './Bloodable.css';
// import { Nav } from "../../Component/Navbar/Navbar";
import { Nav } from "../Component/Navbar/Navbar";
// import imm from '../Imges/good.jpg';
import { useState } from "react";
import Footer from "../Component/Footer/Footer";
import good from '../Imges/icon.png';
export default function Bloodable() {
  const [all, setall] = useState();

  return (


    <>



      <Nav />

      <h3 className="use">Blood Avaliable
      </h3>
      <div className="stock">
      <div className='able'>
     <h2 className="camp">A+</h2>
     <p className="pa">10li</p>
     <img src={good} className="immm"/>


      </div>

      <div className='able'>
     <h2 className="camp">B+</h2>
     <p className="pa">5li</p>
     <img src={good} className="immm"/>


      </div>
      <div className='able'>
     <h2 className="camp">O+</h2>
     <p className="pa">6li</p>
     <img src={good} className="immm"/>

      </div>
      <div className='able'>
     <h2 className="camp">O-</h2>
     <p className="pa">4li</p>
     <img src={good} className="immm"/>


      </div>
      </div>

      <div  className=" ham"> 



      <div className='able'>
     <h2 className="camp">A-</h2>
     <p className="pa">9li</p>
     <img src={good} className="immm"/>


      </div>

      <div className='able'>
     <h2 className="camp">AB+</h2>
     <p className="pa">3li</p>
     <img src={good} className="immm"/>


      </div>


      <div className='able'>
     <h2 className="camp">AB-</h2>
     <p className="pa">9li</p>
     <img src={good} className="immm"/>

      </div>
      <div className='able'>
     <h2 className="camp">B-</h2>
     <p className="pa">4li</p>
     <img src={good} className="immm"/>


      </div>


      
</div>

      <br></br>
      {/* <button className="serach">Serach</button><br></br><br></br> */}


<br></br><br></br>

<Footer/>

    </>
  )
}