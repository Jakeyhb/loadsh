import React, { useState } from 'react';
import { Input, Space, Card } from 'antd';
import _ from 'lodash';

const { Search } = Input;

const DebounceThrottleExample = () => {
  const [searchResult, setSearchResult] = useState('');
  const [scrollMessage, setScrollMessage] = useState('');

  // 防抖操作
  const debouncedSearch = _.debounce((query) => {
    // 模拟搜索操作，实际中可以发送网络请求
    setSearchResult(`Searching for: ${query}`);
  }, 500);

  // 节流操作
  const handleScroll = () => {
    // 模拟处理滚动事件，实际中可能涉及到复杂的计算或动画
    setScrollMessage('Scrolling...');
  };

  const throttledScroll = _.throttle(handleScroll, 200);

  return (
    <div style={{ padding: '20px' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card title="防抖和节流示例">
          <Search
            placeholder="Input search text"
            onSearch={(value) => debouncedSearch(value)}
            style={{ width: 200 }}
          />
          <p>{searchResult}</p>
        </Card>

        <Card title="滚动节流示例" style={{ marginTop: '20px' }}>
          <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ddd' }} onScroll={throttledScroll}>
            <p>{scrollMessage}</p>
          </div>
        </Card>
      </Space>
    </div>
  );
};

export default DebounceThrottleExample;
