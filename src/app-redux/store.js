import { configureStore } from "@reduxjs/toolkit";
import appDataSlice from "./features/appData/appDataSlice";

const rootStore = configureStore({
  reducer: {
    appData: appDataSlice,
   


  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

export default rootStore;
