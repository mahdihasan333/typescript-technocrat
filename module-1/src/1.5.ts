// Reference Type --> Object

const user : {
    readonly company: string;       //type --> literal types
    firstName: string;
    middleName?: string;    //optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'bekar',
    firstName: 'Mahdi',
    middleName: 'Hassan',
    lastName: 'Rafi',
    isMarried: false
}

user.company = 'student'