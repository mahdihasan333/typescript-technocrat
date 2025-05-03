{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    

    const createArrayWithGeneric = <T> (param: T): T[] => {
        return [param]
    }

    const result1 = createArray("Bangladesh")
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')
    console.log(result1)
    console.log(resGeneric)



    type User = {id: number; name: string}

    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: 'Mahdi Hassan'
    })
    console.log(resGenericObj)



    // tuple
    const createArrayWithTuple = <T, Q> (param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const result10 = createArrayWithTuple<string, number>("Bangladesh", 123)
    const result11 = createArrayWithTuple<string, {name: string}>('Bangladesh', {name: 'Asia'})
    console.log(result10)
    console.log(result11)

    
    // 
    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: 'Mr X', email: 'X@gmail.com', devType: 'NLWD'})
    const student2 = addCourseToStudent({name: 'Mr Y', email: 'Y@gmail.com', hasWatch: 'Apple Watch'})

    console.log(student1)
    console.log(student2)
}