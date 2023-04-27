import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { musicApi } from '../api/musicApi'
import authReducer from './slices/authSlice'
import filterReducer from './slices/filterSlice'
import searchReducer from './slices/searchSlice'
import playerReducer from './slices/playerSlice'
import playlistsReducer from './slices/playlistSlice'



const rootReducer = combineReducers({
    [musicApi.reducerPath]: musicApi.reducer,
    auth: authReducer,
    filter: filterReducer,
    player: playerReducer,
    playlists: playlistsReducer,
    search: searchReducer,
})

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(musicApi.middleware),
})

export default store
