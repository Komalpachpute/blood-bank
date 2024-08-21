import { Schema, model } from 'mongoose'



const reqestschema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    mob: {
      type: String,
      require: true
    },

    aadharno: {
      type: String,
      require: true
    },
    age: {
      type: String,
      require: true
    },
    bloodgroup: {
      type: String,
      require: true
    },
    Address: {
      type: String,
      require: true
    },
    gender: {
      type: String,
      require: true
    },
    pincode: {
      type: String,
      require: true
    },
    state: {
      type: String,
      require: true
    }

  }



)

const Request = model("Request", reqestschema)
export default Request;

