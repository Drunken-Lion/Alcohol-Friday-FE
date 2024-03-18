import React from 'react';
import OrderItem from '../OrderItem';
import TabButton from '../TabButton';

export default function ReviewWriteList() {
  return (
    <div className="flex flex-col w-9/12 m-auto">
      <div className="flex gap-6 ml-5">
        <TabButton onClick={undefined} buttonName="리뷰작성" />
        <TabButton onClick={undefined} buttonName="작성한 리뷰" />
      </div>
      <div className="flex gap-6">
        <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-full">
          <OrderItem
            storeName="곰세마리 양조장"
            title="어린꿀술"
            subTitle="[500ml] 어린꿀술"
            price="13,500"
            quantity={1}
            image="../images/alcohol.png"
            isValue={true}
          />
        </div>
        <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-full">
          <OrderItem
            storeName="곰세마리 양조장"
            title="어린꿀술"
            subTitle="[500ml] 어린꿀술"
            price="13,500"
            quantity={1}
            image="../images/alcohol.png"
            isValue={true}
          />
        </div>
      </div>
    </div>
  );
}
