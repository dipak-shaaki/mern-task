import React from "react";

function Stats({ count }) {
  return (
    <h3 className="mb-4 inline-flex rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
      Total Results: {count}
    </h3>
  );
}


export default React.memo(Stats);
