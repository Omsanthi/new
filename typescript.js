var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.getfullname = function () {
        return this.firstname + this.lastname;
    };
    return student;
}());
var student1 = new student();
student1.firstname = "om";
student1.lastname = "santhi";
console.log(student1.firstname);
