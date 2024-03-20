'use client';

import React, { useRef, useState } from 'react';
import OrderItem from './mypage/OrderItem';
import ReviewRating from './mypage/ReviewRating';
import Textarea from './Textarea';
import Button from './Button';

import Close from '/public/images/close.svg';
import Camera from '/public/images/solar_camera-linear.svg';
import ImageThumbnail from './ImageThumbnail';

interface ModalProps {
  onClose?: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [clicked, setClicked] = useState<boolean[]>([false, false, false, false, false]);
  const handleStarClick = (index: number): void => {
    let clickStates: boolean[] = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const [message, setMessage] = useState('');
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const [files, setFiles] = useState<File[]>([]);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const handleClickImageUpload = (): void => {
    imageRef.current?.click();
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let selectedFiles = [] as File[];
    const element = e.target;
    selectedFiles = element.files ? Array.from(element.files) : [];

    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const deleteFile = (fileName: string) => {
    console.log(fileName);
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20">
      <div className="flex flex-col bg-white rounded-2xl w-8/12">
        <div className="flex flex-end border-b p-7">
          <p className="m-auto text-xl font-bold">리뷰작성</p>
          <div onClick={onClose} className="cursor-grabbing">
            <Close />
          </div>
        </div>
        <div className="flex flex-col px-20 pt-16 pb-10">
          <OrderItem
            image="/images/alcohol.png"
            title="어린꿀술"
            storeName=""
            subTitle="[500ml] 어린꿀술"
            price=""
            quantity={0}
            isReview={false}
          />
          <div className="flex flex-col gap-5 pt-10">
            <p className="text-zinc-800 text-lg font-normal text-start">
              구매하신 상품은 만족하셨나요?
            </p>
            <ReviewRating clicked={clicked} onStarClick={handleStarClick} />
          </div>
          <div className="flex flex-col gap-5 py-9">
            <p className="text-zinc-800 text-lg font-normal text-start">
              상품에 대한 리뷰를 작성해주세요.
            </p>
            <Textarea
              label=""
              id="message"
              rows={2}
              onChange={handleTextChange}
              value={message}
              className="p-3"
              placeholder="구매하신 상품에 대한 자세한 후기를 작성해주세요!"
            />
          </div>
          <div className="flex flex-row gap-4">
            <div
              className="flex flex-col justify-center items-center w-[120px] h-[120px] bg-white rounded-[10px] border border-neutral-400 cursor-grabbing"
              onClick={handleClickImageUpload}
            >
              <Camera />
              <span className="text-neutral-400 text-base font-normal font-['ABeeZee']">
                사진 추가하기
              </span>
            </div>
            <input
              type="file"
              name="file"
              multiple
              accept="image/*"
              style={{ display: 'none' }}
              ref={imageRef}
              onChange={handleChangeImage}
            />
            <ImageThumbnail files={files} deleteFileHandler={deleteFile} />
          </div>
          <div className="flex justify-center pt-4">
            <Button
              className="w-1/3 px-14 py-2.5 bg-gray-100 rounded-lg justify-center items-center gap-2.5 inline-flex text-center text-zinc-800 text-base font-normal"
              buttonName="작성 완료"
              type={undefined}
              onClick={undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
