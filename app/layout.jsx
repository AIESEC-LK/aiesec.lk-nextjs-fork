'use client'
<<<<<<< HEAD
=======
import "@styles/globals.css";
import { useEffect, useState } from "react";
import Nav from "@components/Nav";


import SplashScreen from "@components/SplashScreen";
import { usePathname } from "next/navigation";
>>>>>>> f0457b5ee1217c76168a2ee45aa991bda4abca73

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import SplashScreen from "@components/SplashScreen";
import EPCarousel from "@components/carousel";
import ContactFrom from "@components/form";
import Footer from "@components/Footer";
import logo from "@public/aiesecwhite.png";
import Home from "@components/two-column";


const RootLayout = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html>
      <head>
        <title>AIESEC in Sri Lanka</title>
      </head>
      <body>
        
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <div>
            <Nav />
            <HomeVideo />
            <Counter />
            <Home/>
            <EPCarousel/>
            <ContactFrom/>
            <Footer/>
            <h2>AIESEC.lk Revamp</h2>
          </div>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
