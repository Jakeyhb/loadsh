# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

### `debounce` 方法

#### 源码解读：

```TypeScript
import _ from 'lodash';

/**
 * 防抖函数，用于在连续触发的事件中，只执行最后一次触发的事件。
 * @param func 要防抖的函数。
 * @param wait 等待时间，即触发后等待 `wait` 毫秒后执行函数。
 * @param options 配置项，传递给 _.debounce 函数的选项。
 * @returns 返回一个新的函数，该函数是被防抖处理过的原函数。
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: _.DebounceSettings
) => {
  return _.debounce(func, wait, options);
};
```

#### 亮点和实际应用：

- **亮点：** 防抖函数适用于需要限制频繁触发的场景，例如输入框输入事件，减少不必要的请求或处理频率。

- **实际应用：** 在处理用户输入时，使用 `debounce` 可以确保只在用户停止输入一段时间后才执行搜索请求，提升性能和用户体验。

### `throttle` 方法

#### 源码解读：

```TypeScript
tsxCopy code
// src/lodashUtils.ts

import _ from 'lodash';

/**
 * 节流函数，用于在一定时间内只执行一次事件。
 * @param func 要节流的函数。
 * @param wait 等待时间，即每隔 `wait` 毫秒执行一次函数。
 * @param options 配置项，传递给 _.throttle 函数的选项。
 * @returns 返回一个新的函数，该函数是被节流处理过的原函数。
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: _.ThrottleSettings
) => {
  return _.throttle(func, wait, options);
};
```

#### 亮点和实际应用：

- **亮点：** 节流函数适用于需要控制事件执行频率的场景，确保在一定时间内只执行一次事件。

- **实际应用：** 在处理滚动事件时，使用 `throttle` 可以减少事件处理的频率，提升性能，并确保适当的响应。

### `safeGet` 方法

#### 源码解读：

```TypeScript
tsxCopy code
// src/lodashUtils.ts

import _ from 'lodash';

/**
 * 安全地获取嵌套对象的属性值，避免在属性不存在时引发异常。
 * @param object 要获取属性值的对象。
 * @param path 属性路径，可以是以点分隔的字符串，或者数组。
 * @param defaultValue 如果属性不存在时的默认值。
 * @returns 返回属性值，如果属性不存在则返回 `defaultValue`。
 */
export const safeGet = <T>(object: any, path: string, defaultValue?: T) => {
  return _.get(object, path, defaultValue);
};
```

#### 亮点和实际应用：

- **亮点：** `safeGet` 提供了一种安全地获取嵌套属性值的方法，避免了在属性不存在时引发异常。

- **实际应用：** 在处理嵌套对象结构时，使用 `safeGet` 可以安全地获取属性值，防止因为某个属性不存在而导致代码崩溃。

### `deepEqual` 方法

#### 源码解读：

```TypeScript
tsxCopy code
// src/lodashUtils.ts

import _ from 'lodash';

/**
 * 深度比较两个对象是否相等。
 * @param value 第一个要比较的对象。
 * @param other 第二个要比较的对象。
 * @returns 返回布尔值，表示两个对象是否深度相等。
 */
export const deepEqual = (value: any, other: any) => {
  return _.isEqual(value, other);
};
```

#### 亮点和实际应用：

- **亮点：** `deepEqual` 提供了一种深度比较两个对象是否相等的方法，避免了手动逐层比较的繁琐工作。

- **实际应用：** 在 React 中，使用 `deepEqual` 可以帮助判断对象或状态是否发生变化，从而避免不必要的渲染。

### `isEmpty` 方法

#### 源码解读：

```TypeScript
tsxCopy code
// src/lodashUtils.ts

import _ from 'lodash';

/**
 * 判断一个对象是否为空。
 * @param value 要检查的对象。
 * @returns 返回布尔值，表示对象是否为空。
 */
export const isEmpty = (value: any) => {
  return _.isEmpty(value);
};
```

#### 亮点和实际应用：

- **亮点：** `isEmpty` 提供了一种简便的方式来检查对象是否为空。

- **实际应用：** 在处理数据前，使用 `isEmpty` 可以判断对象是否包含任何键值对，从而采取相应的逻辑。

### `pick` 方法

#### 源码解读：

```TypeScript
tsxCopy code
// src/lodashUtils.ts

import _ from 'lodash';

/**
 * 从对象中挑选指定的属性，创建一个新的对象。
 * @param object 要挑选属性的对象。
 * @param paths 要挑选的属性路径数组。
 * @returns 返回一个新的对象，包含挑选的属性。
 */
export const pick = (object: object, paths: string[]) => {
  return _.pick(object, paths);
};
```

#### 亮点和实际应用：

- **亮点：** `pick` 提供了一种方便的方法来从对象中选择指定的属性。

- **实际应用：** 在需要从一个对象中
