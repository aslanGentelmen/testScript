// let user = {
//     name: "Джон",
//     age: 30,
//     // sayHi() {
//     //     console.log("Привет!" + this.name + "," + "тебе "+ this.age + "лет.");
//     //   }
//      sayHi() {
//         console.log("Привет!" + user.name + "," + "тебе "+ user.age + "лет.");
//       }
//   };
  
  
  
//   user.sayHi()
//Object constructor thiscreation
// function User(name, b) {
//     this.name = name;
//     this.isAdmin = b;
//   }
  
//   let user = new User("Вася", "Hi");
  
//   console.log(user.name + " " + user.isAdmin); // Вася
//   console.log(); // false
  
// function SmallUser() {

//     this.name = "Вася";
  
//     return {name : "HHHJK<я"}; // <-- возвращает this
//   }
  
//   console.log( new SmallUser().name );  // Вася 


function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "Меня зовут: " + this.name );
    };
  }
  
  let vasya = new User("Вася");
  let ytutyu = new User("Вsdsdsdася");
  
  console.log(ytutyu.name)