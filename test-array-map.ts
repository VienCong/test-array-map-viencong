// const arrayMap = <T, U>(array: T[], callback: (item: T, index: number, arr: ReadonlyArray<T>[]) => U): U[] => {
//     let i = -1;
//     const len = array.length;
//     const resArray = [];
//     while (++i < len) {
//         resArray.push(callback(array[i], i, array as any));
//     }
//     return resArray;
// }

// export = arrayMap;
export = <T, U>(array: T[], callback: (item: T, index: number, arr: ReadonlyArray<T>[]) => U): U[] => {
    let i = -1;
    const len = array.length;
    const resArray = [];
    while (++i < len) {
        resArray.push(callback(array[i], i, array as any));
    }
    return resArray;
}