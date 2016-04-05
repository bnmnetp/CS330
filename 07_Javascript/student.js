/**
 * Created by millbr02 on 4/4/16.
 */

Person = function(fn, ln, age) {
    console.log("here")
    var first_name = fn;
    this.last_name = ln;
    this.age = age;

    this.getName = function() {
        return first_name;
    }
};


Person.prototype.getLast = function() {
    return this.last_name;
};


Student.prototype = new Person();

function Student() {
    Person.apply(this,arguments);
    this.gpa = 4.0;
}

s = new Student('john','smith',13);
console.log(s.gpa);
console.log(s.age);
console.log(s.getName());
console.log(s.getLast());
