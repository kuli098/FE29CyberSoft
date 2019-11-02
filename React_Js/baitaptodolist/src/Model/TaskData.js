var randomid = require('randomid');
const TaskData = [
    {
        id: randomid(5),
        name: "Soạn ReactJs",
        labelArr: ["Frontend", "Backend"],
        priority: 1,
        memberIdArr: ["user_2"],
        status: 2,
        description: "Phải soạn react kèm với NodeJs và Redux"
    },
    {
        id: randomid(5),
        name: "Dạy AngularJs",
        labelArr: ["Frontend", "API"],
        priority: 2,
        memberIdArr: ["user_4","user_5"],
        status: 2,
        description: "Nội dung của Angular rất dài và khó"
    },{
        id: randomid(5),
        name: "Soạn Python",
        labelArr: ["Backend"],
        priority: 2,
        memberIdArr: ["user_3","user_5"],
        status: 1,
        description: "Soạn Python phải tập trung vào game và giải quyết vấn đề"
    },{
        id: randomid(5),
        name: "Thi Hackathon",
        labelArr: ["Frontend", "Backend","Issue"],
        priority: 3,
        memberIdArr: ["user_2","user_3","user_4","user_5"],
        status: 3,
        description: "Cuộc thi đòi hỏi tư duy và kỹ năng coding"
    },
]
export default TaskData;