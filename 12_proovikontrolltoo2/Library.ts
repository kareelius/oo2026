// ------------------ BAASKLASS ------------------
// See on "parent class" (kõik teised pärivad sellest)
class LibraryItem {
    id: string;
    title: string;
    author: string;
    year: number;

    constructor(id: string, title: string, author: string, year: number) {
        // kontroll: ID ei tohi olla tühi
        if (id.trim() === "") throw new Error("ID cannot be empty");

        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // getterid (lihtsalt tagastavad väärtuse)
    getId(): string { return this.id; }
    getTitle(): string { return this.title; }
    getAuthor(): string { return this.author; }
    getYear(): number { return this.year; }

    // vaikimisi summary
    getSummary(): string {
        return `[Item] ${this.title}`;
    }
}

// ------------------ BOOK ------------------
// Book "pärib" LibraryItem-ist
class Book extends LibraryItem {
    pages: number;
    ISBN: string;

    constructor(id: string, title: string, author: string, year: number, pages: number, ISBN: string) {
        super(id, title, author, year); // kutsub parent constructori

        if (pages <= 0) throw new Error("Pages must be positive");

        this.pages = pages;
        this.ISBN = ISBN;
    }

    // override (kirjutab üle parent meetodi)
    getSummary(): string {
        return `[Book] ${this.title} (${this.year})`;
    }

    // muudab objekti tekstiks (faili jaoks)
    toFileLine(): string {
        return `BOOK|${this.id}|${this.title}|${this.author}|${this.year}|${this.pages}|${this.ISBN}`;
    }
}

// ------------------ DVD ------------------
class DVD extends LibraryItem {
    duration: number;

    constructor(id: string, title: string, author: string, year: number, duration: number) {
        super(id, title, author, year);

        if (duration <= 0) throw new Error("Duration must be positive");

        this.duration = duration;
    }

    getSummary(): string {
        return `[DVD] ${this.title} (${this.year})`;
    }

    toFileLine(): string {
        return `DVD|${this.id}|${this.title}|${this.author}|${this.year}|${this.duration}`;
    }
}

// ------------------ LIBRARY ------------------
// haldab kõiki objekte
class Library {
    items: LibraryItem[];

    constructor() {
        this.items = []; // tühi list
    }

    // lisa uus objekt
    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    // tagasta kõik
    getAll(): LibraryItem[] {
        return this.items;
    }

    // tee kõik tekstiks (faili jaoks)
    toText(): string {
        return this.items
            .map((item: any) => item.toFileLine()) // iga objekt → string
            .join("\n"); // eraldame reavahetusega
    }

    // loe tekstist tagasi objektid
    loadFromText(text: string): string[] {
        const lines = text.split("\n");
        const errors: string[] = [];

        for (let line of lines) {
            try {
                const parts = line.split("|");

                if (parts[0] === "BOOK") {
                    this.addItem(new Book(
                        parts[1],
                        parts[2],
                        parts[3],
                        Number(parts[4]),
                        Number(parts[5]),
                        parts[6]
                    ));
                } 
                else if (parts[0] === "DVD") {
                    this.addItem(new DVD(
                        parts[1],
                        parts[2],
                        parts[3],
                        Number(parts[4]),
                        Number(parts[5])
                    ));
                }

            } catch (e) {
                errors.push("Error in line: " + line);
            }
        }

        return errors;
    }
}