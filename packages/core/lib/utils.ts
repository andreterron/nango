/*
 * Copyright (c) 2022 Nango, all rights reserved.
 */

// A helper function to generate IDs that are unique but still humanly readable
export function makeId(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// A helper function to interpolate a string.
// Example:
// interpolateString('Hello ${name} of ${age} years", {name: 'Tester', age: 234})
// Copied from https://stackoverflow.com/a/1408373/250880
export function interpolateString(str: string, replacers: Record<string, any>) {
    return str.replace(/\${([^{}]*)}/g, (a, b) => {
        var r = replacers[b];
        return typeof r === 'string' || typeof r === 'number' ? (r as string) : a; // Typecast needed to make TypeScript happy
    });
}
