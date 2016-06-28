"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by pcarfrey on 6/27/16.
 */
var User_1 = require("./User");
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, id, subject) {
        _super.call(this, name, id);
        this.name = name;
        this.id = id;
        this.subject = subject;
    }
    Teacher.prototype.speak = function () {
        return "Hello, I am a teacher. My name is " + this.name + " and I teach " + this.subject + ".";
    };
    Teacher.prototype.gradeTest = function (testScore) {
        var grade;
        switch (true) {
            case (testScore < 60):
                grade = 'F';
                break;
            case ((testScore < 70) && (testScore >= 60)):
                grade = 'D';
                break;
            case ((testScore < 80) && (testScore >= 70)):
                grade = 'C';
                break;
            case ((testScore < 90) && (testScore >= 80)):
                grade = 'B';
                break;
            case (testScore >= 90):
                grade = 'A';
                break;
            default:
                grade = 'Unknown';
        }
        return grade;
    };
    return Teacher;
}(User_1.User));
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map