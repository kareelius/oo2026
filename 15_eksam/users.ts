// iga kasutaja peab neil meetodeid omama
interface IUser {
  getName(): string;
  getEmail(): string;
  getRole(): string;
  describe(): string;
}

// parent class - ei saa otse kasutada, ainult Teacher ja Student kaudu
abstract class Person implements IUser {
  private name: string;
  private email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    // kui nimi või email on tühi, viskan vea
    if (!name || !email) {
      throw new Error("Nimi ja email on kohustuslikud.");
    }
    this.name = name;
    this.email = email;
    this.age = age;
  }

  // private välju ei saa väljastpoolt muuta, ainult lugeda läbi nende funktsioonide
  getName(): string  { return this.name; }
  getEmail(): string { return this.email; }
  getAge(): number   { return this.age; }

  // need peavad olema igal subclassil eraldi
  abstract getRole(): string;
  abstract describe(): string;
}

// Teacher on Person, lisaks on tal kool ja broneeringute list
class Teacher extends Person {
  private schoolName: string;
  private bookingIds: string[] = [];

  constructor(name: string, email: string, age: number, schoolName: string) {
    super(name, email, age); // kutsub Person constructori välja
    this.schoolName = schoolName;
  }

  getRole(): string       { return "teacher"; }
  getSchoolName(): string { return this.schoolName; }

  addBookingId(id: string): void {
    this.bookingIds.push(id);
  }

  getBookingIds(): string[] {
    return [...this.bookingIds]; // tagastan koopia, mitte originaali
  }

  describe(): string {
    return `Õpetaja ${this.getName()} koolist ${this.schoolName} — ${this.bookingIds.length} broneeringut.`;
  }
}

// Student on samuti Person aga erineva infoga
class Student extends Person {
  private grade: number;
  private isActive: boolean;

  constructor(name: string, email: string, age: number, grade: number) {
    super(name, email, age);
    this.grade = grade;
    this.isActive = true; // uus õpilane on vaikimisi aktiivne
  }

  getRole(): string      { return "student"; }
  getGrade(): number     { return this.grade; }

  deactivate(): void     { this.isActive = false; }
  checkActive(): boolean { return this.isActive; }

  describe(): string {
    const staatus = this.isActive ? "aktiivne" : "mitteaktiivne";
    return `Õpilane ${this.getName()}, klass ${this.grade} (${staatus}).`;
  }
}

// kõik kasutajad lähevad sellesse massiivi
const users: Person[] = [];

function addUser(user: Person): void {
  // sama emailiga kasutajat ei tohi kaks korda lisada
  const exists = users.find(u => u.getEmail() === user.getEmail());
  if (exists) {
    throw new Error(`Email ${user.getEmail()} on juba kasutusel.`);
  }
  users.push(user);
}

function getUsersByRole(role: string): Person[] {
  return users.filter(u => u.getRole() === role);
}

// testid
function runTests(): void {
  let passed = 0;
  let failed = 0;

  function check(kirjeldus: string, tingimus: boolean): void {
    if (tingimus) {
      console.log(`  PASS: ${kirjeldus}`);
      passed++;
    } else {
      console.log(`  FAIL: ${kirjeldus}`);
      failed++;
    }
  }

  // kontrollin et viga tekib siis kui peaks
  function checkThrows(kirjeldus: string, fn: () => void): void {
    try {
      fn();
      console.log(`  FAIL: ${kirjeldus} (viga ei tekkinud)`);
      failed++;
    } catch {
      console.log(`  PASS: ${kirjeldus}`);
      passed++;
    }
  }

  console.log("\nTESTID\n");

  const teacher = new Teacher("Peeter Pärn", "peeter@kool.ee", 38, "Tallinna Reaalkool");
  const student = new Student("Anna Tamm", "anna@kool.ee", 16, 10);

  check("õpetaja nimi on õige",         teacher.getName() === "Peeter Pärn");
  check("õpetaja roll on 'teacher'",    teacher.getRole() === "teacher");
  check("õpilase klass on 10",          student.getGrade() === 10);
  check("õpilane on alguses aktiivne",  student.checkActive() === true);

  student.deactivate();
  check("õpilane on pärast deactivate() mitteaktiivne", student.checkActive() === false);

  teacher.addBookingId("BKG-1");
  teacher.addBookingId("BKG-2");
  check("õpetajal on 2 broneeringut", teacher.getBookingIds().length === 2);

  // eraldi list et demo andmed ei segaks
  const testList: Person[] = [];
  const testAdd = (u: Person) => {
    if (testList.find(x => x.getEmail() === u.getEmail())) throw new Error("Duplicate");
    testList.push(u);
  };
  testAdd(teacher);
  testAdd(student);
  check("listis on 2 kasutajat",        testList.length === 2);
  checkThrows("sama email viskab vea",  () => testAdd(new Student("Koopia", "anna@kool.ee", 15, 9)));

  const teachers = testList.filter(u => u.getRole() === "teacher");
  check("filtreerimine leiab 1 õpetaja", teachers.length === 1);

  checkThrows("tühi nimi viskab vea",   () => new Teacher("", "x@y.ee", 30, "Kool"));

  console.log(`\n  → ${passed} õnnestus, ${failed} ebaõnnestus`);
}

// demo - näitab kuidas kood töötab
function runDemo(): void {
  console.log("=== KULTUURIRANITS — kasutajad ===\n");

  try {
    const t = new Teacher("Jaan Mägi", "jaan@reaalkool.ee", 42, "Tallinna Reaalkool");
    const s = new Student("Liis Kask", "liis@opilane.ee", 15, 8);

    t.addBookingId("BKG-101");
    addUser(t);
    addUser(s);

    users.forEach(u => console.log(u.describe()));

    console.log("\nÕpetajad:", getUsersByRole("teacher").map(u => u.getName()));
    console.log("Õpilased:", getUsersByRole("student").map(u => u.getName()));

  } catch (error) {
    console.error("Viga:", error instanceof Error ? error.message : error);
  }
}

runDemo();
runTests();