// import { useState } from 'react'
// // import { Navbar } from '../../../Component/Navbar/Navbar'
// // import { Mininav } from '../../Admin/Mininav'
// import axios from 'axios';




// export  default function Admin(){
//   const [ibookname , setIbookname] = useState();
//   const [ibookday, setIbookday] = useState();
//   const [ibookdate, setIbookdate] = useState();
//   const [ibookreturn, setIbookreturn] = useState();

//   const saveissue = async()=>{
//     const saveissuedata = await axios.post("http://localhost:4000/ibook" , {
//       ibookname : ibookname,
//       ibookday : ibookday,
//       ibookdate : ibookdate,
//       ibookreturn : ibookreturn
//     })
//     alert(saveissuedata.data.msg)
//   }

//     return(
//       <>
//      {/* <Navbar/> */}
      
//         <div className='mai'>
//               <form className='bookadd'>
//                 <h1 className="center"> Donar Admin</h1>
//                   {/* <label className='booklabel'>ISSUE NAME </label>:
//                   <input type='text' placeholder='Issue Name'  className='bookinp'/><br/> */}
//                   <img />
//                   <label className='booklabel'>Donar list</label>:
//                   <input type='text' placeholder='Donarte blood'  className='bookinp'
//                   onChange={(e)=>{
//                   setIbookname(e.target.value)}
//                   }/><br/>

//                   {/* <label className='booklabel'>ISSUE TYPE</label>:
//                   <input type='text' placeholder='Issue Type'  className='bookinp'/><br/> */}
//                   <label className='booklabel'>ISSUE DAY</label>:
//                   <select className='select'
//                   onChange={(e)=>{
//                   setIbookday(e.target.value)}
//                   }>
//                     <option value="Days" aria-disabled>  Days</option>
//                     <option value="Monday">Monday</option>
//                     <option value="Tuesday">Tuesday</option>
//                     <option value="Wednesday">Wednesday</option>
//                     <option value="Thursday">Thursday</option>
//                     <option value="Friday">Friday</option>
//                     <option value="Saturday">Saturday</option>
//                     <option value="Sunday">Sunday</option>
//                   </select><br/>
//                   <label className='booklabel'>ISSUE DATE</label>:
//                   <input type='date' placeholder='Issue Date' className='bookinp' 
//                   onChange={(e)=>{
//                     setIbookdate(e.target.value)   }
//                   }/><br/>
//                   <label className='booklabel'>RETURN DATE</label>:
//                   <input type='date' placeholder='Book Return Date'  className='bookinp'
//                   onChange={(e)=>{
//                     setIbookreturn(e.target.value)}
//                   }/><br/>
//                   {/* <label className='booklabel'>FINE</label>:
//                   <input type='text' placeholder='10₹ Fine Per Day'  className='bookinp'/><br/> */}
//                   <button className='bookSbtn' 
//                   onClick={saveissue} >SUBMIT</button>  
//               </form>
//             </div>
//       </>
//     )
//   }