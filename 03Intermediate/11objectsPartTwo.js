var user = {
    firstName: 'Osasere',
    lastName: 'Ikponmwosa',
    role: 'Admin',
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
};

console.log(user.getCourseCount());
user.buyCourse('React Js course')
user.buyCourse('java course')
console.log(user.getCourseCount());
console.table(user.info())