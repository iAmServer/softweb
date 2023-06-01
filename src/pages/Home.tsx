import { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import { useScrollPosition } from "../hooks/scroll";

const Home: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <div
          className={`w-full flex flex-col lg:flex-row fixed top-0 z-10 ${
            scrollPosition > 100 && "bg-primary bg-opacity-20"
          }`}
        >
          <div className="p-4 mb-4 lg:m-0 w-full lg:w-1/2">
            <Logo />
          </div>
          <Nav
            className="w-full lg:w-1/2 text-white"
            settingsClicked={() => setShowSettings(true)}
          />
        </div>
        <div className="h-screen bg-red-50 bg-[url('assets/forgot.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="w-full h-full bg-gray-950/30 backdrop-brightness-75 flex flex-col justify-center items-center">
            <div className="w-full lg:w-1/2 p-12 text-center">
              <h1 className="text-3xl lg:text-6xl text-primary font-black mb-8">
                Secure Your Future
                <br />
                With Crop Investment
              </h1>
              <p className="font-semibold text-white text-base lg:text-lg">
                Invest in crops anywhere in Nigeria and get a monthly profit
                from your farming investment. Your investment is guaranteed to
                yield profit. Daisy farms ensure all investors are treated with
                honor and all farm are tended to daily. You are free to inspect
                your crops anytime.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-12 p-6 lg:p-12">
          {[0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
            <Card index={index} key={index} />
          ))}
        </div>

        <div className="p-4 text-center">
          <button className="border border-primary min-w-[200px] hover:shadow-lg p-4 font-semibold text-lg">
            Load More
          </button>
        </div>

        <div className="p-6 lg:p-12">
          <p className="font-semibold mb-6 text-xl">
            You May Also Be Interested
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 lg:gap-12">
            {[0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
              <Card index={index} key={index} />
            ))}
          </div>
        </div>

        <Footer />

        {showSettings && (
          <Menu settingsClicked={() => setShowSettings(false)} />
        )}
      </div>
    </>
  );
};

export default Home;
