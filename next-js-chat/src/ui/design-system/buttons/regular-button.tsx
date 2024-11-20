"use client";

type Props = {
  name: string;
  handleClick?(): Promise<void>;
};

export default function RegularButton({ name, handleClick }: Props) {
  return (
    <button
      name={name}
      className={`bg-slate-500 text-white rounded-md py-2 px-2 transition-transform transform hover:bg-slate-600 hover:scale-105`}
      onClick={() => (!handleClick ? "" : handleClick())}
    >
      {name}
    </button>
  );
}
