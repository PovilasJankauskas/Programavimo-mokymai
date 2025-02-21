console.log('pirmas pavyzdys');
console.log(1);
console.log(2);
setTimeout(() => console.log(3), 1000);
console.log(4);
console.log(5);
console.log("antras pavyzdys");

// uzduotis duodama darbo pokalbiuose

for (let i=1; i<10;i++) {
    setTimeout(()=>{
        console.log(i);
    }, 1000);
};

request.open(
    'GET',
    'users.json'
);
request.send();



const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve('some data');
        reject ('some error');

    })
};

getSomething().then