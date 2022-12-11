import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Portflio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <div className="max-w-3xl mx-auto py-11">
          <div className="relative grid grid-cols-2 shadow-md bg-slate-100">
            <div className="relative">
              <Image layout="fixed" width={300} height={350} src="/shop.jpg" />
              <a
                href="https://github.com/hojun1234/nextmall"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="ml-7 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  GitHub
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </a>
              <a
                href="https://nextmall-omega.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="ml-10 inline-flex text-gray-700 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Web
                </button>
              </a>
            </div>
            <p className='max-w-prose py-9 px-1 sm:text-2xl text-2xl mb-4'>
                <br/><br/><br/>
              웹프로그래밍 개인쇼핑몰
              <br/> 웹 구축하기
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto py-9">
          <div className="relative grid grid-cols-2 shadow-md bg-slate-100">
            <div className="relative">
              <Image layout="fixed" width={300} height={350} src="/ping.jpg" />
              <button class="ml-7 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                GitHub
              </button>
              <button class="ml-10 inline-flex text-gray-700 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Web
              </button>
            </div>   
            <p className='max-w-prose py-9 px-1 sm:text-2xl text-2xl mb-4'>
                <br/><br/><br/>
               탁구 경기의 전반적인 룰과
               <br/> 점수를 구할 수 있는 
               <br/>웹 사이트 입니다.
            </p>
          </div>
        </div>
   
      </>
    </Layout>
  );
}
