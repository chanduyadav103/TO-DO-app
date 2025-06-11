// function walkedkilometers(chandu, shashank) {
//     return chandu * shashank;
// }
// const result = walkedkilometers(11, 15)
// console.log(result)
// console.log("-------------------------------")


// function proposal(name) {
//     return 'hey' + name + '\n will you be mine💙'
// }
// let v = proposal('somesh');

// console.log(v)
// console.log("-------------------------------")


// // function reverse(string) {
// //     if (string == "") {
// //         return "";
// //     } else {
// //         return reverse(string.insidestring()) + string[0];
// //     }
// // }
// console.log(reverse("fashion"))

// let name = "german sheperd"
// function append() {
//     return ('this dog is' + name)
// }
// console.log(append())





// const x = 10, y = 20, z = 30;

// function maximum(x, y, z) {
//     if (x > y && x > z) {
//         return x;
//     } else if (y > z) {
//         return y;
//     } else {
//         return z;
//     }
// }

// console.log(maximum())

let chemical = 'carbon dioxide'
let index = chemical.length - 1;

function reverse(chemical, index) {
    if (index < 0) {
        return "";
    } else {
        return chemical[index] + reverse(chemical, index - 1)
    }
}
console.log(reverse(chemical, index))








