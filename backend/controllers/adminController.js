import validator from 'validator'





// API for adding doctor
const addDoctor = async (req,res) => {


  try{

    const {name,email,password,speciality,degree,experience,about,fees,address} = req.body
    const imageFile = req.file

    if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile){
      return res.json({success:false,message:"Missing details"})
    }

    if(validator.isEmail(email)){
      return res.json({success:false,message:"Invalid email"})
    }

    

  }catch(error){

  }
}

export {addDoctor}