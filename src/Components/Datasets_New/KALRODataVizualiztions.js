import React, { useEffect, useState } from "react";
import { countGenders, getCOlumnsFromArray } from "./KalroUtils";

import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  ArcElement,
  Title,
  Legend,
  Tooltip
);
// ChartJS.register(ArcElement);


function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

function KALRODataVizualiztions({ donwloadedJSON ,usagePolicy}) {
  let genders_data = donwloadedJSON ? countGenders(donwloadedJSON) : null;
  let columns = donwloadedJSON ? getCOlumnsFromArray(donwloadedJSON) : null;
  const [showFiltersAndData,SetShowFiltersAndData]=useState(null)
  //   let data = ;

  useEffect(()=>{
      if (usagePolicy?.[0]) {
        if (usagePolicy[0].approval_status === "requested") {

          SetShowFiltersAndData(false)
        } else if (usagePolicy[0].approval_status === "approved") {
          SetShowFiltersAndData(true)

        } else if (usagePolicy[0].approval_status === "rejected") {
          SetShowFiltersAndData(false)

        }
      } else {
        SetShowFiltersAndData(false)
        
      }
  },[])

  return (
    <>

    {showFiltersAndData &&
    
    <>
    
    <div className="container-fluid mt-5 p-3">
        <div className="row gy-5">
          <div className="col rounded-lg shadow-lg p-3">
            <h4>{donwloadedJSON.length.toLocaleString()}</h4>
            <p>Farmers</p>
          </div>
          <div className="col rounded-lg shadow-lg p-3"></div>
        </div>
      </div>

      {/* chart */}

      <div className="row">
        {/* genders_data {JSON.stringify(genders_data)} */}
        <div className="col-sm-6">
          {genders_data !== null && (
            <Pie
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    label: "Count",
                    data: genders_data.map((d) => {
                      return d.value;
                    }),
                    backgroundColor: [
                      //   'rgba(75, 192, 192, 0.2)',
                      "rgba(255, 99, 132, 0.5)",
                      "rgba(255, 159, 64, 0.6)",
                      "rgba(255, 205, 86, 0.4)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(54, 162, 235, 0.9)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(201, 203, 207, 0.3)",
                    ],
                    borderColor: [
                      "rgb(255, 99, 132)",
                      "rgb(255, 159, 64)",
                      "rgb(255, 205, 86)",
                      "rgb(75, 192, 192)",
                      "rgb(54, 162, 235)",
                      "rgb(153, 102, 255)",
                      "rgb(201, 203, 207)",
                    ],
                  },
                ],
              }}
            />
          )}
        </div>
      </div>

      {/* datagrid */}
      <Box sx={{ height: 1000, width: '100%' }}>
      {columns &&
      <DataGrid
      slots={{
        toolbar: CustomToolbar,
      }}
      columns={columns}
      rows={donwloadedJSON.map((d,index)=>{return {...d,id:index+1}})}
    />
    }
    </Box>
      <>
    
      </>
    </>}
    
    </>
  );
}

export default KALRODataVizualiztions;
