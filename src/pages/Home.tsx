import Banner from "../components/Home/Banner";
import CategoryCardsList from "../components/Home/CategoryCardsList";
import DealsSection from "../components/Home/DealsSection";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl relative mt-[56px]">
        <Banner />
        <div className="mt-0 md:-mt-60 relative">
          <DealsSection />

          <div className="w-full ">
            <img
              src="https://links.papareact.com/dyz"
              alt=""
              className="w-full h-[150px]  md:h-full object-cover relative"
            />
          </div>
        </div>
        <CategoryCardsList />
      </div>
    </>
  );
};

export default Home;
