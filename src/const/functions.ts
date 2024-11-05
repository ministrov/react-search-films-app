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