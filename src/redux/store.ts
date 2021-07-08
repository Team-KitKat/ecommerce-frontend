import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./productSlice";
import checkOutreducer from "./checkoutProductSlice";


export const store = configureStore({
    reducer: {
        products:productReducer,
        checkoutProducts:checkOutreducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch