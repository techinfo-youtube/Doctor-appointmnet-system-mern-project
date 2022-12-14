import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
  },
});
