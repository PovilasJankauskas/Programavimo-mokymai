const maistoProduktai = ["bulves", "pienas", "duona", "dešra", "kefyras"];

function duokMasyva() {
  return ["bulves", "pienas", "duona", "dešra", "kefyras"];
}

async function fakeAPI(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeout > 2000) {
        reject("per ilgas atsakymo laukimo laikas");
      }
      resolve("data data data");
    }, timeout); 
  });
}
 
// const atmetantiFunckija = async () => {
//    return Promise.reject(new error('bad request'))
// };

module.exports = [maistoProduktai, duokMasyva, fakeAPI];
