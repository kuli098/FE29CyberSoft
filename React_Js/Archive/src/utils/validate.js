export const validateAddUser = (name, value)=>{
    let errorMessage = "";
    if(name === "username"){
        if(!value.length){
            errorMessage = "vui lòng nhập username"
        }
        if(value.indexOf(" ") !== -1){
            errorMessage = "username không được có khoảng trắng!"
        }
    }
    if(name === "name"){
        if(!value.length){
            errorMessage = "vui lòng nhập name"
        }
    }
    if(name === "email"){
        if(!value.length){
            errorMessage = "vui lòng nhập email"
        }
    }
    if(name === "phone"){
        if(!value.length){
            errorMessage = "vui lòng nhập phone"
        }
    }
    if(name === "type"){
        if(!value.length){
            errorMessage = "vui lòng nhập type"
        }
    }
    return errorMessage;
};