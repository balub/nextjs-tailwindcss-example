import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

function CountryCard({ country }) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <div
      className="w-64 bg-white dark:bg-darkBlue dark:rounded-md dark:shadow-md"
      onClick={() => router.push(`/countries/${country.name.trim()}`)}
    >
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
        <p className="font-bold text-veryDarkBlue dark:text-white text-xl">
          {country.name}
        </p>
        <div className="mt-3 mb-10">
          <p className="text-veryDarkBlue dark:text-white my-1">
            <span className="font-bold">Population:</span> {country.population}
          </p>
          <p className="text-veryDarkBlue dark:text-white my-1">
            <span className="font-bold">Region:</span> {country.region}
          </p>
          <p className="text-veryDarkBlue dark:text-white my-1">
            <span className="font-bold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
