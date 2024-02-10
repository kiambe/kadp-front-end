import React from "react";
import DATA from "../data/county_sub_wards.json";
import { filterUniqueValues } from "../../KalroUtils";

function SubCountySelect({ data, handleSelect,countySelected,showData =false,showLabels,ScSelected}) {
  const handleCropSelect = (e) => {
    let { value } = e.target;

    if(value === "Select Subcounty"){
      value= null
    }
    handleSelect(value);


    
    // filterUniqueValues
  };
  let DATA2 = [...DATA]

  let filteredSubCounty = DATA2.filter((d1)=>{
    return d1.county === countySelected
  })

  filteredSubCounty = filterUniqueValues(filteredSubCounty,"subcounty")
  return (
    <div>
  {showLabels &&
   <p>Select Subcounty in {countySelected}</p>
  }   
     {/* ScSelected {JSON.stringify(countySelected)} */}
      <select
        onChange={(e) => handleCropSelect(e)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value={null}>Select Subcounty</option>
        {
          showData && 
          <>
           {filteredSubCounty.map((data) => {
          return (
            <>
              <option value={data.subcounty}>
              {ScSelected === data.subcounty ? `${data.subcounty} Sub-county`:data.subcounty}
                {/* {data.subcounty} */}
                </option>
            </>
          );
        })}
          </>
        }
       
      </select>
    </div>
  );
}

export default SubCountySelect;
