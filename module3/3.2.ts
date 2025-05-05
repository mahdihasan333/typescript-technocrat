{
    // oop - inheritance

    class Person{
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name
            this.age = age
            this.address = address
        }
        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }




    class Student extends Person {
        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }
    }

    const student1 = new Student('Mr. Shihab', 23, 'Bangladesh')
    console.log(student1.address)



    class Teacher extends Person{
        designation: string;


        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation
        }

        takeClass(numberOfClass: number){
            console.log(`${this.name} will take ${numberOfClass}`)

        }
    }

    const teacher1 = new Teacher ('Mr. Shihab', 23, 'Bangladesh', 'professor')
    console.log(teacher1.designation)


}