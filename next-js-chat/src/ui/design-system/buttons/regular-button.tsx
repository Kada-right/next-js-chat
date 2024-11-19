"use client";

type Props = {
  name: string;
  handleClick?(): Promise<void>;
};

export default function RegularButton({ name, handleClick }: Props) {
  return (
    <button
      name={name}
      className=" bg-slate-500 rounded-md text-white py-2 px-3 transition-transform transform hover:bg-slate-600 hover:scale-105"
      onClick={() => (!handleClick ? "" : handleClick())}
    >
      {name}
    </button>
  );
}
