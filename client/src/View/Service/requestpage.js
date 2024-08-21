import { Nav } from '../../Component/Navbar/Navbar';
import './Request.css';
import axios from 'axios';
import { useState } from "react";
import Footer from "../../Component/Footer/Footer";


export default function Requestpage() {
  // const [all, setall] = useState();
  const [name ,setname] =useState();
 const [mob, setmob] =useState();
 const [adhnar, setadhnar] =useState();

 const [age, setage] =useState();

 const [Address, setAddress] =useState();
 const [pincode, setpincode] =useState();
 const [gender, setgender] =useState();

 const [state, setstate] =useState();
 const [bloodgroup, setbloodgruop] =useState();



 const saverequest =async()=>{
  const response = await axios.post('http://localhost:4000/request', {
    name:name,
    mob:mob,
    adhnar:adhnar,
    age:age,
    bloodgroup:bloodgroup,
    Address:Address,
    gender:gender,
    pincode:pincode,
    state:state,


  })
  alert(response.data.msg);
}


  return (
    <>
      <Nav />

      <div className='color' >
        <h2 className="hii">Request List</h2>

        <div className="request">

          <form>
            <input type=" text" placeholder=" Full Name Donar" onChange={(e) =>{
              setname(e.target.value) }} className="type" />

            <input type=" text" placeholder=" Moblie" className="type"  onChange={(e) =>{
              setmob(e.target.value) }}/>

            <input type=" text" placeholder="  adhnar card number" className="type"  onChange={(e) =>{
              setadhnar(e.target.value) }}/>

            <input type=" text" placeholder=" age" className="type"  onChange={(e) =>{
              setage(e.target.value) }}/>

            <select className='select'
              onChange={(e) => {
                setbloodgruop(e.target.value)
              }
              }>
              <option value="Blood Group" aria-disabled> Blood Group </option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>


            </select>
            <input type=" text" placeholder="  Address" className="type"  onChange={(e) =>{
              setAddress(e.target.value) }} />

            <br />


            <select className='select'
              onChange={(e) => {
                setgender(e.target.value)
              }
              }>
              <option value="Gender" aria-disabled>Gender </option>
              <option value=" female">Female</option>
              <option value="male">male</option>
              <option value="other"> other</option>


            </select>



            <input type=" text" placeholder="  pincode" className="type"  onChange={(e) =>{
              setpincode(e.target.value) }}/>
            {/* <select className='select'

              onChange={(e) => {
                setstate(e.target.value)
              }
              }>
              <option value="state" aria-disabled>State </option>
              <option value="maharashtra "> Maharashtra</option>


            </select> */}
            <input type=" text" placeholder="  State" className="type"  onChange={(e) =>{
              setstate(e.target.value) }}/>



          </form>
        </div>
      </div>

      <button className='submit' onClick={saverequest}> Submit</button>
      <br></br><br></br>
      <Footer />
    </>
  )
}
