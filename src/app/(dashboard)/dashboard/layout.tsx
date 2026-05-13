
import React, { ReactNode } from "react";

export default function dashLayout({
  children,
  analytic,
  team,
}: {
  children: ReactNode;
  analytic: ReactNode;
  team: ReactNode;
}) {
  return (
    <>

      {children}

      <div className="w-full flex justify-around p-20">
        {analytic}
        {team}
      </div>
    </>
  );
}
