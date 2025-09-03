const eraseTemplateCode = (text) => {
    return text
        .replace(/(\r\n|\n)?\s*(\/\/\s*)?freopen\(.*/g, "")
        .replace(/(\r\n|\n)?\s*#define PATH.*/g, "")
        .replace(/(\r\n|\n)?\s*#define L_PATH.*/g, "");
};

export default eraseTemplateCode;
