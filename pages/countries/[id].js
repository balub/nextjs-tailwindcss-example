import React from "react";
import { useRouter } from "next/router";

function CountryPage() {
  const { query } = useRouter();
  console.log(query.id);
  return <div>{query.id}</div>;
}

export default CountryPage;
