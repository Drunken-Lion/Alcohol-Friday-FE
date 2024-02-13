import ImageSlide from './_components/ImageSlide';

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen bg-[url('/images/background.png')] bg-cover text-white">
        <div className="text-center sm:text-xl text-white lg:text-[40px] font-bold font-['Pretendard'] pt-32">
          한국의 전통을 담은 전통주 추천
        </div>
        <div className="lg:hidden text-center text-base text-white font-normal font-['Pretendard'] pt-3">
          전통의 향과 역사가 만나는 순간, <br />
          우리의 역사와 문화가 피어나는 한 모금,
          <br />
          전통주의 특별한 순간을 만들어보세요.
        </div>
        <div className="max-[1023px]:hidden text-center text-white text-xl font-normal font-['Pretendard'] pt-10">
          전통의 향과 역사가 만나는 순간, 우리의 역사와 문화가 피어나는 한 모금,
          <br />
          전통주의 특별한 순간을 만들어보세요.
        </div>
        <ImageSlide />
      </div>
    </main>
  );
}
