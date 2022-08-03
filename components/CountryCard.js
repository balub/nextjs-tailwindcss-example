import React from "react";
import Image from "next/image";

function CountryCard({ country }) {
  return (
    <div className="w-64 bg-darkBlue rounded-md shadow-md">
      <div className="h-36 relative">
        <Image
          src={country.flags}
          alt="country flag"
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>
      <div className="m-4">
        <p className="font-bold text-white text-xl">{country.name}</p>
        <div className="mt-3 mb-10">
          <p className="text-white my-1">
            <span className="font-bold">Population:</span> {country.population}
          </p>
          <p className="text-white my-1">
            <span className="font-bold">Region:</span> {country.region}
          </p>
          <p className="text-white my-1">
            <span className="font-bold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
