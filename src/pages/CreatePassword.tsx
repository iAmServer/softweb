import Logo from "../components/Logo";
import Nav from "../components/Nav";
import PasswordIcon from "../../src/assets/password.svg";

const CreatePassword = () => {
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
              <h2 className="text-[32px] font-semibold">
                Create a New Password
              </h2>
              <p className="text-lg font-medium">
                Enter a <span className="text-primary">strong</span> password to
                keep your account secured
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="flex mb-6 items-center">
                <label className="w-1/4 font-semibold">New Password</label>
                <div className="flex-1 relative">
                  <input
                    type="password"
                    placeholder="Enter your password here"
                    className="block border w-full bg-gray-200 p-4 rounded-lg text-base placeholder:text-gray-400 placeholder:font-normal text-gray-800 font-semibold focus:border-primary outline-none pr-12"
                  />
                  <img
                    src={PasswordIcon}
                    alt="Password"
                    className="absolute right-2.5 bottom-6 pr-3 w-7 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex mb-4 items-center">
                <label className="w-1/4 font-semibold">
                  Re-confirm password
                </label>
                <div className="flex-1 relative">
                  <input
                    type="password"
                    placeholder="Enter your password here"
                    className="block border w-full bg-gray-200 p-4 rounded-lg text-base placeholder:text-gray-400 placeholder:font-normal text-gray-800 font-semibold focus:border-primary outline-none pr-12"
                  />
                  <img
                    src={PasswordIcon}
                    alt="Password"
                    className="absolute right-2.5 bottom-6 pr-3 w-7 cursor-pointer"
                  />
                </div>
              </div>

              <button className="min-w-[200px] w-fit text-lg bg-primary text-white font-semibold hover:bg-opacity-90 mx-auto rounded-md p-4 mt-12">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePassword;
