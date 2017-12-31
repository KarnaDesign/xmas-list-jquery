/**
 * Check and convert name into correct form.
 * @param {string} name A name which you want to have suffixed
 */
export function suffixName(name) {
    let suffixedName = name;
    const lastCharacter = name[name.length - 1];
    if (lastCharacter !== "s") {
        suffixedName += "s";
    }
    return suffixedName;
}