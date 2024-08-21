import express from 'express';
import Request from './Module/Nodes.js';

import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors())

const PORT = 4000;


// port call//
app.listen(PORT, () => {
  console.log("sever is  running", PORT)
})

//  mongodb connect//
const dbconnect = async () => {
  await mongoose.connect('mongodb+srv://komalpachpute98:XdPPGVVooSeFVPy2@cluster0.n93wlti.mongodb.net/request')
  console.log("mongodb is connect")
}
dbconnect()

//use post method//
 app.post('/request', async (req, res) => {
  const { name, mob, aadharno, age, bloodgroup, Address, Gender, pincode, State } = req.body;
  const newnode = await Request.create({

    "name": name,
    "mob": mob,
    "aadharno": aadharno,
    "age": age,
    "bloodgroup": bloodgroup,
    "Address": Address,
    "Gender": Gender,
    "pincode": pincode,
    "State": State

  })
  res.json({
    success: true,
    data: newnode,
    msg: "data is show"
  })

})
//  GET //
app.get('/requests', async (req, res) => {
  try {
    const note = await Request.find();
    res.json({
      success: true,
      data: note,
      msg: "fetch successfully",

    })
  } catch (error) {
    console.log(error)
  }
})


app.delete('/request/:_id',async(req,res) => {
  const{_id} =req.params;
  const noteByid=await note.deleteOne({_id:_id});
  
  res.json({
    success:true,
    data: noteByid,
    msg:`note are deleted successfully by id`
  })
  })
  
















