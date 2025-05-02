{
// Learning function

// Normal Function
// Arrow Function

function add(num1: number, num2: number = 10): number{
    return num1 + num2
}
add(2, 2)


const addArrow = (num1:number, num2:number): number => num1 + num2
const result = addArrow(5,3)
console.log(result)


// object  --> function --> method
const poorUser = {
    name: 'mahdi',
    balance: 0,
    addBalance(balance: number): string{
        return `My new Balance is: ${this.balance + balance}`
    }
}


const arr: number[]= [1, 4, 5]
const newArray: number[] = arr.map((item : number): number => item * item)
console.log(newArray)
}