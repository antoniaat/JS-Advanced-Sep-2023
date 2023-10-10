class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error("Not enough space in the collection.");
        }

        const newBook = {
            bookName,
            bookAuthor,
            payed: false,
        }

        this.books.push(newBook);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        const index = this.books.findIndex(book => book.bookName === bookName);

        if (index === -1) {
            throw new Error(`${bookName} is not in the collection.`)
        }

        if (this.books[index].payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        this.books[index].payed = true;

        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        const index = this.books.findIndex(book => book.bookName === bookName);

        if (index === -1) {
            throw new Error("The book, you're looking for, is not found.")
        }

        if (this.books[index].payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(index, 1);

        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let result = ''
        if (!bookAuthor) {
            result += `The book collection has ${this.capacity - this.books.length} empty spots left.`
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            this.books.forEach(book => {
                const hasPaid = book.payed ? 'Has Paid' : 'Not Paid';
                result += `\n${book.bookName} == ${book.bookAuthor} - ${hasPaid}.`
            })
            return result;
        }

        const filteredArr = this.books.filter(book => book.bookAuthor === bookAuthor);

        if (filteredArr.length === 0) {
            throw new Error(`${bookAuthor} is not in the collection.`)
        }

        filteredArr.forEach(book => {
            const hasPaid = book.payed ? 'Has Paid' : 'Not Paid';
            result += `${book.bookName} == ${book.bookAuthor} - ${hasPaid}.`
        })

        return result;
    }
}

