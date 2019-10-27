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
  },
  {
    username: "Vinh",
    name: "Huu Vinh",
    email: "vinhdepzai@gmail.com",
    phone: "0123456789",
    type: "user"
  }
];

const userReducer = (state = initialState, action) => {
  // dựa vào action gửi lên, chỉnh sửa state
  switch (action.type) {
    case "xoa_user":
      const index = state.findIndex(item => item.username === action.payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    default : return state
  }
};

export default userReducer;
