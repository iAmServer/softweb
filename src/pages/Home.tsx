import { useScrollPosition } from "../hooks/scroll";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ImPlay2 } from "react-icons/im";

const Home: React.FC = () => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <div className="relative">
        <div className={`w-full  fixed top-0 z-10`}>
          <div
            className={`p-6 px-12 flex flex-row justify-between items-center ${
              scrollPosition > 100 && "bg-primary bg-opacity-20"
            }`}
          >
            <img src="logo.png" alt="logo" />

            <ul className="flex  gap-6">
              <li className="h-8 w-8 flex flex-col justify-center items-center bg-green-900 rounded-full text-xl text-center text-white hover:text-green-300 cursor-pointer">
                <FaInstagram />
              </li>
              <li className="h-8 w-8 flex flex-col justify-center items-center bg-green-900 rounded-full text-xl text-center text-white hover:text-green-300 cursor-pointer">
                <FaTwitter />
              </li>
              <li className="h-8 w-8 flex flex-col justify-center items-center bg-green-900 rounded-full text-xl text-center text-white hover:text-green-300 cursor-pointer">
                <FaFacebook />
              </li>
              <li className="h-8 w-8 flex flex-col justify-center items-center bg-green-900 rounded-full text-xl text-center text-white hover:text-green-300 cursor-pointer">
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <div className="h-screen bg-red-50 bg-[url('assets/hero.png')] bg-no-repeat bg-cover bg-center">
          <div className="w-full h-full bg-gray-950/30 backdrop-brightness-95 flex flex-col justify-center items-center relative">
            <div className=" p-12 text-center">
              <h1 className="text-3xl lg:text-6xl text-white font-black mb-8">
                Providing a solution for
                <br />
                food in Nigeria
              </h1>
              <p className="font-semibold text-white text-base lg:text-lg">
                Empowering communities to combat hunger and malnutrition in
                Africa's <br /> largest economy
              </p>

              <button className="bg-white flex items-center mx-auto justify-center gap-x-4 text-primary p-4 font-semibold min-w-[200px] mt-12 border border-primary rounded-lg">
                <ImPlay2 />
                Watch demo
              </button>
            </div>

            <div className="h-64 w-full absolute -bottom-[170px] lg:-bottom-[100px]">
              <div className="w-full text-center">
                <div className="grid place-items-center grid-cols-3 pb-12">
                  <div className="max-w-lg flex flex-col h-72 lg:h-auto">
                    <img
                      src="hero2.png"
                      alt=""
                      className="h-28 lg:h-72 lg:w-72 rounded-full mx-auto mb-auto"
                    />
                    <div className="text-center my-8">
                      <h3 className="mb-6 text-sm lg:text-2xl font-bold tracking-tight text-gray-900 max-w-xs ">
                        Quebec Food Processing Industrial Parks Ltd
                      </h3>
                      <a
                        href="#"
                        className="text-sm lg:text-base text-center bg-primary text-white p-2 lg:p-3 font-semibold lg:min-w-[150px]  border border-primary rounded-lg"
                      >
                        Discover more
                      </a>
                    </div>
                  </div>
                  <div className="max-w-lg flex flex-col h-72 lg:h-auto">
                    <img
                      src="hero1.png"
                      alt=""
                      className="h-28 lg:h-72 lg:w-72 rounded-full mx-auto mb-auto"
                    />
                    <div className="text-center my-8">
                      <h3 className="mb-6 text-sm lg:text-2xl font-bold tracking-tight text-gray-900 max-w-xs ">
                        Quebec Agri-tech City Project
                      </h3>
                      <a
                        href="#"
                        className="text-sm lg:text-base text-center bg-primary text-white p-2 lg:p-3 font-semibold lg:min-w-[150px]  border border-primary rounded-lg"
                      >
                        Discover more
                      </a>
                    </div>
                  </div>
                  <div className="max-w-lg flex flex-col h-72 lg:h-auto">
                    <img
                      src="hero3.png"
                      alt=""
                      className="h-28 lg:h-72 lg:w-72 rounded-full mx-auto mb-auto"
                    />
                    <div className="text-center my-8">
                      <h3 className="mb-6 text-sm lg:text-2xl font-bold tracking-tight text-gray-900 max-w-xs ">
                        Quebec AgriFoodPro Co-op Group
                      </h3>
                      <a
                        href="#"
                        className="text-sm lg:text-base text-center bg-primary text-white p-2 lg:p-3 font-semibold lg:min-w-[150px]  border border-primary rounded-lg"
                      >
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-12 flex flex-col gap-0 justify-center items-center bg-red-50 text-white bg-[url('assets/hero.png')] bg-no-repeat bg-cover bg-center">
                <h3 className="text-3xl lg:text-5xl my-12 font-bold text-center">
                  Quebec Earthwork
                  <br />
                  Group of Companies
                </h3>
                <p className="text-sm lg:text-xl font-normal mb-12 max-w-xl text-center">
                  We are pleased to introduce Quebec Earthwork Group of
                  Companies, as one of the most determined firms in Nigeria
                  envisioned to make a difference and create opportunities for
                  the populaces, with it primary interests in Construction, Real
                  Estate, EPC, Industrial Equipment Supply, Manufacturing of
                  Processed Foods, Food Production, Agro Products Marketing &
                  Distributions, Agro Exports & Commodity Imports.
                </p>
                <p className="text-sm lg:text-xl font-normal mb-6 max-w-xl text-center">
                  The company has a strong and exceptional management team that
                  drive its operations towards reaching the vision laid out by
                  its promoters, to ensure investors gain value for their
                  investments.
                </p>
              </div>
              <div className="w-full ">
                <h3 className="text-5xl my-12 font-bold text-center">
                  Partners
                </h3>

                <div className="grid grid-cols-5 gap-6 place-items-center p-6 mb-6">
                  {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
                    <div key={index} className="max-w-xl">
                      <img src={`${index + 1}.png`} className="w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full bg-gray-100 p-6 flex flex-col items-center">
                <div className="container flex flex-col lg:flex-row justify-center items-center  gap-y-6 lg:justify-between py-6">
                  <img src="logo.png" alt="" />

                  <p className="max-w-xs text-center">
                    Suite B15, Boya Place Ameh Ebute Street, Wuye- Abuja,
                    Nigeria.
                  </p>

                  <ul className="flex  gap-6">
                    <li className="h-10 w-10 flex flex-col justify-center items-center bg-white border rounded-full text-xl text-center text-gray-800 hover:text-primary cursor-pointer">
                      <FaInstagram />
                    </li>
                    <li className="h-10 w-10 flex flex-col justify-center items-center bg-white border rounded-full text-xl text-center text-gray-800 hover:text-primary cursor-pointer">
                      <FaTwitter />
                    </li>
                    <li className="h-10 w-10 flex flex-col justify-center items-center bg-white border rounded-full text-xl text-center text-gray-800 hover:text-primary cursor-pointer">
                      <FaFacebook />
                    </li>
                    <li className="h-10 w-10 flex flex-col justify-center items-center bg-white border rounded-full text-xl text-center text-gray-800 hover:text-primary cursor-pointer">
                      <FaLinkedin />
                    </li>
                  </ul>
                </div>
                <div className="container flex flex-col lg:flex-row justify-center items-center  gap-y-6 lg:justify-between  py-6 mt-12">
                  <p className="text-center">
                    All Rights Reserved © 2022, Quebec Earthwork Nig. Ltd.
                  </p>
                  <p>Powered by Soft-Web Digital. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
