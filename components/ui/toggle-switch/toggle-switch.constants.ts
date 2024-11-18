export const toggleClasses = {
  base: "rounded-full flex items-center justify-center font-medium font-['Inter'] leading-tight tracking-wide align-middle",
  innerSize: {
    md: "text-sm inline-flex self-center",
    sm: "text-xs inline-flex self-center",
    lg: "text-lg inline-flex self-center",
  },
  outerSize: {
    md: "h-10 px-4 py-2",
    sm: "h-6 px-2 py-1",
    lg: "h-12 px-5",
  },
  width: {
    full: "w-full",
    intrinsic: "w-fit",
  },
  appearance: {
    subtle:
      "disabled:bg-[#091E42]/[3%] disabled:text-[#091E424F] disabled:cursor-not-allowed",
    default:
      "bg-[#091E42]/[6%] border-solid border-[1px] border-[#091E42]/[14%] disabled:bg-[#091E42]/[3%] disabled:text-[#091E424F] disabled:cursor-not-allowed",
  },
  icon: {
    leading: "ml-0 mr-2",
    trailing: "mr-2 ml-2",
  },
  state: {
    checked:
      "bg-[#30384A]/[100%] text-[#ffffff] active:bg-[#4B5160]/[100%] hover:bg-[#30384A]/[100%]",
    unchecked: "text-[#172B4D] hover:bg-[#091E42]/[14%] active:bg-[#091E42]/[31%]",
  },
} as const;
