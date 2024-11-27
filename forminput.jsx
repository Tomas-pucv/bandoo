import * as React from "react";

export function FormInput({ icon, label, type = "text", value, placeholder }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-end h-[58px]">
        <div className="flex items-start pt-1 pr-4 pb-12 w-8">
          <img loading="lazy" src={icon} alt="" className="object-contain w-4 aspect-square" />
        </div>
        <div className="flex flex-col text-lg tracking-normal leading-none min-w-[240px] text-zinc-800 w-[302px]">
          <label className="pb-px max-w-full w-[302px]">{label}</label>
          <div className="flex mt-1 max-w-full min-h-[40px] w-[302px]" />
        </div>
      </div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="flex z-10 items-center py-1 pl-3.5 mt-0 text-lg leading-none bg-gray-100 rounded-lg border border-solid border-slate-500 min-h-[32px] text-zinc-800 w-full"
        aria-label={label}
      />
    </div>
  );
}
