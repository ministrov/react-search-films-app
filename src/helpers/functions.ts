// export function askNumber(number: number) {
//     const askedNumber = prompt(`${Math.floor(number * 327 / 10)}`);

//     alert(askedNumber);
// }

// askNumber(12);

// export function returnValue(value: number) {
//     const prompt: any = prompt(value);

//     return prompt;
// }

// const value = returnValue(12);

export function removeMnemonic(string: string) {
    return string.split(' ').join(' ').replace(/&apos;/g, '').replace(/&quot;/g, '');
}

// function findMissingEl(arr1: number[], arr2: number[]) {
//     let index;
//     for (let i = 0; i < arr1.length; i++) {
//         index = arr2.indexOf(arr1[i]);

//         if (index > -1) {
//             arr2.splice(index, 1);
//         } else {
//             return arr1[i];
//         }
//     }
// }

// console.log(findMissingEl([2, 3, 4, 5], [2, 3, 5])); //?

// export function sumDigits(n: number): number {
//   // const str = n.toString().split("");
//   const str = String(n);

//   // console.log(Math.abs(+str[1]));

//   return n < 0 ? Math.abs(-parseInt(str[0]) + -parseInt(str[1])) : +str[0] + +str[1];
// }

// export function sumDigits(n: number): number {
//   let str = String(n);

//   return n > 0 ? +str[0] + +str[1] : Math.abs(Number(str[0])) + Math.abs(-Number(str[1]));
// }

// export function sumDigits(n: number): number {
//     return [...`${Math.abs(n)}`].reduce((acc, i) => acc + +i, 0);
//   }
  
//   const result = sumDigits(-32);
  
//   console.log(result);
//   console.log(typeof result);


// function factorial(n: number): number {
//   if (n < 0) {
//     return -1;
//   } else if (n == 0) {
//     return 1;
//   } else {
//     return (n * factorial(n - 1));
//   }
// }
  
// console.log(factorial(5));

// 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1;