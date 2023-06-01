import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

const Password = () => {
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
            <div className="place-self-start mb-20 mt-20 md:mt-0 ">
              <h2 className="text-[32px] font-semibold">Forgot Password ?</h2>
              <p className="text-lg font-medium  mb-6">
                Don't worry we got you .
              </p>
              <p className="text-lg font-medium">
                Enter your <span className="text-primary">Email</span> or{" "}
                <span className="text-primary">Phone number</span> to get your
                OTP code.
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="flex mb-12 justify-center ">
                <input
                  type="text"
                  className="block border w-full bg-gray-200 p-4 rounded-lg text-base placeholder:text-gray-400 placeholder:font-normal text-gray-800 font-semibold text-center focus:border-primary outline-none"
                  placeholder="Enter your email or phone number here "
                />
              </div>

              <Link
                to="/otp-password"
                className="min-w-[200px] w-fit text-lg text-center bg-primary text-white font-semibold hover:bg-opacity-90 mx-auto rounded-md p-4 mt-6"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
