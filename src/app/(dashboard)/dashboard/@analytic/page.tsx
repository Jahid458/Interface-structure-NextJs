import { getServices } from "@/lib/data";
import { resolve } from "path";
import React from "react";

const analytic = async() => {

  await getServices()


  return (
    <div className="border-amber-400 border-2 p-10">
      <h1>This is parallal analytics Page</h1>
    </div>
  );
};

export default analytic;
