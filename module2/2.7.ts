{
    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = 'bike' | 'car' | 'ship'    //manually

    type Owner2 = keyof Vehicle
    
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'Mahdi Hassan',
        age: 21,
        address: 'Lakshmipur'
    }

    const car = {
        model: 'Toyota 100',
        year: 2000
    }

    const result1 = getPropertyValue(user, 'age')
    const result2 = getPropertyValue(car, 'model')

    console.log(result1)
    console.log(result2)



}