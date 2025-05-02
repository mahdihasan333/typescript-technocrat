{
    // interface

    type User1 = {
        name: string;
        age: number
    }

    interface User2 {
        name: string;
        age: number
    }

    type UserWithRole1 = User1 & {role: string}

    interface UserWithRole2 extends User1 {
        role: string
    }


    const user1: UserWithRole2 = {
            name: 'Mahdi',
            age: 21,
            role: 'Student'
        }


    

    
    // js --> Object, array --> Object function --> Object

    type Roll1 = number[]
    
    interface Roll2 {
        [index : number] : number
    }

    const rollNumber1 : Roll1 = [1, 2, 3]



    // function 
    type Add1 = (num1: number, num2: number) => number
    
    interface Add2 {
        (num1: number, num2: number) : number
    }

    const add : Add1 = (num1, num2) => num1 + num2

    const add2 : Add2 = (num1, num2) => num1 + num2


}