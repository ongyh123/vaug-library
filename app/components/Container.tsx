"use client";

interface ContainerProps {
  children: React.ReactNode;
  small?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, small }) => {
  return (
    <div
      className={`max-w-[1200px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ${
        small ? "py-0" : "py-4 pb-44"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
