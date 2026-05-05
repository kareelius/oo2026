var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ------------------ BAASKLASS ------------------
// See on "parent class" (kõik teised pärivad sellest)
var LibraryItem = /** @class */ (function () {
    function LibraryItem(id, title, author, year) {
        // kontroll: ID ei tohi olla tühi
        if (id.trim() === "")
            throw new Error("ID cannot be empty");
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // getterid (lihtsalt tagastavad väärtuse)
    LibraryItem.prototype.getId = function () { return this.id; };
    LibraryItem.prototype.getTitle = function () { return this.title; };
    LibraryItem.prototype.getAuthor = function () { return this.author; };
    LibraryItem.prototype.getYear = function () { return this.year; };
    // vaikimisi summary
    LibraryItem.prototype.getSummary = function () {
        return "[Item] ".concat(this.title);
    };
    return LibraryItem;
}());
// ------------------ BOOK ------------------
// Book "pärib" LibraryItem-ist
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(id, title, author, year, pages, ISBN) {
        var _this = _super.call(this, id, title, author, year) || this; // kutsub parent constructori
        if (pages <= 0)
            throw new Error("Pages must be positive");
        _this.pages = pages;
        _this.ISBN = ISBN;
        return _this;
    }
    // override (kirjutab üle parent meetodi)
    Book.prototype.getSummary = function () {
        return "[Book] ".concat(this.title, " (").concat(this.year, ")");
    };
    // muudab objekti tekstiks (faili jaoks)
    Book.prototype.toFileLine = function () {
        return "BOOK|".concat(this.id, "|").concat(this.title, "|").concat(this.author, "|").concat(this.year, "|").concat(this.pages, "|").concat(this.ISBN);
    };
    return Book;
}(LibraryItem));
// ------------------ DVD ------------------
var DVD = /** @class */ (function (_super) {
    __extends(DVD, _super);
    function DVD(id, title, author, year, duration) {
        var _this = _super.call(this, id, title, author, year) || this;
        if (duration <= 0)
            throw new Error("Duration must be positive");
        _this.duration = duration;
        return _this;
    }
    DVD.prototype.getSummary = function () {
        return "[DVD] ".concat(this.title, " (").concat(this.year, ")");
    };
    DVD.prototype.toFileLine = function () {
        return "DVD|".concat(this.id, "|").concat(this.title, "|").concat(this.author, "|").concat(this.year, "|").concat(this.duration);
    };
    return DVD;
}(LibraryItem));
// ------------------ LIBRARY ------------------
// haldab kõiki objekte
var Library = /** @class */ (function () {
    function Library() {
        this.items = []; // tühi list
    }
    // lisa uus objekt
    Library.prototype.addItem = function (item) {
        this.items.push(item);
    };
    // tagasta kõik
    Library.prototype.getAll = function () {
        return this.items;
    };
    // tee kõik tekstiks (faili jaoks)
    Library.prototype.toText = function () {
        return this.items
            .map(function (item) { return item.toFileLine(); }) // iga objekt → string
            .join("\n"); // eraldame reavahetusega
    };
    // loe tekstist tagasi objektid
    Library.prototype.loadFromText = function (text) {
        var lines = text.split("\n");
        var errors = [];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            try {
                var parts = line.split("|");
                if (parts[0] === "BOOK") {
                    this.addItem(new Book(parts[1], parts[2], parts[3], Number(parts[4]), Number(parts[5]), parts[6]));
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
    };
    return Library;
}());
