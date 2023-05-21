import React, { PropsWithChildren } from "react";
export default function Layouts(props: PropsWithChildren) {
  return (
    <>
      <div className="grid min-h-screen grid-rows-header bg-zinc-100">
        <div>Navbar</div>
        <div className="grid md:grid-cols-sidebar">
          <div>Sidebar</div>
          {props.children}
        </div>
      </div>
    </>
  )
}
