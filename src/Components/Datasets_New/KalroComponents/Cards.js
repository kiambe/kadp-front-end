import React, { useState } from "react";
import DashboardDataCards from "./DashboardDataCards";
import DashboardStatsCards from "./DashboardStatsCards";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { structureGraphData } from "../KalroUtils";

function Cards({
  isCropsPage = false,
  isLivestock = false,
  isDashboard = false,
  ISwardSelected,
  ISsubcountySelected,
  wardSelected,
  subcountySelected,
}) {
  const dispatch = useDispatch();
  const appData = useSelector((state) => state.appData);
  let { loginUserState, county_wards } = appData;
  let user_county =
    loginUserState.data !== null ? loginUserState.data.county_string : null;
  let token = loginUserState.data !== null ? loginUserState.data.token : null;
  const [dataSelected, SetDataSelected] = useState(null);

  const { county_stats_merged, ward_data_merged } = appData;
  const { data: county_stats_merged_data, loadin_county_stats_merged } =
    county_stats_merged;
  const { data: ward_data_merged_data } = ward_data_merged;

  let county_name =
    loginUserState.data !== null ? loginUserState.data.county_string : "-";
  let loadingData = ward_data_merged.loading;
  let count_farmers_ward_query_ = county_stats_merged_data
    ? county_stats_merged_data.count_farmers_ward_query_
    : "";
  let count_farmers_subcounty_query_ = county_stats_merged_data
    ? county_stats_merged_data.count_farmers_subcounty_query_
    : "";

  let count_livestock_farmers = county_stats_merged_data
    ? county_stats_merged_data.count_livestock_farmers
    : "";

  let count_livestock_farmers_subcounty_query_ = county_stats_merged_data
    ? county_stats_merged_data.count_livestock_farmers_subcounty_query_
    : "";

  let count_crop_farmers_subcounty_query_ = county_stats_merged_data
    ? county_stats_merged_data.count_crop_farmers_subcounty_query_
    : "";

  let count_crop_farmers_ward_query_ = county_stats_merged_data
    ? county_stats_merged_data.count_crop_farmers_ward_query_
    : "";

  let count_livestock_farmers_ward_query_ = county_stats_merged_data
    ? county_stats_merged_data.count_livestock_farmers_ward_query_
    : "";

  // count_livestock_farmers_subcounty_query_

  let count_of_total_crop_farmers = county_stats_merged_data
    ? county_stats_merged_data.count_of_total_crop_farmers
    : "";
  let count_of_total_farmers = county_stats_merged_data
    ? county_stats_merged_data.count_of_total_farmers
    : "";

  return (
    <div>
      <div>
        {/* Card stats */}
        {county_stats_merged_data !== null && (
          <DashboardStatsCards
            count_livestock_farmers_ward_query_={
              count_livestock_farmers_ward_query_
            }
            count_crop_farmers_ward_query_={count_crop_farmers_ward_query_}
            count_crop_farmers_subcounty_query_={
              count_crop_farmers_subcounty_query_
            }
            count_livestock_farmers_subcounty_query_={
              count_livestock_farmers_subcounty_query_
            }
            count_farmers_subcounty_query_={count_farmers_subcounty_query_}
            count_of_total_farmers={count_of_total_farmers}
            count_of_total_crop_farmers={count_of_total_crop_farmers}
            count_livestock_farmers={count_livestock_farmers}
            count_farmers_ward_query_={count_farmers_ward_query_}
            // triggerQueryData={triggerQueryData}
            ward_data_merged_data={ward_data_merged_data}
            loadingData={loadingData}
            dataSelected={dataSelected}
            county_name={county_name}
            isCropsPage={isCropsPage}
            isLivestock={isLivestock}
            ISsubcountySelected={ISsubcountySelected}
            ISwardSelected={ISwardSelected}
            wardSelected={wardSelected}
            subcountySelected={subcountySelected}
          ></DashboardStatsCards>
        )}

        {/* Dashboard data cards */}

        {ISwardSelected && ISsubcountySelected ? (
          <>
            {isDashboard && (
              <DashboardDataCards
                count_of_total_farmers={count_of_total_farmers}
                count_of_total_crop_farmers={count_of_total_crop_farmers}
                count_livestock_farmers={count_livestock_farmers}
                count_farmers_ward_query_={count_farmers_ward_query_}
                // triggerQueryData={triggerQueryData}
                ward_data_merged_data={ward_data_merged_data}
                loadingData={loadingData}
                dataSelected={dataSelected}
                county_name={county_name}
                isCropsPage={isCropsPage}
                isLivestock={isLivestock}
                isDashboard={isDashboard}
              ></DashboardDataCards>
            )}
          </>
        ) : (
          <>
            {isDashboard && (
              <>
                <div className="flex mt-4">
                  <div className="rounded-lg bg-white p-4 mb-1 mr-1 ml-2 w-[80%] h-auto shadow-sm">
                    {!ISwardSelected && !ISsubcountySelected && (
                      <>
                        <Bar
                          style={{ height: "100vh", width: "80%" }}
                          className="w-[100%] h-[500px]"
                          data={{
                            labels: count_farmers_subcounty_query_.map(
                              (d) => d.subcounty
                            ),
                            datasets: [
                              {
                                id: 1,
                                label: "Subcounty farmer ",
                                data: count_farmers_subcounty_query_.map(
                                  (d) => d.Total_farmers
                                ),
                              },
                              {
                                id: 2,
                                label: "Subcounty crop farmers",
                                data: structureGraphData(
                                  count_farmers_subcounty_query_.map(
                                    (d) => d.subcounty
                                  ),
                                  count_crop_farmers_subcounty_query_,
                                  "subcounty",
                                  "Total_farmers"
                                ),
                                data1: count_crop_farmers_subcounty_query_.map(
                                  (d) => d.Total_farmers
                                ),
                              },
                              {
                                id: 3,
                                label: "Subcounty livestock farmers",
                                data: structureGraphData(
                                  count_farmers_subcounty_query_.map(
                                    (d) => d.subcounty
                                  ),
                                  count_livestock_farmers_subcounty_query_,
                                  "subcounty",
                                  "Total_farmers"
                                ),
                              },

                              // {
                              //   id: 1,
                              //   label: "Livestock farmers subcounty",
                              //   data: count_livestock_farmers_subcounty_query_.map(
                              //     (d) => d.Total_farmers
                              //   ),
                              // },
                            ],
                          }}
                        ></Bar>
                      </>
                    )}

                    {ISsubcountySelected && !ISwardSelected ? (
                      <>
                        <Bar
                          data={{
                            labels: count_farmers_ward_query_
                              .filter(
                                (d1) =>
                                  d1.subcounty === subcountySelected &&
                                  d1.ward !== "None"
                              )
                              .map((d) => d.ward),
                            datasets: [
                              {
                                id: 1,
                                label: "Ward farmers",
                                data: count_farmers_ward_query_
                                  .filter(
                                    (d1) => d1.subcounty === subcountySelected
                                  )
                                  .map((d) => d.Total_farmers),
                              },

                              {
                                id: 2,
                                label: "Crop ward farmers",
                                data: structureGraphData(
                                  count_farmers_ward_query_
                                    .filter(
                                      (d1) =>
                                        d1.subcounty === subcountySelected &&
                                        d1.ward !== "None"
                                    )
                                    .map((d) => d.ward),
                                  count_crop_farmers_ward_query_.filter(
                                    (d1) =>
                                      d1.subcounty === subcountySelected &&
                                      d1.ward !== "None"
                                  ),
                                  "ward",
                                  "Total_farmers"
                                ),
                              },

                              {
                                id: 3,
                                label: "Livestock ward farmers",
                                data: structureGraphData(
                                  count_farmers_ward_query_
                                    .filter(
                                      (d1) => d1.subcounty === subcountySelected
                                    )
                                    .map((d) => d.ward),
                                  count_livestock_farmers_ward_query_.filter(
                                    (d1) => d1.subcounty === subcountySelected
                                  ),
                                  "ward",
                                  "Total_farmers"
                                ),
                              },
                            ],
                          }}
                        ></Bar>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>{/* ajajajaj  apie chat */}</div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      {/* <!-- end cards --> */}
    </div>
  );
}

export default Cards;
