/**
 * Created by pcarfrey on 6/27/16.
 */
import {User} from "./User";
class Teacher extends User {
    constructor(public name:string, public id:number, public subject:string) {
        super(name, id);
    }

    speak():string {
        return `Hello, I am a teacher. My name is ${this.name} and I teach ${this.subject}.`;
    }

    gradeTest(testScore:number):string {
        let grade:string;
        switch (true) {
            case (testScore < 60) :
                grade = 'F';
                break;
            case ((testScore < 70) && (testScore >= 60)) :
                grade = 'D';
                break;
            case ((testScore < 80) && (testScore >= 70)) :
                grade = 'C';
                break;
            case ((testScore < 90) && (testScore >= 80)) :
                grade = 'B';
                break;
            case (testScore >= 90) :
                grade = 'A';
                break;
            default :
                grade = 'Unknown';
        }
        return grade;
    }
}
export {Teacher};