"use strict";
/**
 * Created by pcarfrey on 6/27/16.
 */
var User = (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
    }
    User.prototype.speak = function () {
        return "Hello, my name is " + this.name + ".";
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map