// TODO: Add a comment describing what kind of function this is
function BlogPost(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
    this.printMetaData = function () {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    };
}
//it's a useless function. why would you write this?

  
// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
BlogPost.prototype.addComment = function(comment) {
    this.comments.push(comment);
};
//because object.prototype is at the top of the inheritance chain


const post = new BlogPost(
    'John Doe',
    'My Second Post',
    'Cats are super cute!',
    '12/16/2021'
);
post.addComment('Nice post, I like it!');


// TODO: Add a comment describing what you expect to see printed in the console
console.log(post.comments);
//an array with that one comment in it