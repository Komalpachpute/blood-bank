import React from "react";
import './Contact.css';
import { Nav } from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";


export default function Contact(){
    return(


        <>
           <Nav/>

         <div className="frist"> 
        <div className="contact ">

            

       < div className='row'>
      <div className='contactitem'>
         <div>
            <h3>Contact Us</h3>
              <h5>Address</h5>
              <p> Kashti</p>
              <h5>Phone</h5>
              <p> (123) 456-7890</p>
              <h5>Email</h5>
              <p>blood bank 123@gmail.com</p>
         </div>
         <hr/>
          <h3>Get In Touch With Us!</h3>
          <div className='C_itemD'>
               <label>Name</label>
               <br></br>
                <input type='text' className='label'></input>
                <br></br>
                <label>Email</label><br></br>
                <input type='mail' className='label'></input><br></br>
                <label>Mobile Number</label><br></br>
                <input type='number' className='label'></input><br></br>  
                {/* <label>Query</label><br></br>
                <input type='text' className='int'></input><br></br>  */}
                <button type='submit' className='btnss'>Submit</button>  
          </div>  
       </div>    
    </div >
    </div>

        
   </div>
        
        <br></br>
        <Footer />
        
    </>
    )
}