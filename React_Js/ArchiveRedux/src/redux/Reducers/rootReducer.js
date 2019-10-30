import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import updateUserReducer from './updateUserReducer';

const rootReducer = combineReducers({
    // nơi lưu trữ toàn bộ state
    // Tên state: tên reducer quản lý state
    userList: userReducer,
    userUpdate: updateUserReducer,
})
export default rootReducer;