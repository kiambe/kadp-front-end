import { Info } from "akar-icons";
// import { Alert, Progress } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";
import EndDownloadModal from "./EndDownloadModal";

function DashboardDataCards({
  ward_data_merged_data,
  loadingData,
}) {

  const [progress, setProgress] = useState(0);
  const [isDownloading, SetIsDownloading] = useState(false);

  const [isSuceess, SetIsSuccess] = useState(false);
  const [showModal, SetShowModal] = useState(false);
  const [downloadMsg, SetDownloadMsg] = useState(false);

  const downloadFile = async (fileUrl, file_name) => {
    SetIsDownloading(true);
    SetIsSuccess(false);

    try {
      const response = await axios.get(fileUrl, {
        responseType: "blob",
        onDownloadProgress: (progressEvent) => {
          // Calculate the download percentage
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      });

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = file_name;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      SetIsDownloading(false);
      SetIsSuccess(true);
      SetShowModal(true);
      setProgress(0);

      SetDownloadMsg(
        `File has been downloaded. Check your download folder for file named ${file_name}`
      );
      // alert()
    } catch (error) {
      SetIsDownloading(false);
      SetShowModal(true);
      SetIsSuccess(false);
      setProgress(0);

      SetDownloadMsg(`Error downloading file:', ${error}`);
    }
  };

  return (
    <div>
      <EndDownloadModal
        openModal={showModal}
        msg={downloadMsg}
        setOpenModal={SetShowModal}
        isSuccess={isSuceess}
      />
      <div class="flex flex-wrap mt-6 -mx-3">
        {/* <div class="w-full max-w-full px-3 mt-0 lg:w-4/12 lg:flex-none">
          <div class="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div class="p-4 pb-0 rounded-t-4">
              <h6 class="mb-0 ">Ward farmers</h6>
            </div>
            <div class="flex-auto p-4 h-[500px] overflow-y-auto">
              <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                {count_farmers_ward_query_.map((data) => {
                  return (
                    <>
                      <li class="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit ">
                        <div class="flex items-center">
                          <div class="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-green-700  rounded-xl">
                            <i class="text-white ni ni-mobile-button relative top-0.75 text-xxs"></i>
                          </div>
                          <div class="flex flex-col">
                            <h6 class="mb-1 text-sm leading-normal text-slate-700 ">
                              {data.ward}
                            </h6>
                            <span class="text-xs leading-tight /80">
                              Total Farmers:{" "}
                              {data.Total_farmers.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div class="flex">
                          <button
                            disabled={
                              dataSelected !== null
                                ? dataSelected.ward === data.ward
                                  ? true
                                  : false
                                : false
                            }
                            onClick={() =>
                              triggerQueryData(JSON.stringify(data))
                            }
                            // class=""

                            class={`${
                              dataSelected !== null
                                ? dataSelected.ward === data.ward
                                  ? "bg-gray-300"
                                  : "bg-purple-500"
                                : "bg-purple-500"
                            }  inline-block w-full px-2 py-2 mb-3 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md `}
                          >
                            Query Data
                          </button>
                        </div>
                      
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div> */}
        <div class="w-full max-w-full px-3 mt-0 lg:w-12/12 lg:flex-none">
          <div class="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border h-[550px]">
            <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0 ">
              {loadingData ? (
                <>
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
                </>
              ) : (
                <>
                  {ward_data_merged_data !== null ? (
                    <>
                      <h6 class="capitalize ">
                        {/* {dataSelected.county}, {dataSelected.ward} Sample */}
                        Sample
                        farmers (showing{" "}
                        {ward_data_merged_data !== null &&
                          ward_data_merged_data.previewData.length}{" "}
                        records /{" "}
                        {ward_data_merged_data !== null &&
                          ward_data_merged_data.pdataNumber}{" "}
                        ){" "}
                      </h6>

                      <div className="h-[400px] overflow-x-auto mt-3 text-xs">
                        <table
                          className="table border-1 pd-3  bg-blue-100
                        w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400
                        "
                        >
                          <tr className="border-1 pd-3 border-gray-100">
                            {ward_data_merged_data && (
                              <>
                                {ward_data_merged_data.columns !== undefined &&
                                  ward_data_merged_data.columns.map(
                                    (column) => {
                                      return (
                                        <th scope="border-1 pd-3 border-gray-100">
                                          {column}
                                        </th>
                                      );
                                    }
                                  )}
                              </>
                            )}
                          </tr>

                          <tbody>
                            {ward_data_merged_data !== null &&
                              ward_data_merged_data.previewData.map((data) => {
                                return (
                                  <>
                                    <tr className="border-1 pd-3 border-gray-100">

                                      {ward_data_merged_data.columns.map(
                                        (d2) => {
                                          return (
                                            <td className="border-1 pd-3 border-gray-100">
                                              {data[`${d2}`]}
                                            </td>
                                          );
                                        }
                                      )}
                                    </tr>
                                  </>
                                );
                              })}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4">
                        {/* {isDownloading && (
                          <Progress className="mb-3" progress={progress} />
                        )} */}

                        <button
                          disabled={isDownloading}
                          // onClick={() =>
                          //   downloadFile(
                          //     `${ward_data_merged_data.file_name.replace("https://10.101.100.237/media","https://kadp.kalro.org/kalro_media")}`,
                          //     ward_data_merged_data.file_name
                          //   )
                          // }

                          onClick={() =>
                            downloadFile(
                              `${ward_data_merged_data.file_name.replace("https://10.101.100.237/media","https://kiamisapi.kalro.org/kalro_media")}`,
                              ward_data_merged_data.file_name
                            )
                          }
                          download
                          class="inline-block w-half px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-blue-500 bg-150 hover:shadow-xs hover:-translate-y-px"
                        >
                          {isDownloading && progress !== 0 ? (
                            <>{progress !== 0 && progress} % Downloaded</>
                          ) : (
                            "Download Data"
                          )}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* <Alert
                        additionalContent={
                          <>
                            <p>
                              Kindly select a ward from the list on the left
                            </p>
                          </>
                        }
                        color="info"
                        icon={Info}
                      >
                        <span className="font-medium"> No Data to show</span>
                      </Alert> */}
                    </>
                  )}
                </>
              )}
            </div>
            <div class="flex-auto p-4">
              <div>
                <canvas id="chart-line" height="300"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDataCards;
