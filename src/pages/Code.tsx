import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

const Code = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 md:h-screen md:bg-[url('assets/login.jpg')] bg-no-repeat bg-cover bg-center md:shadow">
          <div className="w-full h-full p-4 bg-primary  md:bg-gray-950/30 md:backdrop-brightness-75">
            <Logo />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col mt-4 md:mt-0">
          <Nav />

          <div className="flex-1 w-full flex flex-col justify-center items-center px-6 md:px-16 text-gray-800">
            <div className="mb-20 mt-20 md:mt-0  text-center">
              <h2 className="text-[32px] font-semibold ">
                Now Fill In The Code
              </h2>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="flex mb-12 justify-center gap-6">
                <input
                  type="text"
                  className="block w-16 h-16 border bg-gray-200 p-4 rounded-lg text-base placeholder:text-gray-400 placeholder:font-normal text-gray-800 font-semibold text-center focus:border-primary outline-none"
                  maxLength={1}
                  placeholder="0"
                />
                <input
                  type="text"
                  className="block w-16 h-16 border bg-gray-200 p-4 rounded-lg text-base placeholder:text-gray-400 placeholder:font-normal text-gray-800 font-semibold text-center focus:border-primary outline-none"
                  maxLength={1}
                  placeholder="0"
                />
                <input
                  type="text"
                  className="block w-16 h-16 border bg-gray-200 p-4 rounded-lg text-base placeholder:text-gray-400 placeholder:font-normal text-gray-800 font-semibold text-center focus:border-primary outline-none"
                  maxLength={1}
                  placeholder="0"
                />
                <input
                  type="text"
                  className="block w-16 h-16 border bg-gray-200 p-4 rounded-lg text-base placeholder:text-gray-400 placeholder:font-normal text-gray-800 font-semibold text-center focus:border-primary outline-none"
                  maxLength={1}
                  placeholder="0"
                />
              </div>

              <div className="text-center">
                <p className="mb-8">
                  Code was sent to your email
                  <br />
                  olayinkaajoke23@gmail.com
                </p>

                <p className="font-semibold">
                  The code expires in{" "}
                  <span className="text-primary">2 minutes</span>
                </p>
              </div>

              <Link
                to="/change-password"
                className="min-w-[200px] w-fit text-lg text-center bg-primary text-white font-semibold hover:bg-opacity-90 mx-auto rounded-md p-4 mt-6"
              >
                Verify
              </Link>
              <p className="mt-4 text-primary font-semibold mx-auto cursor-pointer w-fit">
                Resend Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Code;
