function createTree (elements) {
    const map = new Map();
    for (const element of elements) {
        if (element.id == element.parent) {
            throw "Assertion failed: Recursive file location";
        }
        map.set(element.id, element);
    }

    return map;

}