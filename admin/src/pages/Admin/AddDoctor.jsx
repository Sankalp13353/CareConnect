import React from "react";
import { assets } from "../../assets/assets";

const AddDoctor = () => {
  return (
    <form className="m-5 w-full">
      <p className="mb-3 text-lg font-medium ">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img className="w-16 bg-gray-100 rounded-full cursor-pointer " src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div>
            <div>
              <p>Doctor Name</p>
              <input type="text" placeholder="Name" required />
            </div>

            <div>
              <p>Doctor Email</p>
              <input type="email" placeholder="Email " required />
            </div>

            <div>
              <p>Doctor Password</p>
              <input type="password" placeholder="Password" required />
            </div>

            <div>
              <p>Experience</p>
              <select name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Year</option>
                <option value="3 Years">3 Year</option>
                <option value="4 Years">4 Year</option>
                <option value="5 Years">5 Year</option>
                <option value="6 Years">6 Year</option>
                <option value="7 Years">7 Year</option>
                <option value="8 Years">8 Year</option>
                <option value="9 Years">9 Year</option>
                <option value="10 Years">10 Year </option>
              </select>
            </div>

            <div>
              <p>Fees</p>
              <input type="number" placeholder="Fees" required />
            </div>
          </div>

          <div>
            <div>
              <p>Speciality</p>
              <select name="" id="">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div>
              <p>Education</p>
              <input type="text  " placeholder="Education" required />
            </div>

            <div>
              <p>Address</p>
              <input type="text" placeholder="address 1" required />
              <input type="text" placeholder="address 2" required />
            </div> 
          </div>
        </div>

        <div>
          <p>About Doctor</p>
          <textarea placeholder="Write about doctor" rows={5} required />
        </div>

        <button>Add Doctor</button>
      </div>
    </form>
  );
};

export default AddDoctor;
