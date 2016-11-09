function addPromise(a,b) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            if(typeof a==='number'&&typeof b ==='number'){
                resolve(a+b);
            }
            else {
                reject('this is not number')
            }
        },2000);
    });
}
addPromise(2,'hi ehsan').then(function (temp) {
    console.log('it is number',temp)

},function (err) {
    console.log('not number',err)
});
