/* eslint-disable @typescript-eslint/no-explicit-any */
import data from '../storage/data.json';

export type Children = {
    children: Children[];
    data: Record<string, string>;
};

/**
 *
 * @param children
 * @todo do not use any type
 */
const getChildrenArray = (children: unknown) => {
    if (!children) return null;
    const childrenArray: any[] = [];

    const records = Object.values(children)[0]?.records as any[]; // we don't know key name (for example "has_nemesis" and "has_secrete")
    if (!records) return null;

    records.forEach(({ data, children }: any) => {
        childrenArray.push({
            data,
            children: getChildrenArray(children),
        });
    });

    return childrenArray;
};

/**
 *
 * @returns formated json data in nested arrays
 */
export const getTransformedData = () => {
    const array: any[] = [];

    data.forEach(({ data, children }) => {
        array.push({
            data,
            children: getChildrenArray(children),
        });
    });

    return array as Children[];
};

export const findAndRemoveLastItemByIndexes = (
    arr: Children[],
    indexes: number[]
) => {
    const firsIndex = indexes[0];
    if (indexes.length <= 1) {
        arr.splice(firsIndex, 1); //there is only last item, remove it from array
        return arr;
    }

    indexes.splice(0, 1); //need to remove first index and pass only upcoming
    arr[firsIndex].children = findAndRemoveLastItemByIndexes(
        arr[firsIndex].children,
        indexes
    );

    return arr;
};
