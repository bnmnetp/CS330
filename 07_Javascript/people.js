#!/usr/bin/env node

/**
 * Created by millbr02 on 4/4/16.
 */

Person = {
    first_name: 'John',
    last_name: 'Smith',
    age: 12
};

console.log(Person.age)


Person = function() {
    var first_name = 'John';
    this.last_name = 'Smith';
    this.age = 12;

    this.getName = function() {
        return first_name;
    }
};

Person.prototype.getLast = function() {
    return this.last_name;
}

t = new Person()
console.log(t.age)
console.log(t.getName())
console.log(t.getLast())


Student.prototype = new Person()

function Student() {
    this.gpa = 4.0;
}

s = new Student()
console.log(s.gpa)
console.log(s.age)