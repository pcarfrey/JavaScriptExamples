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
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, id, grade) {
        _super.call(this, name, id);
        this.name = name;
        this.id = id;
        this.grade = grade;
    }
    Student.prototype.speak = function () {
        return "Hello, I am a student. My name is " + this.name + " and I am in grade " + this.grade + ".";
    };
    Student.prototype.takeTest = function () {
        this.testScore = Math.floor(Math.random() * 100);
    };
    return Student;
}(User_1.User));
exports.Student = Student;
//# sourceMappingURL=Student.js.map