
class Person{
    #firstName;
    #lastName;

    constructor(firstName, lastName)
    {
        this.#firstName=firstName;
        this.#lastName=lastName;
    }

    get firstName(){
        return this.#firstName;
    }
    get lastName()
    {
        return this.#lastName;
    }

    set firstName(firstName)
    {
        this.#firstName=firstName;
    }
    set lastName(lastName)
    {
        this.#lastName=lastName;
    }
}

let person=new Person("Ghana", "John");
console.log(person.firstName);