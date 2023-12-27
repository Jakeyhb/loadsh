// src/LodashPage.tsx

import React, { useState } from 'react';
import { Input, Button, Space, Card } from 'antd';
import { debounce, throttle, safeGet, deepEqual, isEmpty, pick, omit } from '../utils/lodashUtils';

const { TextArea } = Input;

const LodashPage: React.FC = () => {
  const [debouncedInput, setDebouncedInput] = useState<string>('');
  const [throttledScroll, setThrottledScroll] = useState<number>(0);
  const [userData, setUserData] = useState<any>({ name: 'John', age: 30 });
  const [obj1, setObj1] = useState<any>({ a: 1, b: { c: 2 } });
  const [obj2, setObj2] = useState<any>({ a: 1, b: { c: 2 } });
  const [originalObject, setOriginalObject] = useState<any>({ a: 1, b: 2, c: 3 });

  const handleDebouncedInputChange = debounce((value: string) => {
    setDebouncedInput(value);
  }, 300);




  const handleThrottledScroll = throttle(() => {
    setThrottledScroll((prev) => prev + 1);
  }, 1000);

  const handleSafeGet = () => {
    const userName = safeGet(userData, 'name', 'Unknown');
    alert(`User Name: ${userName}`);
  };

  const handleDeepEqual = () => {
    const areObjectsEqual = deepEqual(obj1, obj2);
    alert(`Are Objects Equal: ${areObjectsEqual}`);
  };

  const handleIsEmpty = () => {
    const isDataEmpty = isEmpty(userData);
    alert(`Is User Data Empty: ${isDataEmpty}`);
  };

  const handlePickAndOmit = () => {
    const pickedObject = pick(originalObject, ['a', 'b']);
    const omittedObject = omit(originalObject, ['a', 'b']);
    alert(`Picked Object: ${JSON.stringify(pickedObject)}\nOmitted Object: ${JSON.stringify(omittedObject)}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card title="防抖例子">
        <Space>
          <Input placeholder="Type something..." onChange={(e) => handleDebouncedInputChange(e.target.value)} />
          <Button onClick={() => alert(`Debounced Input: ${debouncedInput}`)}>Show Debounced Input</Button>
        </Space>
      </Card>

      <Card title="节流例子">
        <Space>
          <div style={{ height: '100px', overflow: 'auto', border: '1px solid #ddd' }} onScroll={handleThrottledScroll}>
            Scroll me!
          </div>
          <Button onClick={() => alert(`Throttled Scroll Count: ${throttledScroll}`)}>Show Throttled Scroll Count</Button>
        </Space>
      </Card>

      <Card title="获取嵌套对象">
        <Button onClick={handleSafeGet}>Get User Name</Button>
      </Card>

      <Card title="深度比较两个对象是否相等">
        <Button onClick={handleDeepEqual}>深度比较两个对象是否相等</Button>
      </Card>

      <Card title=" 判断对象是否为空">
        <Button onClick={handleIsEmpty}>判断对象是否为空</Button>
      </Card>

      <Card title="从对象中挑选指定的属性 剔除指定属性">
        <Button onClick={handlePickAndOmit}>Pick and Omit</Button>
      </Card>
    </div>
  );
};

export default LodashPage;
