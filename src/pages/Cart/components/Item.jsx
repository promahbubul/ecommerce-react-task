import React from "react";

const Item = () => {
  return (
    <div className="flex flex-row w-full border-b border-b-slate-200">
      <div className="w-2/12 pb-1 items-center justify-between">
        <img
          src="https://i.ytimg.com/vi/9_FQW36r0n8/maxresdefault.jpg"
          alt=""
          className="w-32 h-20"
        />
      </div>
      <h4 className="text-xl flex items-center flex-row   w-8/12 font-medium">
        I Phone 6
      </h4>
      <h4 className="text-lg font-extrabold flex items-center justify-center    w-2/12">
        $60
      </h4>
    </div>
  );
};

export default Item;
