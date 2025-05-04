import React from "react";

const Item = () => {
  return (
    <a href="/home" className="flex flex-col gap-3">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsbSUyMGJlYWNofGVufDB8fDB8fHww"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="mt-2.5 text-xl font-bold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          enim necessitatibus ipsum placeat. Perferendis, nulla obcaecati!
          Itaque, culpa velit? Fugit ea ipsam quam excepturi adipisci repellat
          iusto corporis natus sapiente.
        </p>
      </div>

      <p>
        <span className="text-2xl font-bold">R$550</span> por noite
      </p>
    </a>
  );
};

export default Item;
