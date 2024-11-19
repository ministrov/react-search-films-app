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

/**
 * Replaces all spaces in a string with a single space, and removes all
 * HTML XML character entity references for ' and ".
 * @param {string} string
 * @returns {string}
 */
export function removeMnemonic(string: string) {
    return string.split(' ').join(' ').replace(/&apos;/g, '').replace(/&quot;/g, '');
}

export function parseDuration(duration: string): number {
    if (!duration) {
        throw new Error('Duration is empty');
    }

    const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?$/;
    const matches = duration.match(regex);
    if (!matches) {
        throw new Error('Invalid duration format');
    }

    const hours = matches[1] ? parseInt(matches[1], 10) : 0;
    const minutes = matches[2] ? parseInt(matches[2], 10) : 0;

    return hours * 60 + minutes;
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

/**
 * Returns a new array with unique elements from the given array.
 * @param {any[]} arr The array to get unique elements from.
 * @returns {any[]} A new array with only unique elements from the given array.
 */
export function getUniqueArray(arr: any[]): any[] {
    const uniqueArr: any[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}