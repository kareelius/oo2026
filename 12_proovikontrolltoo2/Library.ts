class LibraryItem {

    id: string;
    title: string;
    author: string;
    year: number;

    constructor(
        id: string,
        title: string,
        author: string,
        year: number
    ){

        if(id.trim() === ""){
            throw new Error("ID cannot be empty");
        }

        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(): string {

        return `[Item] ${this.title}`;
    }
}


class Book extends LibraryItem {

    pages: number;

    constructor(
        id: string,
        title: string,
        author: string,
        year: number,
        pages: number
    ){

        super(id, title, author, year);

        if(pages <= 0){
            throw new Error("Pages must be positive");
        }

        this.pages = pages;
    }

    getSummary(): string {

        return `[Book] ${this.title} (${this.year}) - ${this.pages} pages`;
    }

    toFileLine(): string {

        return `BOOK|${this.id}|${this.title}|${this.author}|${this.year}|${this.pages}`;
    }
}


class DVD extends LibraryItem {

    duration: number;

    constructor(
        id: string,
        title: string,
        author: string,
        year: number,
        duration: number
    ){

        super(id, title, author, year);

        if(duration <= 0){
            throw new Error("Duration must be positive");
        }

        this.duration = duration;
    }

    getSummary(): string {

        return `[DVD] ${this.title} (${this.year}) - ${this.duration} min`;
    }

    toFileLine(): string {

        return `DVD|${this.id}|${this.title}|${this.author}|${this.year}|${this.duration}`;
    }
}


class Library {

    items: LibraryItem[];

    constructor(){

        this.items = [];
    }

    addItem(item: LibraryItem): void {

        this.items.push(item);
    }

    getAll(): LibraryItem[] {

        return this.items;
    }

    searchByTitle(text: string): LibraryItem[] {

        return this.items.filter(
            item => item.title.toLowerCase().includes(text.toLowerCase())
        );
    }

    toText(): string {

        return this.items
            .map((item: any) => item.toFileLine())
            .join("\n");
    }

    loadFromText(text: string): string[] {

        const lines = text.split("\n");

        const errors: string[] = [];

        for(let line of lines){

            try {

                const parts = line.split("|");

                if(parts[0] === "BOOK"){

                    this.addItem(
                        new Book(
                            parts[1],
                            parts[2],
                            parts[3],
                            Number(parts[4]),
                            Number(parts[5])
                        )
                    );
                }

                else if(parts[0] === "DVD"){

                    this.addItem(
                        new DVD(
                            parts[1],
                            parts[2],
                            parts[3],
                            Number(parts[4]),
                            Number(parts[5])
                        )
                    );
                }

            } catch(e: any){

                errors.push("Error in line: " + line);
            }
        }

        return errors;
    }
}


export {
    LibraryItem,
    Book,
    DVD,
    Library
};