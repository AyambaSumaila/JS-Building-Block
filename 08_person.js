

class Person{
    constructor(firstName, lastName)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }

    fullName()
    {
        return "Hello " + this.firstName + " " + this.lastName;
    }

}

function fullName2(firstName, lastName)
{
    return "Hello " + firstName + " " + lastName;
}
let person=new Person("Ghana", "John");
let person2=new Person("Gha", "Jo");

console.log("Hello " + person.firstName + " " + person.lastName);
console.log("Hello " + person2.firstName + " " + person2.lastName);
let person3=new Person("Hak", "John");
let person4=new Person("Haku", "Jon");
console.log(person3.fullName());
console.log(person4.fullName());


