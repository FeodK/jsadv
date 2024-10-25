class Library {
    #books;

    constructor(initialBooks = []) {
        this.#books = [];
        const uniqueBooks = new Set(initialBooks);
        if (uniqueBooks.size !== initialBooks.length) {
            throw new Error("Предоставленный список книг содержит дубликаты.");
        }
        this.#books = [...uniqueBooks];
    }

    get allBooks() {
        return this.#books.slice();
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error("Книга с таким названием уже существует.");
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error("Книга с таким названием не найдена.");
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

try {
    const myLibrary = new Library(['1984', 'Brave New World']);
    myLibrary.addBook('The Great Gatsby');
    console.log(myLibrary.allBooks);
    myLibrary.removeBook('1984');
    console.log(myLibrary.allBooks);
} catch (error) {
    console.error(error.message);
}
