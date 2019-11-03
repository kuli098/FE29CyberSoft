let initialState = [
  {
    username: "Nhan",
    name: "nhan nguyen",
    email: "nhan120298@gmail.com",
    phone: "0924444740",
    type: "admin"
  },
  {
    username: "Vinh",
    name: "Huu Vinh",
    email: "vinhdepzai@gmail.com",
    phone: "0123456789",
    type: "user"
  }
];

const userReducer = (state = initialState, { type, payload }) => {
  // dựa vào action gửi lên, chỉnh sửa state
  switch (type) {
    case "xoa_user": {
      const index = state.findIndex(item => item.username === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    }
    case "them_user": {
      // let mangCapNhat =[...state];
      const userIndex = state.findIndex(
        item =>
          item.username === payload.username || item.email === payload.email
      );
      if (userIndex === -1) {
        state.push(payload);
      } else {
        alert("user da ton tai");
      }
      return [...state];
    }
    case "sua_user": {
      const index = state.findIndex(item => item.username === payload.username);
      state[index] = payload;
      return [...state];
    }
    default:
      return state;
  }
};

export default userReducer;
