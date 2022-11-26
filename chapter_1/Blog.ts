class Blog implements Identifiable<string> {
    id: string;
    authorId: string;

    constructor(id: string, authorId: string){
        this.id = id;
        this.authorId = authorId;
    }
}

class Author {}