import type * as TestFunction from "../app/merge"

const { merge } = jest.requireActual<typeof TestFunction>("../app/merge")

const Cases = [
    {
        id: 0,
        input: { collection1: [0, 3, 5], collection2: [2, 4, 6] },
        output: [0, 2, 3, 4, 5, 6]
    },
    {
        id: 1,
        input: { collection1: [1, 3, 5, 7], collection2: [2, 4, 6] },
        output: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        id: 2,
        input: { collection1: [2, 3, 5], collection2: [2, 4, 6] },
        output: [2, 3, 4, 5, 6]
    },
    {
        id: 3,
        input: { collection1: [], collection2: [] },
        output: []
    },
]

describe("Test merge function", () => {
    it.each(Cases)("success cases $id", ({ input, output }) => {
        const { collection1, collection2 } = input;
        expect(merge(collection1, collection2)).toEqual(output)
    });
});

