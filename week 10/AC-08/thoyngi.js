// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
    constructor(authorName, createdOn) {
        this.authorName = authorName;
        this.createdOn = createdOn;
        this.text = undefined;
    }
    printSelf() {
        console.log(this.text);
    }
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
    constructor(authorName, title, text, createdOn) {
      super(authorName, createdOn);
      this.title = title;
      this.text = text;
      this.comments = [];
    }
  
    addComment(comment) {
      this.comments.push(comment);
    }
}
  
class Comment extends ForumItem{
    constructor(authorName, text, createdOn) {
    super(authorName, createdOn);
    this.text = text;
    }
}
  
// TODO: Create a new object using the Comment class constructor.
const commie = new Comment("Noah Ivyl Sehman", "you don't know that of which you speak", "a while ago");
// TODO: Create a new object using the BlogPost class constructor.
const pooster = new BlogPost("Somebody Else", "Bad Opinion", "pineapple on pizza is good", "before the comment")
// TODO: Log both newly created BlogPost and Comment to the console.
commie.printSelf();
pooster.printSelf();