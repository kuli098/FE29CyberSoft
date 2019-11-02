export default class Task {
    constructor(id, name, priority, labelArr, memberIdArr, status, description) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.labelArr = labelArr;
        this.memberIdArr = memberIdArr;
        this.status = status;
        this.description = description;
    }
}