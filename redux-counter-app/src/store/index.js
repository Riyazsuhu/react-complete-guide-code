import  {configureStore} from '@reduxjs/toolkit'
import authReducer from './authStore';
import counterReducer from './counterStore';

const counterStore = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export default counterStore