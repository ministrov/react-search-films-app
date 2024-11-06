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
export function loadData<T>(key: string): T | undefined {
    try {
        const jsonState = localStorage.getItem(key);

        if (!jsonState) {
            return undefined;
        }

        return JSON.parse(jsonState);
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

export function saveData<T>(state: T, key: string) {
    const stringState = JSON.stringify(state);
    localStorage.setItem(key, stringState);
}

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