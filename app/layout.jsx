<<<<<<< HEAD
import '@styles/globals.css';
import Nav from '@components/Nav';
import HomeVideo from '@components/homevideo';
import Counter from '@components/CounterSection';
=======
'use client'
import "@styles/globals.css";
import { useEffect, useState } from "react";
import Nav from "@components/Nav";
import SplashScreen from "@components/SplashScreen";
import { usePathname } from "next/navigation";

>>>>>>> 8dd3aff50f9ff602b784d874ccee91488b1742be

const RootLayout = () => {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome) 

  useEffect(() => {
    if(isLoading )
    return
  }, [isLoading ])
  return (
    <html>
      <head>
        <title>AIESEC in Sri Lanka</title>
      </head>
<<<<<<< HEAD
      <div>
        <Nav/>
        <HomeVideo/>
        <Counter/>
=======
      <body>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={()=>setIsLoading(false)}/>
          ): (
            <div>
        <Nav />
>>>>>>> 8dd3aff50f9ff602b784d874ccee91488b1742be
        <h2>AIESEC.lk Rewamp</h2>
      </div>
          )
        }
      
      </body>
    </html>
  );
};
``
export default RootLayout;
