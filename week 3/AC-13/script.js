// TODO: What does 'this' refer to?
//this refers to the object window
console.log(this);

// TODO: What does 'this' refer to?
//object window again i think
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
//this will output 20, where "this.age" refers to the age attribute of child
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
//5750 for the same reason as the last example
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();

