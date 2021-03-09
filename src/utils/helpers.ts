/**
 *
 * @param currPage The current page
 * @param currWishes The number of wishes inside that page
 */
export const totalWishes = (currPage: number, currWishes: number): number => (currPage * 6) - 6 + currWishes - 1

/**
 *
 * @param val A string value that only contains numbers
 */
export const isNumeric = (val: string): boolean => !/[\D]+/.test(val)

