import AstrologerCards from "./AstrologerCards";
import data from "../data.js";

const AstrologerDetails = () => {
  return (
    <>
      <div className="hidden lg:block text-center lg:font-normal text-primary lg:text-3xl lg:p-4 font-poppins 2xl:text-5xl 2xl:py-8">
        Chat with Astrologers
      </div>

      {/* Card container starts from here  */}
      <div className="grid grid-cols-1 px-4 gap-3 mb-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 lg:px-32 2xl:px-48 2xl:gap-8 ">
        {/* Mapping data to cards  */}
        {data.map((data) => (
          <AstrologerCards key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default AstrologerDetails;
