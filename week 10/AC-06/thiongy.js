
class BlogPost  {
    constructor(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.comments = [];

    }
    primeMetaData () {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    }
}
BlogPost.prototype.addComment = function(comment) {
    this.comments.push(comment);
};

const lamo = new BlogPost("Name Namerson", "This Is a Blog", "Words words and.. you guessed it!! More words", "a while ago")


// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
lamo.addComment("Wtf is this?!? I am angry for some reason or another");
lamo.primeMetaData();
console.log(lamo.comments);