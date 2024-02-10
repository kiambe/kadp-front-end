import React, { useState } from "react";
import AppNav from "../../../orgamisms/AppNav/AppNav";
import SideNav from "../../../orgamisms/SideNav/SideNav";
// import { Button, Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

function PageLayout({ children, county_name }) {
  const appData = useSelector((state) => state.appData);
  let { loginUserState, county_wards } = appData;
  let user_county =
    loginUserState.data !== null ? loginUserState.data.county_string : null;
  let token = loginUserState.data !== null ? loginUserState.data.token : null;
  const [dataSelected, SetDataSelected] = useState(null);

  const { county_stats_merged, ward_data_merged } = appData;
  const {
    data: county_stats_merged_data,
    loading,
    error,
  } = county_stats_merged;
  const { data: ward_data_merged_data } = ward_data_merged;

  const [openModal, setOpenModal] = useState(true);
  return (
    <div className="m-0 font-sans text-base antialiased font-normal  leading-default text-slate-500">
      {loading && (
        <>
          {/* <Modal className="bg-green-500" show={openModal} onClose={() => {}}>
            <Modal.Header>Initializing data...</Modal.Header>
            <Modal.Body>
              {error ? (
                <>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    It seems something went wrong, Kindly click the button below
                    to reload
                  </p>
                </>
              ) : (
                <>
                  <div className="space-y-4 p-4">
                    {loading && (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                    <p className="text-base leading-relaxed text-gray-800">
                      Welcome to the KIAMIS data sharing platform for{" "}
                      {user_county} county.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500  text-sm">
                      This message shows up once. Kindly sit back as we try to
                      set up things for you. This includes getting statistics
                      for your county.
                    </p>
                  </div>
                </>
              )}
            </Modal.Body>

            {error && (
              <Modal.Footer>
                <button onClick={() => {}}>Reload</button>
              </Modal.Footer>
            )}
          </Modal> */}
        </>
      )}


      {county_stats_merged_data && (
        <>{!loading && <AppNav county_name={county_name}></AppNav>}</>
      )}

      <div></div>


      {county_stats_merged_data && (
        <div
          class="fixed inset-y-0 flex-wrap items-center h-[100%] 
      justify-between block w-full p-0 overflow-y-auto antialiased 
      transition-transform duration-200 -translate-x-full  
      border-0 shadow-xl 0 max-w-64 
      ease-nav-brand z-990 xl:ml-0  xl:left-0 xl:translate-x-0
      
      "
        >
          {!loading && <SideNav county_name={county_name}></SideNav>}
        </div>
      )}

    

      {county_stats_merged_data && (
        <div class="w-full px-6 py-6 mx-auto">
          <main class="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl mt-5">
            {children}

            <footer class="pt-2">
              <div class="w-full  mx-auto">
                <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div class="text-sm leading-normal text-center text-slate-500 lg:text-left">
                      <a
                        href="https://kalro.org/kiamis"
                        class="font-semibold text-slate-700 "
                        target="_blank"
                      >
                        {""} For more visualizations, view the dashboard here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      )}
    </div>
  );
}

export default PageLayout;
