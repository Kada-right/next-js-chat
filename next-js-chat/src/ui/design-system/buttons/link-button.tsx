import { Dispatch, SetStateAction } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";


type Props={
name: string;
isHidden: boolean;
setIsHidden: Dispatch<SetStateAction<boolean>>;
}
export function LinkButton({ name, isHidden, setIsHidden}: Props) {
    return (
    <button
        className="hover:bg-slate-300 font-bold flex w-full items-center justify-between pl-2 pr-2 py-2"
        onClick={() => setIsHidden(!isHidden)}
      >
        {name}
        {isHidden ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      );}