function in_inside() {
  console.log("in_inside");
}

function inside() {
  console.log("inside");
  in_inside();
}

function outside(resolve) {
  setTimeout(() => {
    console.log("outside");
    resolve();
  }, 1000)
  inside();
}

const test = new Promise((resolve,reject) => {
  outside(resolve);
}).then(() => {
  console.log('promise');
})
