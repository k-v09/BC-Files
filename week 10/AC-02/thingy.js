// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
class BlogPost  {
    constructor(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
    }
    primeMetaData () {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    }
}

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor

// TODO: Call the 'printMetaData()' method on the new object
const lame = new BlogPost("Person Name", "A Post", "words words words", "A bit ago");
lame.primeMetaData();