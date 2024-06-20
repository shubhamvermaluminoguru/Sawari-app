import { configureStore } from '@reduxjs/toolkit';
import rideReducer from '../reducers/rideBooking';

export default configureStore({
  reducer: {
    ride : rideReducer,
  },
});

