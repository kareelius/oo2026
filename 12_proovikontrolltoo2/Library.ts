// ------------------ BAASKLASS ------------------
// kõik teised (Book, DVD) pärivad sellest
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

    // lihtne tekst, mida saab kuvada
    getSummary(): string {
        return `[Item] ${this.title}`;
    }
}

// ------------------ BOOK ------------------
class Book extends LibraryItem {
    pages: number;
    ISBN: string;

    constructor(id: string, title: string, author: string, year: number, pages: number, ISBN: string) {
        // kutsume parent constructori
        super(id, title, author, year);

        // kontroll: lehekülgede arv peab olema > 0
        if (pages <= 0) throw new Error("Pages must be positive");

        this.pages = pages;
        this.ISBN = ISBN;
    }

    // override (kirjutame parent meetodi üle)
    getSummary(): string {
        return `[Book] ${this.title} (${this.year})`;
    }

    // muudame objekti tekstiks (faili jaoks)
    toFileLine(): string {
        return `BOOK|${this.id}|${this.title}|${this.author}|${this.year}|${this.pages}|${this.ISBN}`;
    }
}

// ------------------ DVD ------------------
class DVD extends LibraryItem {
    duration: number;

    constructor(id: string, title: string, author: string, year: number, duration: number) {
        super(id, title, author, year);

        // kontroll: kestus peab olema > 0
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
// hoiab kõiki objekte
class Library {
    items: LibraryItem[];

    constructor() {
        this.items = []; // alguses tühi list
    }

    // lisab objekti listi
    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    // tagastab kõik objektid
    getAll(): LibraryItem[] {
        return this.items;
    }

    // muudab kõik objektid tekstiks (salvestamiseks)
    toText(): string {
        return this.items
            .map((item: any) => item.toFileLine()) // iga objekt → string
            .join("\n"); // iga rida eraldi
    }

    // loeb tekstist tagasi objektid
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

// ÄRA pane export kui kasutad HTML-is otse!
// export { LibraryItem, Book, DVD, Library };