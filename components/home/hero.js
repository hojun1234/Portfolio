import Animation from './animation';

export default function Hero() {
  return (
    <>
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요~!
          <br class="hidden lg:inline-block" />
          김호준 입니다.
          <br class="hidden lg:inline-block" />
          만나서 반갑습니다.
        </h1>
       
       
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
