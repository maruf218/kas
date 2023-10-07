import Nav from "../Component/Nav";
import Hero from "../Component/Hero";
import Categories from "../Component/Categories";
import Contact from "../Component/Contact";
import AfterNav from "../Component/AfterNav";

const Home = () => {
  return (
    <>
      <Nav />
      <AfterNav/>
      <Hero />
      <Categories />
      <Contact/>
    </>
  );
};

export default Home;
