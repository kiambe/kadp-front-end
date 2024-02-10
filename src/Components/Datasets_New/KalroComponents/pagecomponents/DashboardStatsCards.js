import React from "react";

function DashboardStatsCards({
  count_of_total_farmers,
  count_of_total_crop_farmers,
  count_livestock_farmers,
  count_farmers_ward_query_,
  county_name,
  isCropsPage,
  isLivestock,
  ISsubcountySelected,
  ISwardSelected,
  subcountySelected,
  wardSelected,
  count_farmers_subcounty_query_,
  count_livestock_farmers_subcounty_query_,
  count_crop_farmers_subcounty_query_,
  count_crop_farmers_ward_query_,
  count_livestock_farmers_ward_query_,
}) {
  let mutedSubDivision =
    ISsubcountySelected && !ISwardSelected
      ? "Subcounty"
      : ISwardSelected && ISsubcountySelected
      ? "Ward"
      : "County";

  let subcounty_count_farmers = null;

  let ward_count_farmers = null;

  let subcounty_crops_farmers = null;
  let ward_count_crops_farmers = null;

  let subcounty_livestock_farmers = null;
  let ward_count_livestock_farmers = null;

  // console.log({count_farmers_subcounty_query_})

  if (subcountySelected && count_farmers_subcounty_query_ !== undefined) {
    try {
      subcounty_count_farmers = count_farmers_subcounty_query_.filter((d) => {
        return d.subcounty === subcountySelected;
      })[0].Total_farmers;
    } catch {
      subcounty_count_farmers = "--";
    }

    try {
      subcounty_livestock_farmers =
        count_livestock_farmers_subcounty_query_.filter((d) => {
          return d.subcounty === subcountySelected;
        })[0].Total_farmers;
    } catch {
      subcounty_livestock_farmers = "--";
    }

    // subcounty_livestock_farmers !== undefined ? subcounty_livestock_farmers[0].Total_farmers : "-"

    try {
      subcounty_crops_farmers = count_crop_farmers_subcounty_query_.filter(
        (d) => {
          return d.subcounty === subcountySelected;
        }
      )[0].Total_farmers;
    } catch {
      subcounty_crops_farmers = "--";
    }
    // subcounty_crops_farmers !== undefined ? subcounty_crops_farmers[0].Total_farmers  :"-"
  }

  if (wardSelected && count_farmers_ward_query_ !== undefined) {
    try {
      ward_count_farmers = count_farmers_ward_query_.filter((d) => {
        return d.ward === wardSelected;
      })[0].Total_farmers;
    } catch {
      ward_count_farmers = "--";
    }

    // count_crop_farmers_ward_query_,
    // count_livestock_farmers_ward_query_

    try {
      ward_count_livestock_farmers = count_livestock_farmers_ward_query_.filter(
        (d) => {
          return d.ward === wardSelected;
        }
      )[0].Total_farmers;
    } catch {
      ward_count_livestock_farmers = "--";
    }

    // subcounty_livestock_farmers !== undefined ? subcounty_livestock_farmers[0].Total_farmers : "-"

    try {
      ward_count_crops_farmers = count_crop_farmers_ward_query_.filter((d) => {
        return d.ward === wardSelected;
      })[0].Total_farmers;
    } catch {
      ward_count_crops_farmers = "--";
    }
  }

  // console.log({ subcounty_livestock_farmers });
  // console.log({ wardSelected });

  return (
    <div>
      <div class="flex flex-wrap -mx-3 mt-4">
        {/* <!-- card1 --> */}
        <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div class="flex-auto p-4">
              <div class="flex flex-row -mx-3">
                <div class="flex-none w-2/3 max-w-full px-1">
                  <div>
                    <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase  opacity-60">
                      {/* {county_name} */}
                      {ISsubcountySelected && !ISwardSelected
                        ? subcountySelected
                        : ISwardSelected && ISsubcountySelected
                        ? wardSelected
                        : county_name}
                    </p>
                    <p className="text-xs">{mutedSubDivision} Farmers</p>
                    <h5 class="mb-0 font-bold">
                      {ISsubcountySelected && !ISwardSelected
                        ? `${subcounty_count_farmers.toLocaleString()}`
                        : ISwardSelected && ISsubcountySelected
                        ? ward_count_farmers.toLocaleString()
                        : count_of_total_farmers.toLocaleString()}
                    </h5>
                    {/* <p class="mb-0  dark:opacity-60">
                        <span class="text-sm font-bold leading-normal text-emerald-500">
                          +55%
                        </span>
                        since yesterday
                      </p> */}
                  </div>
                </div>
                <div class="px-0 text-right basis-1/3">
                  <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                    <i class="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- card2 --> */}
        <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div class="flex-auto p-4">
              <div class="flex flex-row -mx-3">
                <div class="flex-none w-2/3 max-w-full px-1">
                  <div>
                    <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase opacity-60">
                      Wards
                    </p>
                    <p className="text-xs">County Farmers</p>

                    <h5 class="mb-0 font-bold ">
                      {count_farmers_ward_query_.length}
                    </h5>

                    {/* <p class="mb-0  dark:opacity-60">
                        <span class="text-sm font-bold leading-normal text-emerald-500">
                          +3%
                        </span>
                        since last week
                      </p> */}
                  </div>
                </div>
                <div class="px-0 text-right basis-1/3">
                  <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                    <i class="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- card3 --> */}
        {isCropsPage && (
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-1">
                    <div>
                      <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase  opacity-60">
                        Crops
                      </p>
                      <p className="text-xs">{mutedSubDivision} Farmers</p>

                      <h5 class="mb-0 font-bold ">
                        {ISsubcountySelected && !ISwardSelected
                          ? `${subcounty_crops_farmers.toLocaleString()}`
                          : ISwardSelected && ISsubcountySelected
                          ? ward_count_crops_farmers.toLocaleString()
                          : count_of_total_crop_farmers.toLocaleString()}
                      </h5>

                      {/* <p class="mb-0  dark:opacity-60">
                        <span class="text-sm font-bold leading-normal text-red-600">
                          -2%
                        </span>
                        since last quarter
                      </p> */}
                    </div>
                  </div>
                  <div class="px-0 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                      <i class="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <!-- card4 --> */}
        {isLivestock && (
          <div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-1">
                    <div>
                      <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase opacity-60">
                        Livestock
                      </p>
                      <p className="text-xs">{mutedSubDivision} Farmers</p>

                      <h5 class="mb-0 font-bold ">
                        {ISsubcountySelected && !ISwardSelected
                          ? `${subcounty_livestock_farmers.toLocaleString()}`
                          : ISwardSelected && ISsubcountySelected
                          ? ward_count_livestock_farmers.toLocaleString()
                          : count_livestock_farmers.toLocaleString()}
                      </h5>

                      {/* <p class="mb-0  dark:opacity-60">
                         <span class="text-sm font-bold leading-normal text-emerald-500">
                           +5%
                         </span>
                         than last month
                       </p> */}
                    </div>
                  </div>
                  <div class="px-0 text-right basis-1/3">
                    <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                      <i class="ni leading-none ni-cart text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardStatsCards;
