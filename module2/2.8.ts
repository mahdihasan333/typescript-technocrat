{
    // promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }

    const getTodo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await res.json()
        return data
        // console.log(data)
    }

    getTodo()


    // simulate
    const createPromise = () :Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'something'
            if(data){
                resolve(data)
            }
            else{
                reject('failed to load data')
            }
        })
    }


    // calling create promise function
    const showData = async() : Promise<string> => {
        const data : string = await createPromise()
        return data;
        // console.log(data)
    }

    showData()



    // boolean
    const createPromise2 = () :Promise<boolean> => {
        return new Promise<boolean>((resolve, reject) => {
            const data: boolean = true
            if(data){
                resolve(data)
            }
            else{
                reject('failed to load data')
            }
        })
    }


    // calling create promise function
    const showData2 = async() : Promise<boolean> => {
        const data : boolean = await createPromise2()
        return data;
    }

    showData2()




    // object
    type Something = {something: 'something'}
    const createPromise3 = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject)=> {
            const data: Something = {something: 'something'}
            if(data){
                resolve(data)
            }
            else{
                reject('failed to load')
            }
        })
    }

    // calling promise function
    const showData3 = async(): Promise<Something> => {
        const data : Something = await createPromise3()
        return data;
    }

    showData3()


}