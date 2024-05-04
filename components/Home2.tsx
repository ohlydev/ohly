const Hero2 = () => {
  return (
    <section id="herosection">
      <div className="relative isolate overflow-hidden bg-black">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#525252] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            {/* <img
            
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          /> */}
            <div
              className="mt-24 sm:mt-32 lg:mt-16 flex justify-center sm:flex-none sm:justify-normal"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <a
                href="#"
                className="inline-flex space-x-6"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                  Vários modelos
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                  <span>Melhor preço</span>
                </span>
              </a>
            </div>
            <h1
              className="mt-10 text-4xl font-bold tracking-tight text-white text-center sm:text-6xl sm:text-start"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              Your project done in few days
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-gray-300 text-center sm:text-start"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              tempora sint minima fugiat, dolorum eius voluptatum quas unde
              reprehenderit quae nesciunt esse odio at architecto eligendi. Quia
              sunt sit consequatur.
            </p>
            <div
              className="mt-10 flex items-center gap-x-6 justify-center  sm:justify-normal"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Conheça agora
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Veja agora <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div
            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="/images/hero-image2.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
