let initialState = null;

const updateUserReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case "sua_user":
            state = payload;
            return {...state}

        default : return state;
    }
}

export default updateUserReducer;