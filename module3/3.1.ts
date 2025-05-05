{
    // oop - class

    class Animal {
        constructor(public name: string, public species: string, public sound: string){}

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('German Shepard', 'Dog', 'Ghew Ghew')
    const cat = new Animal('cute cat', 'Cat', 'meaw meaw')

    dog.makeSound()
    cat.makeSound()

}