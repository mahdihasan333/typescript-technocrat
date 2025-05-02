{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Mahdi",
    age: 21,
    gender: "Male",
    contactNo: "01576000000",
    address: "Lakshmipur",
  };

  const student2: Student = {
    name: "shihab",
    age: 23,
    gender: "Male",
    address: "Lakshmipur",
  };

  const student3: Student = {
    name: "Tarek",
    age: 23,
    gender: "Male",
    address: "lakshmipur",
  };


  type UserName = string
  type IsAdmin = boolean
  const UserName : UserName = 'Mahdi'
  const isAdmin: IsAdmin = true



// function Alias
  type Add = (num1: number, num2: number) => number

  const add : Add = (num1, num2) => num1 + num2



}
