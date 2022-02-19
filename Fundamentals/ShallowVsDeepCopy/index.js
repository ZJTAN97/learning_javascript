const deepClone = (obj) => {

    if(typeof obj !== "object" || obj === null) return obj;

    const newObject = Array.isArray(obj) ? [] : {};

    for(let key in obj) {
        const value = obj[key];
        newObject[key] = deepClone(value);
    }

    return newObject;

}