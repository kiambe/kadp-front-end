import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//   AxiosGetService,
//   AxiosPostService,
// } from "../../../constants/AxiosServices";
// import {
//   removeValueFromOffline,
//   setOfflineLocalStorage,
// } from "../../../constants/OfflineStorage";
import { AxiosGetService,AxiosPostService } from "../../../Components/Datasets_New/AxiosServices";
import { removeValueFromOffline ,setOfflineLocalStorage} from "../../../Components/Datasets_New/OfflineStorage";


// REACT_APP_FILES_URL=/media/csv/

// REACT_APP_LOGIN_API=http://localhost:8000/api/login/
// REACT_APP_FARMERS_API=http://localhost:8000/api/farmer_data/
// REACT_APP_CROPS_API=http://localhost:8000/api/crops_data/
// REACT_APP_LIVESTOCK_API=http://localhost:8000/api/livestock_data/
// REACT_APP_COUNTY_STATS_API=http://localhost:8000/api/county_data_stats/





let URL = "http://localhost:8000";
const KALRO_URL  = "https://kiamisapi.kalro.org/api/"

// const KALRO_URL  = "/kalro_api/"


const  END_POINT={  
  county_data_stats:`${KALRO_URL}/county_data_stats`,
  crop_data:`${KALRO_URL}/crops_data`,
  farmer_data:`${KALRO_URL}/farmer_data`

}

