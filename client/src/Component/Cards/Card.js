import React, { useEffect } from "react";
import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import bank from '../../Imges/white.png'

// import blood from '../../Component/Cards/bloodimg.jpg';

export default function Card({title  ,img}  ) {
    useEffect(() => {
        AOS.init();
      }, [])
    return (

        <>
         <div className="name">

                <div  className=" main" data-aos="zoom-in-down">
                <img src={img}  className="img"/>

                    <h3 className="head">{title}</h3>
                    {/* <p className="para">{des}</p> */}


                </div>
            </div>



        </>
    )
}



