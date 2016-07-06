/**
 * Created by pcarfrey on 6/27/16.
 */
import {IUser} from "./IUser";
class User implements IUser {
    constructor(public name:string, public id:number) {
    }

    speak():string {
        return `Hello, my name is ${this.name}.`;
    }
}
export {User};