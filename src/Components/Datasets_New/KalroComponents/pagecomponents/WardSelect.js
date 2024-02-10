import React from "react";
import DATA from "../data/county_sub_wards.json";
import { filterUniqueValues } from "../../KalroUtils";


function WardSelect({ data, handleSelect,subcountySelected ,wardSelected,showData,showLabels}) {
  const handleCropSelect = (e) => {
    let { value } = e.target;
    if(value === "Select Ward"){
      value= null
    }
    handleSelect(value);
  };

  let DATA2 = [...DATA]
  let filteredData = DATA2.filter((d1)=>{
    return  d1.subcounty === subcountySelected  && d1.ward !== "None"
  })

  filteredData = filterUniqueValues(filteredData,"ward")

  return (
    <div>
      {showLabels &&
      <p>Select Ward in {subcountySelected}</p>

  }  
      {/* {JSON.stringify(DATA)} */}

      <select
        onChange={(e) => handleCropSelect(e)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected value={null}>Select Ward</option>
        {
          showData &&

          <>
           {filteredData.map((data) => {
          return (
            <>
              <option selected={wardSelected === data.ward?true:false} value={data.ward}> {wardSelected === data.ward ? `${data.ward} Ward`:data.ward}</option>
            </>
          );
        })}
          </>
        }
       
      </select>


      {/* <select
        onChange={(e) => handleCropSelect(e)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="-">Select Ward</option>
        {data.map((data) => {
          return (
            <>
              <option value={data.ward}>{data.ward}</option>
            </>
          );
        })}
      </select> */}
    </div>
  );
}

export default WardSelect;
