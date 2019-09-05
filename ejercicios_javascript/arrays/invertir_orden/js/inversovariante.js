const nums = [1, '2', 3, '4', 5];

const l = nums.length;

let num2 = [];





for (let i = l - 1; i >= 0 ; i--) {

    const last = nums[i];

    let añadir = num2.push(last);   // sólo hay uso de push()

}


console.log(num2); // este recoge a nums invertido
console.log(nums); // este queda igual que estaba