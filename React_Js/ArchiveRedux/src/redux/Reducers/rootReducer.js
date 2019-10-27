import {combineReducers} from 'redux';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
    // nơi lưu trữ toàn bộ state
    // Tên state: tên reducer quản lý state
    userList: userReducer
})
export default rootReducer;