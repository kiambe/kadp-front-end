import React from "react";
import cropsData from "../data/crops.json";
function CropSelect({ handleSelect }) {

    const handleCropSelect=(e)=>{
        let {value} = e.target
        handleSelect(value)
// alert(value)

    }
  return (
    <div>
       <p>Select Crop</p>
      {/* {JSON.stringify(cropsData)} */}
      <select onChange={(e)=>handleCropSelect(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option value={null}>Select crop</option>
        {cropsData.map((data) => {
          return (
            <>
              <option value={data.crop_name}>{data.crop_name}</option>
            </>
          );
        })}
      </select>
    </div>
  );
}

export default CropSelect;
