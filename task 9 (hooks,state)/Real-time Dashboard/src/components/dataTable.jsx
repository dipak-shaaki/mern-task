import React from "react";

function dataTable({ data }) {
  return (
    <ul className="space-y-2">
      {data.map(item => (
        <li
          key={item.id}
          className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-white"
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}


export default React.memo(dataTable);
