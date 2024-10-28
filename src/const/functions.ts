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
export function deleteMnemonic(string: string) {
    let example = '&apos;';
    let newString = string.split(' ').filter((c) => c.includes(example)).join('');

    return newString;
}