let initialState = null;

const updateUserReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case "sua_user":{
            state = payload;
            return state ? {...state}:null;
        }
        default : return state;
    }
}

export default updateUserReducer;