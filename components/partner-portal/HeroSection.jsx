const HeroSection = () => {
  return (
    <div className="hero-section bg-partner-hero min-h-[80vh] flex items-center justify-center text-center relative ">
      <div className="z-10">
        <div className="content text-white mb-5">
          <div className="w-100">
            <h1 className="px-8 text-5xl lg:text-6xl font-bold p-5 ">Partner Portal</h1>

            <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
              <defs>
                <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
                      fill="none" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
              </defs>
            </svg>
            <div className="underline-wrapper">
              <svg className="button-stroke" viewBox="0 0 154 13">
                <use href="#line"></use>
              </svg>
              <svg className="button-stroke" viewBox="0 0 154 13">
                <use href="#line"></use>
              </svg>
            </div>
          </div>
          <h6 className="text-xl lg:text-2xl p-2 font-thin mt-16 px-8">Hey there! Welcome to the Partner Portal,<br></br>
            Your one-stop hub for growth opportunities tailored for you from our partners.<br></br>
            Discover, connect and grow with AIESEC, where extraordinary journeys begin.</h6>
        </div>
        <a href="#main" className="p-8">
          <div className="scroll-down"></div>
        </a>
      </div>
      <div className="absolute inset-0 bg-black opacity-25"></div>
    </div>

  )
}

export default HeroSection;