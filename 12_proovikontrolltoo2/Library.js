class LibraryItem {
    constructor(id, title, author, year) {
        if (id.trim() === "") {
            throw new Error("ID cannot be empty");
        }
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `[Item] ${this.title}`;
    }
}
class Book extends LibraryItem {
    constructor(id, title, author, year, pages) {
        super(id, title, author, year);
        if (pages <= 0) {
            throw new Error("Pages must be positive");
        }
        this.pages = pages;
    }
    getSummary() {
        return `[Book] ${this.title} (${this.year}) - ${this.pages} pages`;
    }
    toFileLine() {
        return `BOOK|${this.id}|${this.title}|${this.author}|${this.year}|${this.pages}`;
    }
}
class DVD extends LibraryItem {
    constructor(id, title, author, year, duration) {
        super(id, title, author, year);
        if (duration <= 0) {
            throw new Error("Duration must be positive");
        }
        this.duration = duration;
    }
    getSummary() {
        return `[DVD] ${this.title} (${this.year}) - ${this.duration} min`;
    }
    toFileLine() {
        return `DVD|${this.id}|${this.title}|${this.author}|${this.year}|${this.duration}`;
    }
}
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    searchByTitle(text) {
        return this.items.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    }
    toText() {
        return this.items
            .map((item) => item.toFileLine())
            .join("\n");
    }
    loadFromText(text) {
        const lines = text.split("\n");
        const errors = [];
        for (let line of lines) {
            try {
                const parts = line.split("|");
                if (parts[0] === "BOOK") {
                    this.addItem(new Book(parts[1], parts[2], parts[3], Number(parts[4]), Number(parts[5])));
                }
                else if (parts[0] === "DVD") {
                    this.addItem(new DVD(parts[1], parts[2], parts[3], Number(parts[4]), Number(parts[5])));
                }
            }
            catch (e) {
                errors.push("Error in line: " + line);
            }
        }
        return errors;
    }
}
export { LibraryItem, Book, DVD, Library };
