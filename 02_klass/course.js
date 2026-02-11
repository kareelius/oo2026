var Course = /** @class */ (function () {
    function Course(credits) {
        this.credits = credits;
    }
    //Method including the formula to calculate the GPA
    //Formula is : Grade X Credits
    Course.prototype.gpaContribution = function (grade) {
        return grade * this.credits;
    };
    Course.prototype.getCredits = function () {
        return this.credits;
    };
    return Course;
}());
//Here defining the courses and credits
var math = new Course(4);
var english = new Course(6);
var programming = new Course(2);
//
var mathGrade = 4.0;
var englishGrade = 3.3;
var programmingGrade = 3.7;
var totalPoints = 0;
totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);
var totalCredits = 0;
totalCredits += math.getCredits();
totalCredits += english.getCredits();
totalCredits += programming.getCredits();
var gpa = totalPoints / totalCredits;
console.log("GPA:", gpa.toFixed(2));
