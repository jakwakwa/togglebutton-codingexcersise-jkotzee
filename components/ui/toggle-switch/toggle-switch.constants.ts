export const toggleClasses = {
  base: "rounded-full flex items-center justify-center p-5 font-semibold font-['Inter'] leading-tight tracking-wide",
  size: {
    md: "text-md",
    sm: "text-sm",
    lg: "text-lg",
  },
  width: {
    full: "w-full",
    intrinsic: "w-fit",
  },
  appearance: {
    subtle:
      "h-10 px-4 py-2 disabled:bg-[#091E42]/[3%] disabled:text-[#091E424F] disabled:cursor-not-allowed",
    default:
      "h-12 px-5 py-3 bg-[#091E42]/[6%] border-solid border-[1px] border-[#091E42]/[14%] disabled:bg-[#091E42]/[3%] disabled:text-[#091E424F] disabled:cursor-not-allowed",
  },
  icon: {
    leading: "ml-0 mr-2",
    trailing: "mr-2 ml-2",
  },
  state: {
    checked:
      "bg-[#30384A]/[100%] text-[#ffffff] hover:bg-[#4B5160]/[100%] active:bg-[#30384A]/[100%]",
    unchecked: "hover:bg-[#091E42]/[14%] active:bg-[#091E42]/[31%]",
  },
} as const;
