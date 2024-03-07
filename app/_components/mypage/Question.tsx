import React from 'react';

export default function Question() {
  return (
    <div className="m-auto w-9/12 py-7">
      <div className="mx-5">
        <div className="text-blue-900 text-xl font-normal font-['ABeeZee'] mb-8">탭 컴포넌트</div>
        <p className="text-neutral-400 text-base font-normal font-['ABeeZee'] mb-7">
          ※ 회원님이 작성하신 문의를 최신순으로 확인할 수 있습니다.
          <br />※ 답변완료 상태의 글은 삭제할 수 없습니다.
        </p>
        <table className="border-collapse border border-solid w-full">
          <thead className="bg-gray-100 border-neutral-400">
            <tr>
              <th> </th>
              <th>등록일자</th>
              <th>제목</th>
              <th>답변여부</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-collapse border-neutral-400">
              <td>
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </td>
              <td>2024-02-17</td>
              <td>안녕하세요 상품에 대해서 문의드립니다.</td>
              <td>답변완료</td>
            </tr>
            <tr>
              <td></td>
              <td>2024-02-16</td>
              <td>안녕하세요 상품에 대해서 문의드립니다. 안녕</td>
              <td>접수</td>
            </tr>
            <tr>
              <td></td>
              <td>2024-02-15</td>
              <td>안녕하세요 상품에 대해서 문의드립니다. 하이</td>
              <td>접수</td>
            </tr>
            <tr>
              <td></td>
              <td>2024-02-11</td>
              <td>안녕하세요 상품에 대해서 문의드립니다. ㅋㅋ</td>
              <td>접수</td>
            </tr>
            <tr>
              <td></td>
              <td>2024-02-11</td>
              <td>안녕하세요 상품에 대해서 문의드립니다. ㄷㄷ</td>
              <td>답변완료</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
