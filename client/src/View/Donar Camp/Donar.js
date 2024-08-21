import React from "react";
import './Donar.css';
import Card from "../../Component/Cards/Card";
import { Nav } from "../../Component/Navbar/Navbar";
import Camp from '../../Imges/lives.png';
import save from '../../Imges/national.jpg';
import lives from '../../Imges/camp.jpg';
import Footer from "../../Component/Footer/Footer";
import docter from '../../Imges/day donar.jpeg';

export default function Donar() {

  return (

    <>
      <Nav />
      {/* <img src={ docter} className="savee" /> */}

      {/* <img src={Camp} className="immp" /> */}
       <div className="divvv"><br></br>
        <h3 className="CAMP">Camps !! </h3>
        <div className="got">
          <div className="top">

            <div className="pot">

              <h4 className="city">city:Mumbai</h4>
              <p className="Add">Address: Sant Nirankari</p>
              <p className="date">  date:7/2/2024</p>

            </div>
          </div>

          <div className="top">

            <div className="pot">
              <h4 className="city">city:A.Nager</h4>
              <p className="Add">Address: Kashti</p>
              <p className="date">  date:14/5/2024</p>




            </div>
          </div>


          <div className="top">

            <div className="pot">

              <h4 className="city">city: A.Nager</h4>

              <p className="Add">  Address: Shrigonda </p>
              <p className="date">  date:18/4/2024</p>



            </div>
          </div>


          <div className="top">

            <div className="pot">

              <h4 className="city">city:pune</h4>
              < p className="Add"> Address: shirur</p>
              <p className="date">  date:24/3/2024</p>



            </div>
          </div>




        </div>



      </div> 

      <br></br>
      <br></br>
      <hr></hr>

      <h4 className="may">   14 May 2024 - kashti Blood Donation Camp </h4>
      <hr></hr>
      {/* <img src={lives} className="sav"/> */}
      <h4 className="bar">  12 june  2024 - Shrigonda Blood Donation Camp</h4>
      <hr></hr>

      <h4 className="bar">  19 july 2024 - Sai hospital  Blood Donation Camp</h4>


      <br></br>
      <Footer />
    </>
  )
}