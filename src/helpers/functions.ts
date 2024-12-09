/**
 * Replaces all spaces in a string with a single space, and removes all
 * HTML XML character entity references for ' and ".
 * @param {string} string
 * @returns {string}
*/

export function removeMnemonic(string: string): string {
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