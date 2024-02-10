import React from "react";
import dataToMap from "../data/livestock_category.json";
function LivestockSelect({ handleSelect }) {
  const handleCropSelect = (e) => {
    let { value } = e.target;
    handleSelect(value);
    // alert(value)
  };
  return (
    <div>
      <p>Select Livestock Category</p>

      <select
        onChange={(e) => handleCropSelect(e)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="-">Select livestock</option>
        {dataToMap.map((data) => {
          return (
            <>
              <option value={data.name}>{data.name}</option>
            </>
          );
        })}
      </select>
    </div>
  );
}

export default LivestockSelect;
