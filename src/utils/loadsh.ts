

import _ from 'lodash';

// 防抖函数
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: _.DebounceSettings
) => {
  return _.debounce(func, wait, options);
};

// 节流函数
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: _.ThrottleSettings
) => {
  return _.throttle(func, wait, options);
};

// 安全获取嵌套对象的属性值
export const safeGet = <T>(object: any, path: string, defaultValue?: T) => {
  return _.get(object, path, defaultValue);
};

// 深度比较两个对象是否相等
export const deepEqual = (value: any, other: any) => {
  return _.isEqual(value, other);
};

// 判断对象是否为空
export const isEmpty = (value: any) => {
  return _.isEmpty(value);
};

// 从对象中挑选指定的属性
export const pick = (object: object, paths: string[]) => {
  return _.pick(object, paths);
};

// 从对象中排除指定的属性
export const omit = (object: object, paths: string[]) => {
  return _.omit(object, paths);
};
