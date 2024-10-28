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
    const words = string.split(' ');

    return words.join(' ').replace(/&apos;/g, '');
}