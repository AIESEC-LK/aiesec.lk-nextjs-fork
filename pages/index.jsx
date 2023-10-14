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

const MainPage = () => {
  return (
    <>
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