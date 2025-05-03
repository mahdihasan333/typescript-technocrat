{
    // Generic type

    type GenericArray<param> = Array<param>

    const numbersArray1: number[] = [3, 4, 5, 6]
    const numbersArray2: Array<number> = [3, 4, 5, 6]
    const numbersArray3: GenericArray<number> = [3, 4, 5, 6]
    console.log(`Numbers Array1 ${numbersArray1} - Numbers Array2 ${numbersArray2} - Numbers Array3 ${numbersArray3}`)


    const stringArray1: string[] = ['Sihab', 'Tarek', 'Rahat', 'Jahid']
    const stringArray2: Array<string> = ['Sihab', 'Tarek', 'Rahat', 'Jahid']
    const stringArray3: GenericArray<string> = ['Sihab', 'Tarek', 'Rahat', 'Jahid']
    console.log(`String Array1 ${stringArray1} - String Array2 ${stringArray2} - String Array3 ${stringArray3}`)

    const booleanArray1: boolean[] = [true, false, true]
    const booleanArray2: Array<boolean> = [true, false, false]
    const booleanArray3: GenericArray<boolean> = [true, false, false]
    console.log(`Boolean Array1 ${booleanArray1} - Boolean Array2 ${booleanArray2} - Boolean Array3 ${booleanArray3}`)

    interface User {
        name: string;
        age: number
    }

    const user: GenericArray<User> = [
        {
            name: 'Mahdi',
            age: 21
        },
        {
            name: 'Shihab',
            age: 22
        },
    ]
    console.log('User', user)


    const add = (x: number, y: number) => x + y
    console.log(add(30, 40))


    // generic tuple

    type GenericTuple<X,Y> = [X,Y]

    const person : GenericTuple<string, string> = ['Sihab', 'Tarek']
    const userWithId : GenericTuple<number, {name: string; email: string}> = [123, {name: 'Mahdi', email: '@gmail.com'}]
    console.log(`Person ${person} - User With ID ${userWithId}`)




}