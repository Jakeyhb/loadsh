// src/App.tsx (或其他组件文件)

import React from 'react';
import LodashPage from './page/LodashPage';
import DebounceThrottleExample from './page/DebounceThrottleExample';
// import { RadioButtonGroup } from './page/ceshi'
import Demo from './page/demo';
import QuotationComponent from './page/loose';
import { RadioButtonGroup } from './page/ceshi';
import LoadComponent from './page/loading';
import CustomSelect from './page/CustomSelect';
import CustomTable from './page/tab';
import { FormDisabledDemo } from './page/formlosf';
const App: React.FC = () => {
   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  // 使用封装的 debounce 方法
 const data = [
    { value: 'option1', label: 'Option 1', description: 'Additional information for Option 1' },
    { value: 'option2', label: 'Option 2', description: 'Additional information for Option 2' },
 ];
    const basicInfo = [
    { label: '姓名', value: '张三' },
    { label: '性别', value: '男' },
    { label: '年龄', value: '25岁' },
    { label: '电话', value: '1234567890' },
  ];

  const costItems = [
    { itemName: '运输费用', chargingUnit: '吨', priceUnit: '元/吨', price: 50, singleCostTotal: 150 },
    { itemName: '装卸费用', chargingUnit: '次', priceUnit: '元/次', price: 20, singleCostTotal: 40 },
  ];

  const totalCost = costItems.reduce((total, item) => total + item.singleCostTotal, 0);

  const otherInfo = '其他信息：这里是其他信息的详细内容。';


  return (
    <div>
      <LodashPage></LodashPage>
      <span>------------------</span>
      <DebounceThrottleExample></DebounceThrottleExample>



       <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <RadioButtonGroup options={data} />
    </div>
      </div>
      <div>
         <div>
      <QuotationComponent basicInfo={basicInfo} costItems={costItems} totalCost={totalCost} otherInfo={otherInfo} />
        </div>
        <div>
          <Demo></Demo>
        </div>
      </div>
 <h1>Your Application</h1>
      <LoadComponent />

      <CustomSelect />
      <CustomTable />
      <div>---------</div>
      
      <FormDisabledDemo></FormDisabledDemo>
      
    </div>


    
    
  );
};

export default App;
