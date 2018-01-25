export async function asyncMap(lists: Array<any>, callback: Function) {
    const results = [];
    for await (let item of lists) {
        const itemResult = await callback(item);
        results.push(itemResult);
    }
    return results;
}
