import react, { ReactNode } from "react";
import { Navbar } from "./navbar";

type Props = {
  children: ReactNode;
};

export default function SideLayout({children}: Props) {
  return (
    <div className="w-full p-0">
        <Navbar>
        </Navbar>
        

    </div>
  );
}