import React, { useEffect, useState } from "react";
import Cards from "./pagecomponents/Cards";
import { useDispatch, useSelector } from "react-redux";
// import PageLayout from "./pagecomponents/PageLayout";
import WardSelect from "./pagecomponents/WardSelect";
import SubCountySelect from "./pagecomponents/SubCountySelect";
import { getWardData_Merged } from "../../../app-redux/features/appData/appDataSlice";

function Dashboard({user_county,geography}) {
  const dispatch = useDispatch();
  const appData = useSelector((state) => state.appData);
  const [dataSelected, SetDataSelected] = useState(null);
  const { county_stats_merged } = appData;
  const { data: county_stats_merged_data, loadin_county_stats_merged } =
    county_stats_merged;
  const [SCountySelected, SetSCountySelected] = useState(null);
  const [wardSelected, SetWardSelected] = useState(null);
  const handleWardSelect = (value) => {
    SetWardSelected(value);
    triggerQueryData(
      JSON.stringify({
        county: user_county,
        ward: value,
      })
    );
  };

  const handleSCountySelect = (value) => {
    SetSCountySelected(value);
    SetWardSelected(null);
  };


  const triggerQueryData = (dataPassed) => {
    let data = JSON.parse(dataPassed);
    if (dataSelected !== null) {
      if (data.ward !== dataSelected.ward) {
        SetDataSelected(data);
        dispatch(getWardData_Merged({ county: data.county, ward: data.ward }));
      }
    } else {
      SetDataSelected(data);
      dispatch(getWardData_Merged({ county: data.county, ward: data.ward }));
    }
  };

  return (
    <div>

{/* user_county {JSON.stringify(geography)} */}
     {/* {user_county} */}
        {loadin_county_stats_merged && (
          <>
            <div
              className="mt-8 w-full px-6 py-6 mx-auto"
              style={{ marginTop: 10 }}
            >
              <p className="text-black">
                Please wait. Loading county stats and data. This usually happens
                once
              </p>
            </div>
          </>
        )}

        {county_stats_merged_data !== null && (
          <>
            <div className="flex bg-white w-[50%] rounded-lg">
              <div className="p-2 w-[50%]">
                {/* user_county {JSON.stringify(geography)} */}

                <SubCountySelect
                  triggerQueryData={triggerQueryData}
                  showLabels={false}
                  ScSelected={SCountySelected}
                  showData={true}
                  countySelected={user_county}
                  handleSelect={handleSCountySelect}
                  data={[]}
                ></SubCountySelect>
              </div>

              <div className="p-2 w-[50%]">
                <WardSelect
                  triggerQueryData={triggerQueryData}
                  showLabels={false}
                  showData={SCountySelected !== null}
                  wardSelected={wardSelected}
                  countySelected={user_county}
                  handleSelect={handleWardSelect}
                  data={[]}
                  subcountySelected={SCountySelected}
                ></WardSelect>
              </div>
            </div>
            <Cards
              subcountySelected={SCountySelected}
              wardSelected={wardSelected}
              SCountySelected={SCountySelected}
              ISsubcountySelected={SCountySelected !== null ? true : false}
              ISwardSelected={wardSelected !== null ? true : false}
              isCropsPage={true}
              isLivestock={true}
              isDashboard={true}
            />
          </>
        )}
    </div>
  );
}

export default Dashboard;
