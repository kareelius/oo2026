export class EvenOdd {

    // Returns "Even" if number is even
    // Returns "Odd" if number is odd
    check(number:number): string {

        if(number % 2 === 0){
            return "Even";
        }

        return "Odd";
    }
}