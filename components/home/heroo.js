import About from './about';

export default function Heroo() {
  return (
    <>
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
          이름: 김호준
          <br class="hidden lg:inline-block" />
          <br />
          학교: 중부대학교
          <br class="hidden lg:inline-block" />
          <br />
          전공: 정보보호학전공
          <br class="hidden lg:inline-block" />
          <br />
          취미: 게임 , 노래듣기
          <br class="hidden lg:inline-block" />
          <br />
          MBTI : INTP
        </h1>

        <div class="flex justify-center"></div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <About />
      </div>
    </>
  );
}
