//lets create a async function
function y() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("anil");
        }, 3000);

    });

}
async function x() {
    //async function always return a promise
    let z = await y();  //await always wait for promise
    return z;
}
let a = x();
console.log(a);
//display the result using promise chaining
//po.then.then.catch.finally
a.then(function (r) {
    console.log(r);

}).catch(function (e) {
    console.log(e);
}).finally(function () {
    console.log("how are you ?");
});
console.log("i m fine thanks");