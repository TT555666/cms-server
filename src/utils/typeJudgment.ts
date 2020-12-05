/**
 *
 * @param value 传入的类型
 * @returns 返回是不是对象类型，是返回true
 */
export const isObject = (value: any): boolean => {
  return value !== null && typeof value === 'object';
};
