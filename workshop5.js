class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
  // passing student Hello
  
  // is this student in the array of this.students
  // if yes return false
  // if no add student return true
    registerStudent(studentToRegister) {
      if(!studentToRegister.email) {
        console.log(`${JSON.stringify(studentToRegister)} is missing email`)
        return false;
      }
      let studentFlag = false;
      this.students.forEach( (student) => { 
        if(student.email === studentToRegister.email){
          studentFlag = true;
				}        
      });  
      if(studentFlag) {
       	console.log(`${JSON.stringify(studentToRegister)} register Rejected`);
        return false;
      }
      // Student not found, proceed
      this.students.push(studentToRegister); 
      console.log(`${JSON.stringify(studentToRegister)} is now registered`)
      return true;
        
    
};
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
};


reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }
};

runTest(reactBootcamp, testStudent);