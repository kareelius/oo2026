class Student {
    constructor(protected mathGrade:number, protected englishGrade:number){}
    //This method is to show the grades
    show(): void{
        console.log(this.mathGrade, this.englishGrade);
    }

    //Method to calculate the average
    average(): number{
        return((this.mathGrade + this.englishGrade) / 2);
    }

    //Method to calculate the average grades of two students
    averageMath(count:number):number{
        return this.mathGrade/count;
        
        /* average2(other:Student):Student{
        return new Student (((this.mathGrade + other.mathGrade) / 2), ((this.englishGrade + other.englishGrade) / 2));
    } */
    }


    //Write a method to add the grades of same subject
    add(other:Student):Student{
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    }

    //Improve the grade(s) by 5
    improveMath():void{
        this.mathGrade += 5;
        //this.mathGrade = this.mathGrade + 5
    }
}

let s1: Student = new Student(85, 92);
let s2: Student = new Student(72, 94);

//Array of students
let students: Student[]=[
    new Student(80, 85),
    new Student (97, 80),
    new Student (75, 88)
]
//Combine all students into one total
let classTotal = students[0];

for(let i=1; i<students.length; i++){
    classTotal = classTotal.add(students[i]);
}

//Average in the class
const n = students.length;
console.log("Class average in math is", classTotal.averageMath(n));

//console.log(s1.mathGrade);
s1.show();
console.log("Average of S1: " + s1.average());

//Test adding other student grades
let combined = s1.add(s2);
combined.show();

/* let combinedavg = s1.average2(s2);
combinedavg.show(); */

console.log("Average of both students is " + combined.averageMath(2));

s1.improveMath();
s1.show();