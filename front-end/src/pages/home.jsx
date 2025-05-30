import React from "react";
import Item from "../components/Item";

const home = () => {
  return (
    <section>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 p-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default home;
