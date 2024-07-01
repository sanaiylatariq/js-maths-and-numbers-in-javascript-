//2 types of memory stack (primitive type) and heap(non-primitive type memory)



let myname = "hitesh"
let coding = myname
coding = "chaiaurcode"
console.log(coding);
console.log(myname);
let myname = "sanaiyla"
let sunny = myname
 sunny = "kato"
console.log(sunny);
console.log(myname);
let hername = "ayesha"
let asalnam = hername
asalnam = "ashee"
console.log(asalnam);
console.log( hername);
let a = 20
let b = a
console.log(b);
console.log(a);
let d = 20
let f = d = 4
f = 20
console.log(f);
console.log(typeof f);
console.log(d);
console.log(typeof d);


// examples of heap memory//
let userone = {
    email: "sunny@google.com", 
    id: "2345@sunny"
}
let  usertwo = userone
usertwo.email = "hitesh@google.com"
console.log(usertwo.email);

let myfunct = function(){
    age: "290"
    id: "6346"
}
let yourfunct = myfunct
yourfunct.age = 30
yourfunct.id = "540"

console.log(yourfunct.age);
console.log(yourfunct.id);
console.log(myfunct.age);
console.log(myfunct.id);
console.log(typeof myfunct.id);
console.log(typeof myfunct.age);