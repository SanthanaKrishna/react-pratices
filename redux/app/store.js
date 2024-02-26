const { configureStore } = require("@reduxjs/toolkit");
import cakeReducer from "../features/slice/cakeSlice";
import iceCreamReducer from "../features/slice/icreamSlice";
import userReducer from "../features/slice/userSlice";

const logger = ReduxLogger.createLogger();

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
