/**
 * Created by pcarfrey on 6/27/16.
 */
import {User} from "./User";
class Student extends User {
    public testScore;

    constructor(public name:string, public id:number, public grade:number) {
        super(name, id);
    }

    speak():string {
        return `Hello, I am a student. My name is ${this.name} and I am in grade ${this.grade}.`;
    }

    takeTest():void {
        this.testScore = Math.floor(Math.random() * 100);
    }
}
export {Student};