{
  // constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 44,
    name: "Mr. Z",
    email: "z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent({
    id: 123,
    name: "Mr X",
    email: "X@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 1234,
    name: "Mr Y",
    email: "Y@gmail.com",
    hasWatch: "Apple Watch",
  });



  
}
