// please write a typescript project with unit test:
// 	for implement function with this interface
// 		merge (int[] collection_1, int[] collection_2): int []
// 	given
// 		collection_1, collection_2 already sorted from min(0) to max

// 	Please provide accessible repo of typescript project with unit test and provide how to set up dependency and execute code and unit test
// Note: Don't allow to use any sort function

export function merge(collection1: number[], collection2: number[]): number[] {
    let result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] < collection2[j]) {
            result.push(collection1[i]);
            i++;
        } else if (collection1[i] > collection2[j]) {
            result.push(collection2[j]);
            j++;
        } else {
            result.push(collection1[i]);
            i++;
            j++;
        }
    }

    while (i < collection1.length) {
        result.push(collection1[i]);
        i++;
    }

    while (j < collection2.length) {
        result.push(collection2[j]);
        j++;
    }

    return result;
}