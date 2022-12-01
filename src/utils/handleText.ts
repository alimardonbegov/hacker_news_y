export const handleText = (text: any) => {
    // any , bcs .replace .join doesn't work on string
    const solidus = "&#x2F;";
    const apostrophe = "&#x27;";

    if (text && text.includes(solidus)) {
        text = text.replaceAll(solidus, "/");
    }
    if (text && text.includes(apostrophe)) {
        text = text.replaceAll(apostrophe, "'");
    }
    if (text == undefined) {
        return text;
    }
    return text;
};