export const getFarmerProfiles = createAsyncThunk(
  "appDataSlice/getFarmerProfiles",
  async (data, { rejectWithValue }) => {
    try {
      let { page, county, token } = data;
      let url = END_POINT.county_data_stats;
      url = `${URL}/api/farmers_profiles/?page=${page}&county=${county}`;
      if (data.hasOwnProperty("ward") !== undefined) {
        let ward = data.ward;
        if (ward !== null && ward !== "Filter by ward") {
          url = `${URL}/api/farmers_profiles/?page=${page}&county=${county}&ward=${ward}`;
        }
      }

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCountyStats = createAsyncThunk(
  "appDataSlice/getCountyStats",
  async (data, { rejectWithValue }) => {
    try {
      let { page, county, token } = data;
      let url = process.env.REACT_APP_FARMERS_API;
      url = `${URL}/api/county_stats/?page=${page}&county=${county}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getDataForMap = createAsyncThunk(
  "appDataSlice/getDataForMap",
  async (data, { rejectWithValue }) => {
    try {
      let { ward, county, token } = data;
      let url = process.env.REACT_APP_FARMERS_API;
      url = `${URL}/api/county_data_for_map/?ward=${ward}&county=${county}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getVCSampleFarmers = createAsyncThunk(
  "appDataSlice/getVCSampleFarmersStats",
  async (data, { rejectWithValue }) => {
    try {
      let { page, county, token, vc } = data;
      let url = process.env.REACT_APP_FARMERS_API;
      url = `${URL}/api/county_vc_sample/?page=${page}&county=${county}&vc=${vc}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getVCSampleFarmers2 = createAsyncThunk(
  "appDataSlice/getVCSampleFarmers2",
  async (data, { rejectWithValue }) => {
    try {
      let { page, county, token, vc } = data;
      let url = process.env.REACT_APP_FARMERS_API;
      url = `${URL}/api/county_vc_sample2/?page=${page}&county=${county}&vc=${vc}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);
export const getCountyVcStats = createAsyncThunk(
  "appDataSlice/getCountyVcStats",
  async (data, { rejectWithValue }) => {
    try {
      let { page, county, token } = data;
      let url = process.env.REACT_APP_FARMERS_API;
      url = `${URL}/api/county_vc_stats/?page=${page}&county=${county}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCountyVcStats2 = createAsyncThunk(
  "appDataSlice/getCountyVcStats2",
  async (data, { rejectWithValue }) => {
    try {
      let { page, county, token } = data;
      let url = process.env.REACT_APP_FARMERS_API;
      url = `${URL}/api/county_vc_stats2/?page=${page}&county=${county}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCattleStats = createAsyncThunk(
  "appDataSlice/getCattleStats",
  async (data, { rejectWithValue }) => {
    try {
      let { page, county, token } = data;
      let url = process.env.REACT_APP_FARMERS_API;
      url = `${URL}/api/cattle_stats/?page=${page}&county=${county}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCountyWards = createAsyncThunk(
  "appDataSlice/getCountyWards",
  async (data, { rejectWithValue }) => {
    try {
      let { page, county, token } = data;
      let url = process.env.REACT_APP_FARMERS_API;
      url = `${URL}/api/county_wards/?page=${page}&county=${county}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchFarmer = createAsyncThunk(
  "appDataSlice/searchFarmer",
  async (data, { rejectWithValue }) => {
    try {
      let { query, token, simple, county } = data;
      let url = process.env.REACT_APP_FARMERS_API;
      url = `${URL}/api/farmers_search?search=${query}&county=${county}`;

      if (simple) {
        // farmers_simple_search
        url = `${URL}/api/farmers_simple_search?search=${query}&county=${county}`;
      }

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCountyStats_Merged = createAsyncThunk(
  "appDataSlice/getCountyStats_Merged",
  async (data, { rejectWithValue }) => {
    try {
      let { ward, county, token } = data;
      let url = END_POINT.county_data_stats;
      url = `${url}?ward=${ward}&county=${county}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getWardData_Merged = createAsyncThunk(
  "appDataSlice/getWardData_Merged",
  async (data, { rejectWithValue }) => {
    try {
      let { ward, county, token } = data;
      let url = END_POINT.farmer_data;
      url = `${url}?ward=${ward}&county=${county}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getWardCropData_Merged = createAsyncThunk(
  "appDataSlice/getWardCropData_Merged",
  async (data, { rejectWithValue }) => {
    try {
      let { ward, county, token, crop_name } = data;
      let url = process.env.REACT_APP_CROPS_API;
      url = `${url}?ward=${ward}&county=${county}&crop_name=${crop_name}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getWardLivestockData_Merged = createAsyncThunk(
  "appDataSlice/getWardLivestockData_Merged",
  async (data, { rejectWithValue }) => {
    try {
      let { ward, county, token, livestock_name } = data;
      let url = process.env.REACT_APP_LIVESTOCK_API;
      url = `${url}?ward=${ward}&county=${county}&livestock_name=${livestock_name}`;

      const res = await AxiosGetService(url, token);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "appDataSlice/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      let url = process.env.REACT_APP_LOGIN_API;
      // url = `${process.env.REACT_APP_LOGIN_API}/api/login/`;
      console.log(url);
      const res = await AxiosPostService(url, data);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserTokenOffline = createAsyncThunk(
  "appDataSlice/getUserTokenOffline",
  async (key) => {
    // let data = await StoreofflineLocalStorage(key);
    return key;
  }
);

export const getUserOffline = createAsyncThunk(
  "appDataSlice/getUserOffline",
  async (key) => {
    // let data = await StoreofflineLocalStorage(key);
    // return data;
    return key;
  }
);

let farmer_profiles = {
  data: null,
  loading: false,
  error: null,
};

let sample_farmer_vc = {
  data: null,
  loading: false,
  error: null,
};

let data_for_map = {
  data: null,
  loading: false,
  error: null,
};

let sample_farmer_vc2 = {
  data: null,
  loading: false,
  error: null,
};

let stats_county = {
  data: null,
  loading: false,
  error: null,
};

let vc_stats_county = {
  data: null,
  loading: false,
  error: null,
};
let vc_stats_county2 = {
  data: null,
  loading: false,
  error: null,
};

let cattle_stats = {
  data: null,
  loading: false,
  error: null,
};

let county_wards = {
  data: null,
  loading: false,
  error: null,
};

let offlineUserToken = {
  loading: true,
  userToken: null,
  error: "",
  isPresent: null,
  userOffline: null,
};

let loginUserState = {
  loading: true,
  data: null,
  error: "",
  success: null,
  isLoggedIn: false,
  isLoggedOutButton: null,
  isChangePassword: null,
};

let farmer_profiles_search = {
  data: null,
  loading: false,
  error: null,
};

let county_stats_merged = {
  data: null,
  loading: false,
  error: null,
};

let ward_data_merged = {
  data: null,
  loading: false,
  error: null,
};

let ward_crop_data_merged = {
  data: null,
  loading: false,
  error: null,
};

let ward_livestock_data_merged = {
  data: null,
  loading: false,
  error: null,
};

const appDataSlice = createSlice({
  name: "appData",
  initialState: {
    stats_county,
    vc_stats_county,
    vc_stats_county2,
    farmer_profiles,
    farmer_profiles_search,
    loginUserState,
    offlineUserToken,
    offlineTokenIsPresent: null,
    isLoadingAllData: false,
    isLoadingAllData2: false,
    isLoadingAllData3: false,
    county_wards,
    showSampleFarmersModal: false,
    sample_farmer_vc,
    sample_farmer_vc2,
    sample_farmers_data: null,
    data_for_map,
    cattle_stats,
    county_stats_merged,
    ward_data_merged,
    ward_crop_data_merged,
    ward_livestock_data_merged,
  },
  reducers: {
    // state.county_stats_merged.data = action.payload;

    updateCountyStatsMerged: (state, action) => {
      // let { payload } = action;

      state.county_stats_merged.data = action.payload;
    },

    updateToken: (state, action) => {
      // let { payload } = action;

      state.offlineUserToken.loading = null;
      state.offlineUserToken.userToken = action.payload;
      state.offlineUserToken.error = "";

      if (action.payload) {
        state.offlineUserToken.isPresent = true;
        state.offlineTokenIsPresent = true;
        state.loginUserState.isLoggedIn = true;
      } else {
        state.offlineUserToken.isPresent = false;
        state.loginUserState = loginUserState;
      }
    },

    logoutUser: (state, action) => {
      state.loginUserState.isLoggedIn = false;
      state.loginUserState.data = null;
      state.offlineUserToken = {
        loading: true,
        userToken: null,
        error: "",
        isPresent: null,
        userOffline: null,
      };

      state.farmer_profiles = farmer_profiles;
      state.farmer_profiles_search = farmer_profiles_search;
      state.stats_county = stats_county;
      state.county_wards = county_wards;
      state.county_stats_merged = county_stats_merged;
      state.ward_crop_data_merged = ward_crop_data_merged
      state.ward_livestock_data_merged = ward_livestock_data_merged
      state.ward_data_merged = ward_data_merged
      state.county_stats_merged = county_stats_merged
      removeValueFromOffline("@CountyStats_Merged");
    },

    toggleShowSampleFarmers: (state, action) => {
      state.sample_farmer_vc = sample_farmer_vc;
      state.sample_farmer_vc2 = sample_farmer_vc2;

      state.showSampleFarmersModal = action.payload.status;
      state.sample_farmers_data = JSON.parse(action.payload.data);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getFarmerProfiles.pending, (state) => {
      state.isLoadingAllData = true;
      state.farmer_profiles.loading = true;
      state.farmer_profiles.success = false;
      state.farmer_profiles.error = "";
    });
    builder.addCase(getFarmerProfiles.fulfilled, (state, action) => {
      state.farmer_profiles = action.payload;
      state.isLoadingAllData = false;
    });
    builder.addCase(getFarmerProfiles.rejected, (state, action) => {
      state.isLoadingAllData = false;
      // alert("Something went wrong fetching your data")
    });

    builder.addCase(getVCSampleFarmers.pending, (state) => {
      state.isLoadingAllData3 = true;
      state.sample_farmer_vc.loading = true;
      state.sample_farmer_vc.success = false;
      state.sample_farmer_vc.error = "";
    });
    builder.addCase(getVCSampleFarmers.fulfilled, (state, action) => {
      state.sample_farmer_vc = action.payload;
      state.isLoadingAllData3 = false;
    });
    builder.addCase(getVCSampleFarmers.rejected, (state, action) => {
      state.isLoadingAllData3 = false;
      // alert("Something went wrong fetching your data")
    });

    builder.addCase(getVCSampleFarmers2.pending, (state) => {
      state.isLoadingAllData3 = true;
      state.sample_farmer_vc2.loading = true;
      state.sample_farmer_vc2.success = false;
      state.sample_farmer_vc2.error = "";
    });
    builder.addCase(getVCSampleFarmers2.fulfilled, (state, action) => {
      state.sample_farmer_vc2 = action.payload;
      state.isLoadingAllData3 = false;
    });
    builder.addCase(getVCSampleFarmers2.rejected, (state, action) => {
      state.isLoadingAllData3 = false;
      // alert("Something went wrong fetching your data")
    });

    builder.addCase(getCountyStats.pending, (state) => {
      state.isLoadingAllData2 = true;
      state.stats_county.loading = true;
      state.stats_county.success = false;
      state.stats_county.error = "";
    });
    builder.addCase(getCountyStats.fulfilled, (state, action) => {
      state.stats_county = action.payload;
      state.isLoadingAllData2 = false;
    });
    builder.addCase(getCountyStats.rejected, (state, action) => {
      state.isLoadingAllData = false;
      // alert("Something went wrong fetching your data")
    });

    builder.addCase(getCattleStats.pending, (state) => {
      state.isLoadingAllData2 = true;
      state.cattle_stats.loading = true;
      state.cattle_stats.success = false;
      state.cattle_stats.error = "";
    });
    builder.addCase(getCattleStats.fulfilled, (state, action) => {
      state.cattle_stats.data = action.payload.data;
      state.isLoadingAllData2 = false;
    });
    builder.addCase(getCattleStats.rejected, (state, action) => {
      state.isLoadingAllData = false;
      // alert("Something went wrong fetching your data")
    });

    builder.addCase(getDataForMap.pending, (state) => {
      state.data_for_map.loading = true;
      state.data_for_map.success = false;
      state.data_for_map.error = "";
    });
    builder.addCase(getDataForMap.fulfilled, (state, action) => {
      state.data_for_map.data = action.payload;
      state.data_for_map.loading = false;
      state.data_for_map.success = true;
      state.data_for_map.error = "";
    });
    builder.addCase(getDataForMap.rejected, (state, action) => {
      state.isLoadingAllData = false;
      state.data_for_map.loading = false;
      state.data_for_map.success = false;
      // alert("Something went wrong fetching your data")
    });

    builder.addCase(getCountyVcStats.pending, (state) => {
      state.isLoadingAllData2 = true;
      state.vc_stats_county.loading = true;
      state.vc_stats_county.success = false;
      state.vc_stats_county.error = "";
    });
    builder.addCase(getCountyVcStats.fulfilled, (state, action) => {
      state.vc_stats_county = action.payload;
      state.isLoadingAllData2 = false;
    });
    builder.addCase(getCountyVcStats.rejected, (state, action) => {
      state.isLoadingAllData = false;
      // alert("Something went wrong fetching your data")
    });

    builder.addCase(getCountyVcStats2.pending, (state) => {
      state.isLoadingAllData2 = true;
      state.vc_stats_county2.loading = true;
      state.vc_stats_county2.success = false;
      state.vc_stats_county2.error = "";
    });
    builder.addCase(getCountyVcStats2.fulfilled, (state, action) => {
      state.vc_stats_county2 = action.payload;
      state.isLoadingAllData2 = false;
    });
    builder.addCase(getCountyVcStats2.rejected, (state, action) => {
      state.isLoadingAllData = false;
      // alert("Something went wrong fetching your data")
    });

    builder.addCase(getCountyWards.pending, (state) => {
      state.county_wards.loading = true;
      state.county_wards.error = "";
    });
    builder.addCase(getCountyWards.fulfilled, (state, action) => {
      state.county_wards.data = action.payload;
      state.county_wards.loading = false;
    });
    builder.addCase(getCountyWards.rejected, (state, action) => {
      state.county_wards.loading = false;

      // alert("Something went wrong fetching your data")
    });

    builder.addCase(searchFarmer.pending, (state, action) => {
      if (action.meta.arg.simple) {
      } else {
        state.farmer_profiles_search = {
          data: null,
          loading: false,
          error: null,
        };
      }

      state.farmer_profiles_search.loading = true;
      state.farmer_profiles_search.success = false;
      state.farmer_profiles_search.error = "";
    });
    builder.addCase(searchFarmer.fulfilled, (state, action) => {
      if (action.meta.arg.simple) {
      } else {
        state.farmer_profiles_search = action.payload;
      }
    });
    builder.addCase(searchFarmer.rejected, (state, action) => {
      state.farmer_profiles_search.loading = false;
      state.farmer_profiles_search.error = "Farmer not found";
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loginUserState.loading = true;
      state.loginUserState.success = false;
      state.loginUserState.error = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginUserState.data = action.payload;
      state.loginUserState.isLoggedIn = true;
      state.loginUserState.error = "";
      state.loginUserState.loading = false;
      state.loginUserState.success = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {});

    builder.addCase(getUserTokenOffline.pending, (state) => {
      state.offlineUserToken.loading = true;
      state.offlineUserToken.error = "";
      state.offlineTokenIsPresent = null;
      state.offlineUserToken.isPresent = null;
    });

    builder.addCase(getUserTokenOffline.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.offlineUserToken.loading = null;
      state.offlineUserToken.userToken = action.payload;
      state.offlineUserToken.error = "";

      if (action.payload) {
        state.offlineUserToken.isPresent = true;
        state.offlineTokenIsPresent = true;
        state.loginUserState.isLoggedIn = true;
      } else {
        state.offlineUserToken.isPresent = false;
        state.loginUserState = loginUserState;
      }
    });

    builder.addCase(getUserTokenOffline.rejected, (state, action) => {
      state.loginUserState.loading = null;
      state.getUserTokenOffline.loading = null;
      state.offlineTokenIsPresent = null;
      state.offlineTokenIsPresent = null;
      state.offlineUserToken.isPresent = false;
      state.loginUserState = loginUserState;
    });

    builder.addCase(getUserOffline.pending, (state) => {});

    builder.addCase(getUserOffline.fulfilled, (state, action) => {
      // console.log(action.payload)
      // state.offlineUserToken.loading = null;
      // state.offlineUserToken.userOffline = action.payload;
      // state.offlineUserToken.error = "";

      if (action.payload !== null) {
        // state.offlineUserToken.isPresent = true;
        // state.offlineTokenIsPresent = true;
        state.loginUserState.data = action.payload.user;
        // state.loginUserState.isLoggedIn= true
        state.loginUserState.loading = false;
      } else {
        // alert(1)
        // state.offlineUserToken.isPresent = false;
        // state.loginUserState = loginUserState;
        // state.offlineUserToken.userOffline = action.payload.user;
      }
    });

    builder.addCase(getUserOffline.rejected, (state, action) => {
      state.loginUserState.loading = null;
      state.getUserTokenOffline.loading = null;
      state.offlineTokenIsPresent = null;
      state.offlineTokenIsPresent = null;
      state.offlineUserToken.isPresent = false;
      state.loginUserState = loginUserState;
    });

    // county stats merged

    builder.addCase(getCountyStats_Merged.rejected, (state, action) => {
      state.county_stats_merged.loading = false;
      state.county_stats_merged.data = null;

      // state.county_stats_merged.error = "Farmer not found";
    });

    builder.addCase(getCountyStats_Merged.pending, (state) => {
      state.county_stats_merged.loading = true;
      state.county_stats_merged.success = false;
      state.county_stats_merged.error = "";
    });
    builder.addCase(getCountyStats_Merged.fulfilled, (state, action) => {
      state.county_stats_merged.data = action.payload;
      console.log(typeof(action.payload))
      console.log(action.payload)

      if(typeof(action.payload) === "string"){
        setOfflineLocalStorage("@CountyStats_Merged", JSON.parse(action.payload));
      }else{
        setOfflineLocalStorage("@CountyStats_Merged", action.payload);
      }
      
      state.county_stats_merged.error = "";
      state.county_stats_merged.loading = false;
      state.county_stats_merged.success = true;
    });
    // get ward data

    builder.addCase(getWardData_Merged.rejected, (state, action) => {
      state.ward_data_merged.loading = false;
      // state.county_stats_merged.error = "Farmer not found";
    });

    builder.addCase(getWardData_Merged.pending, (state) => {
      state.ward_data_merged.loading = true;
      state.ward_data_merged.success = false;
      state.ward_data_merged.error = "";
    });
    builder.addCase(getWardData_Merged.fulfilled, (state, action) => {
      state.ward_data_merged.data = action.payload;
      state.ward_data_merged.error = "";
      state.ward_data_merged.loading = false;
      state.ward_data_merged.success = true;
    });

    // get crop ward data

    builder.addCase(getWardCropData_Merged.rejected, (state, action) => {
      state.ward_crop_data_merged.loading = false;
      // state.county_stats_merged.error = "Farmer not found";
    });

    builder.addCase(getWardCropData_Merged.pending, (state) => {
      state.ward_crop_data_merged.loading = true;
      state.ward_crop_data_merged.success = false;
      state.ward_crop_data_merged.error = "";
    });
    builder.addCase(getWardCropData_Merged.fulfilled, (state, action) => {
      state.ward_crop_data_merged.data = action.payload;
      state.ward_crop_data_merged.error = "";
      state.ward_crop_data_merged.loading = false;
      state.ward_crop_data_merged.success = true;
    });

    // get livestock

    builder.addCase(getWardLivestockData_Merged.rejected, (state, action) => {
      state.ward_livestock_data_merged.loading = false;
    });

    builder.addCase(getWardLivestockData_Merged.pending, (state) => {
      state.ward_livestock_data_merged.loading = true;
      state.ward_livestock_data_merged.success = false;
      state.ward_livestock_data_merged.error = "";
    });
    builder.addCase(getWardLivestockData_Merged.fulfilled, (state, action) => {
      state.ward_livestock_data_merged.data = action.payload;
      state.ward_livestock_data_merged.error = "";
      state.ward_livestock_data_merged.loading = false;
      state.ward_livestock_data_merged.success = true;
    });
  },
});

export const {
  updateToken,
  logoutUser,
  toggleShowSampleFarmers,
  updateCountyStatsMerged,
} = appDataSlice.actions;

export default appDataSlice.reducer;
