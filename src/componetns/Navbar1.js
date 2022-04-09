import React from "react";

const Navbar1 = () => {
  return (
    <>
      <div className="navbar1">
        <div className="navbar1Left">
          <p className="weddinglogo">
            Wedding<span>z</span>.in
          </p>
          <select name="Mumbai" id="city">
            <option value="0" selected>
              Mumbai
            </option>
            <option value="1">Delhi NCR</option>
            <option value="2">Bangalore</option>
            <option value="3">Pune</option>
            <option value="4">Hyderabad</option>
            <option value="5">Baroda</option>
            <option value="6">Chandigarh</option>
            <option value="7">Ludhiana</option>
            <option value="8">Surat</option>
            <option value="9">Udairpur</option>
            <option value="10">Jodhpur</option>
            <option value="11">Nagpur</option>
            <option value="12">Singrauli</option>
            <option value="13">Bhopal</option>
            <option value="14">Rewa</option>
            <option value="15">Goa</option>
          </select>
        </div>
        <ul className="navbar1Right">
          <li>View Magazine</li>
          <li className="download">
            <img src="./images/phone.png" alt="png" className="phone" />
            <span>Download App</span>
          </li>
          <li>List Your Buisness</li>
          <img src="./images/user.png" alt="img" className="userPng" />
        </ul>
      </div>
    </>
  );
};

export default Navbar1;
