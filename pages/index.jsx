import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import About from "@components/About";
import LocalChapters from "@components/chapters";
import Opportunities from "@components/ouropts";
import EPCarousel from "@components/carousel";
import Partners from "@components/partners";
import BlogsSection from "@components/blogsupdates";
import NewsUpdates from "@components/newsupdates";
import FnQ from "@components/FnQ";
import ContactFrom from "@components/form";
import Footer from "@components/Footer";
import Head from "next/head";
import HtmlHead from "@components/partner-portal/HtmlHead";

const MainPage = () => {
  return (
    <>
      <HtmlHead title={"AIESEC in Sri Lanka"}
                description={"AIESEC is a global platform for young people to explore and develop their leadership potential."}/>
      <Nav/>
      <HomeVideo/>
      <Counter/>
      <About/>
      <LocalChapters/>
      {/* <Home/> */}
      <Opportunities/>
      <EPCarousel/>
      <Partners/>
      <BlogsSection/>
      <NewsUpdates/>
      <FnQ/>
      <ContactFrom/>
      <Footer/>
    </>
  )
}

MainPage.displayName = 'Home Page';

export default MainPage;