const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-primary p-4 flex flex-col gap-4 text-white">
        <div className="w-full border-b border-green-200 mt-4"></div>
        <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 lg:place-items-center lg:justify-between p-6 lg:container">
          <div>
            <p className="font-semibold text-xl mb-6">COMPANY</p>

            <ul className="flex flex-col gap-2">
              <li>About Us</li>
              <li>Store Location</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-xl mb-6">FOLLOW US</p>

            <ul className="flex flex-col gap-2">
              <li>About Us</li>
              <li>Store Location</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-xl mb-6">QUICK LINKS</p>

            <ul className="flex flex-col gap-2">
              <li>About Us</li>
              <li>Store Location</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="w-full border-b border-green-200"></div>
        <div className="container px-6 text-center lg:text-start">
          <p>All rights reserved. Copyright 2022.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
