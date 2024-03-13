import ImageSlide from './_components/ImageSlide';
import { PageFontClassNames } from 'public/fonts/fonts';

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen bg-[url('/images/background.png')] bg-cover text-white">
        <div className="text-center sm:text-xl text-white lg:text-[40px] font-bold pt-32">
          한국의 전통을 담은 전통주 추천
        </div>
        <div className="lg:hidden text-center text-base text-white font-normal pt-3">
          전통의 향과 역사가 만나는 순간, <br />
          우리의 역사와 문화가 피어나는 한 모금,
          <br />
          전통주의 특별한 순간을 만들어보세요.
        </div>
        <div className="max-[1023px]:hidden text-center text-white text-xl font-normal pt-10">
          전통의 향과 역사가 만나는 순간, 우리의 역사와 문화가 피어나는 한 모금,
          <br />
          전통주의 특별한 순간을 만들어보세요.
        </div>
        <ImageSlide />
      </div>
      <div className="hidden md:flex flex-col">
        <p className="flex justify-center text-4xl my-24">전통주 알아보기</p>
        <div className="flex flex-row justify-center">
          <img src="/images/mainImage.png" className="flex w-[500px] h-[500px]" />
          <div className="flex flex-col">
            <p className={`mt-10 text-neutral-400 text-4xl font-normal ${PageFontClassNames}`}>
              오래 전부터 우리와
            </p>
            <p className={`text-4xl ml-4 mb-6 ${PageFontClassNames}`}>함께 한 우리 술의 역사</p>
            <p className="ml-5 text-xl">
              ‘우리의 술문화는 역사가 매우 깊습니다’ <br />
              삼국시대 이전부터 맑은 곡주를 빚어 조상께 바치고 <br />
              춤과 노래와 술마시기를 즐겼다고 합니다. <br />
              <br />
              고려시대에는 송나라와 원나라의 양조법이 도입되었고, <br />
              전래의 주류양조법이 발전되어 주류제품이 다양해졌습니다. <br />
              중국으로부터 증류주가 유입된 것도 이 때였고, <br />
              <br />
              황금주, 백자주, 송주 등 술의 재료와 특성을 나타내는 <br />
              술이 나타나기 시작한 것도 이 시기였습니다.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center my-36">
          <div className="flex flex-col text-end">
            <p className={`text-4xl text-neutral-400 mr-12 mt-10 ${PageFontClassNames}`}>
              한국의 정서와 문화가
            </p>
            <p className={`text-4xl mr-4 mb-6 ${PageFontClassNames}`}>담긴 우리 술</p>
            <p className="text-xl mr-5">
              한국 전통술의 특성과 맛을 즐겨보세요 <br />
              지금, 우리는 풍부한 다채로움을 갖춘 한국 전통술을 즐길 수 있습니다. <br />
              고소하고 깊은 맛의 막걸리, 부드럽고 감미로운 소주, 거친 맛의 동동주 등 <br />
              각기 다른 특성을 가진 술들이 여러분을 기다리고 있습니다. <br />
              <br />
              우리의 전통술은 오랜 역사를 통해 깊은 문화를 형성하고 있습니다. <br />
              다양한 종류의 술들을 맛보며, 그 특유의 향과 맛에 푹 빠져보세요. <br />
              한국의 아름다운 정서와 깊은 문화가 반영된 우리 술을 만나보세요. <br />
              전통을 이어받은 술의 향과 맛은 마치 우리의 역사와 삶이 담긴 <br />
              수천 년의 여정을 속삭이는 듯합니다.
            </p>
          </div>
          <img src="/images/mainImage2.png" className="flex w-[500px] h-[500px]" />
        </div>
      </div>
    </main>
  );
}
