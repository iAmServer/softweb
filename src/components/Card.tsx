const Card: React.FC<any> = ({ index }) => {
  return (
    <>
      <div className="group max-w-lg bg-white  flex flex-col">
        <img
          className=" w-full h-full shadow grouped:hover:shadow-lg object-cover"
          src={`${index + 1}.jpg`}
          alt=""
        />
        <div className="p-6 text-center mt-auto">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Rice (Oryza sativa)
            </h5>
          </a>
          <a
            href="#"
            className="inline-flex items-center  text-lg font-medium text-center text-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
