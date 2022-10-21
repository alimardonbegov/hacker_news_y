export const handleText = (text) => {
    const solidus = "&#x2F;";
    const apostrophe = "&#x27;";

    if (text && text.includes(solidus)) {
        text = text.replaceAll(solidus, "/");
    }
    if (text && text.includes(apostrophe)) {
        text = text.replaceAll(apostrophe, "'");
    }
    if (text == undefined) {
        text = 123;
    }
    return text;
};
