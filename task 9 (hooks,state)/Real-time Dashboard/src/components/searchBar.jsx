import React from "react";

function searchBar({value,onChange}){
    return(
        <>
          <input
      className="mb-4 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
      placeholder="Search posts..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
        </>
    )
}


export default React.memo(searchBar);
