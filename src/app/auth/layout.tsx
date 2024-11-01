import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div
      className="
  container flex justify-center h-screen items-center"
    >
      {children}
    </div>
  );
};

export default layout;
