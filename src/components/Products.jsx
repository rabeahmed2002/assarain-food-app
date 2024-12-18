import React from "react";
import man from "../assets/man.png"

const AssarainFoodProducts = () => {
  return (
    <div className="bg-blue-900 text-white py-10 px-5 md:px-20">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Assarain Food Products L.L.C.
        </h1>
        <p className="text-lg">
          "Food, in the end, in our own tradition, is something holy. It's not
          about nutrients and calories. It's about sharing. It's about honesty.
          It's about identity."
          <br />
          <span className="font-semibold text-cyan-500">Louise Fresco</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-8">
        {/* Text Content */}
        <div className="md:w-2/3">
          <p className="mb-4 leading-7">
            Our commitment to maintaining high standards, delivering superior
            quality food products and services and the unwavering trust placed
            in us by our ever-increasing loyal customer base reflects our desire
            and effort to provide only the best in handling, storage, logistics,
            and distribution of a wide range of premium food products. Since our
            inception in 1975, we have grown from strength to strength through
            diversification of our operations, new brand acquisition, and
            participation in major tenders.
          </p>
          <p className="leading-7">
            At Assarain Food Products, we are importers, distributors, and
            suppliers of a wide variety of food products, and our portfolio
            includes frozen food products, poultry, meat, French fries, further
            processed products, etc. We have an established presence as a market
            leader, offering a unique basket of products both suitable for B2B
            (Business to business) and B2C (business to consumer) in the food
            and consumer products market. We have the unique advantage of
            providing a full range of branded and commodity products that are
            suitable to our customers and this is what makes us stand apart from
            our competitors, who focus only on certain product categories.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={man}
            alt="Assarain Food Products"
            className="w-full h-full"
            class="scale-x-[-1]"
          />
        </div>
      </div>
      
    </div>
    
  );
};

export default AssarainFoodProducts;
