// Destructuring

{
    const user = {
        id: 345,
        name: {
            firstName: 'Mahdi',
            middleName: 'Hassan',
            lastName: 'Rafi'
        },
        contactNo: '01576000000',
        address: 'Bangladesh'
    }
    
    const {
        contactNo,
        name: {middleName : midName}
    } = user
    
    console.log(`User contact Number: ${contactNo}`)
    console.log(`User middle name: ${midName}`)
    
    
    
    // Array destructuring
    const myFriends = ['sihab', 'tarek', 'rahat', 'nabil', 'fohad']
    const [, , bestFriend, ...rest] = myFriends
    
    console.log(`Best Friend : ${bestFriend}`)
    console.log(`Other Friend : ${rest}`)
}