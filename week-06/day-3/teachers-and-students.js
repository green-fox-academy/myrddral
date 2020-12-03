class Student {
    
    learn() {
        console.log('The student learns something new');
    }
    question(teacher) {
        return teacher.answer();
    }
}

class Teacher {
    
    teach(student) {
        return student.learn();
    }
    answer() {
        console.log('The teacher answers a question');
    }
}

let teacher1 = new Teacher();
let student1 = new Student();

student1.question(teacher1);
teacher1.teach(student1);
