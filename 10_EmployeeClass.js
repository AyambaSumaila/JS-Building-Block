class Employee_2{
    #firstName;
    #lastName;
    constructor(firstName,lastName, age, height)
    {
      if(this.firstName.startWith("M"))
        {
          this.#firstName=firstName;
          
        }
      else{
        this.#firstName="M" + firstName
      }
      
      if(this.lastName.startWith("A"))
        {
          this.#lastName=lastName;
        }
      else{
        this.#lastName="A" + lastName
      }
       
      this.age=age;
      this.height=height;
    }
    greet()
    {
      console.log("HI, there Mar teacher your name is: ?" + this.firstName + this.lastName);
    }
    
    getAge()
    {
      
      if(this.age >= 20)
        {
          console.log("You are eligible to vote");
        }
      
      else{
        console.log("Sorry you are not eligible");
      }
    }
  }
  
  let emp=new Employee_2("Wahab", "Yusif", 120, 123.9);
  
  emp.greet(emp.firstName, emp.lastName);
  emp.getAge()