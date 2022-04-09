import React from "react";

const Homecontent = () => {
  return (
    <>
      <div className="homeContent">
        <div className="homeContentInner">
          <p className="header1">Plan Your Wedding With</p>
          <p className="header2">India’s Largest Wedding Co.</p>
          <select name="citySelect" id="bigCitySelect">
            <option value="0" selected>
              Select City
            </option>
            <option value="1">Delhi NCR</option>
            <option value="2">BangaLore</option>
            <option value="3">Pune</option>
            <option value="4">Jaipur</option>
            <option value="5">Hyderabad</option>
            <option value="6">Kolkata</option>
            <option value="7">Ahmedabad</option>
            <option value="8">Baroda</option>
            <option value="9">Chandigarh</option>
            <option value="10">Ludhiyana</option>
            <option value="11">Surat</option>
            <option value="12">Udaipur</option>
            <option value="13">Jodhpur</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Homecontent;
