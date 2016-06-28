/**
 * Created by pcarfrey on 6/27/16.
 */
import {User} from "./User";
import {Student} from "./Student";
import {Teacher} from "./Teacher";

function main() {
    let user:User = new User("Patrick", 10001);
    let student:Student = new Student("Mary", 10002, 5);
    let teacher:Teacher = new Teacher("Bob", 10003, "Math");

    console.log(user.speak());
    console.log(student.speak());
    student.takeTest();
    console.log(`Student Score ${student.testScore}`);
    console.log(teacher.speak());
    console.log(`Grade Given ${teacher.gradeTest(student.testScore)}`);

    function printId(user:User):number {
        return user.id;
    }

    console.log(`User ID ${printId(user)}`);
    console.log(`Student ID ${printId(student)}`);
    console.log(`Teacher ID ${printId(teacher)}`);
}
main();