async function asyncMap(lists, callback) {
    const results = [];
    for await (let item of lists) {
        const itemResult = await callback(item);
        results.push(itemResult);
    }
    return results;
}

module.export = asyncMap;
