import { configureStore } from "@reduxjs/toolkit";
import gameStore from './gameStore'
export default configureStore({
    reducer:{
        data:gameStore
    }
})