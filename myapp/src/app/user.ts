export class User extends Object{
    name:string;
    age:number;
    birth_year:number;
    birth_place:string;

    constructor(name: string, age: number, birth_year: number,birth_place:string) {
        super();
        this.name = name;
        this.age = age;
        this.birth_year = birth_year;
        this.birth_place=birth_place
    }

    override toString(): string {
        return `User: ${this.name}, Age: ${this.age}, Born: ${this.birth_year},${this.birth_place}`;
    }
    
}