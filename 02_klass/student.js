var Student = /** @class */ (function () {
    function Student(mathGrade, englishGrade) {
        this.mathGrade = mathGrade;
        this.englishGrade = englishGrade;
    }
    //This method is to show the grades
    Student.prototype.show = function () {
        console.log(this.mathGrade, this.englishGrade);
    };
    //Method to calculate the average
    Student.prototype.average = function () {
        return ((this.mathGrade + this.englishGrade) / 2);
    };
    //Method to calculate the average grades of two students
    Student.prototype.averageMath = function (count) {
        return this.mathGrade / count;
        /* average2(other:Student):Student{
        return new Student (((this.mathGrade + other.mathGrade) / 2), ((this.englishGrade + other.englishGrade) / 2));
    } */
    };
    //Write a method to add the grades of same subject
    Student.prototype.add = function (other) {
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    };
    //Improve the grade(s) by 5
    Student.prototype.improveMath = function () {
        this.mathGrade += 5;
        //this.mathGrade = this.mathGrade + 5
    };
    return Student;
}());
var s1 = new Student(85, 92);
var s2 = new Student(72, 94);
//Array of students
var students = [
    new Student(80, 85),
    new Student(97, 80),
    new Student(75, 88)
];
//Combine all students into one total
var classTotal = students[0];
for (var i = 1; i < students.length; i++) {
    classTotal = classTotal.add(students[i]);
}
//Average in the class
var n = students.length;
console.log("Class average in math is", classTotal.averageMath(n));
//console.log(s1.mathGrade);
s1.show();
console.log("Average of S1: " + s1.average());
//Test adding other student grades
var combined = s1.add(s2);
combined.show();
/* let combinedavg = s1.average2(s2);
combinedavg.show(); */
console.log("Average of both students is " + combined.averageMath(2));
s1.improveMath();
s1.show();
