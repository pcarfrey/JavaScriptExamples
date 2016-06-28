"use strict";
/**
 * Created by pcarfrey on 6/27/16.
 */
var User_1 = require("./User");
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
function main() {
    var user = new User_1.User("Patrick", 10001);
    var student = new Student_1.Student("Mary", 10002, 5);
    var teacher = new Teacher_1.Teacher("Bob", 10003, "Math");
    console.log(user.speak());
    console.log(student.speak());
    student.takeTest();
    console.log("Student Score " + student.testScore);
    console.log(teacher.speak());
    console.log("Grade Given " + teacher.gradeTest(student.testScore));
    function printId(user) {
        return user.id;
    }
    console.log("User ID " + printId(user));
    console.log("Student ID " + printId(student));
    console.log("Teacher ID " + printId(teacher));
}
main();
//# sourceMappingURL=Main.js.map