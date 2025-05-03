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
    console.log('User1', user1)


    

    
    // js --> Object, array --> Object function --> Object

    type Roll1 = number[]
    
    interface Roll2 {
        [index : number] : number
    }

    const rollNumber1 : Roll1 = [1, 2, 3]
    console.log('Roll Number', rollNumber1)



    // function 
    type Add1 = (num1: number, num2: number) => number
    
    interface Add2 {
        (num1: number, num2: number) : number
    }

    const add : Add1 = (num1, num2) => num1 + num2

    const add2 : Add2 = (num1, num2) => num1 + num2

    const result1 = add(10, 5)
    const result2 = add2(5, 5)

    console.log('Result1', result1)
    console.log('Result2',result2)


}