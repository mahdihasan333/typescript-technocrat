{
    // spread operator
    // rest operator
    // destructuring


    // learn spread operator
    const bros1 : string[]= ['Sihab', 'Tarek', 'Rahat']
    const bros2 : string[]= ['Jibon', 'Fahad', 'Rabbi']
    bros1.push(...bros2)


    const mentors1 = {
        typescript: 'Mezba',
        redux: "Mir",
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    }


    const mentorsList = {
        ...mentors1,
        ...mentors2
    }




    // learn rest operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends('sihab', 'tarek', 'Rahat', 'jobin')


}