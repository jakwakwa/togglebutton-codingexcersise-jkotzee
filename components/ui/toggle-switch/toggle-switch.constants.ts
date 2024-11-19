export const toggleClasses = {
  base: "rounded-full flex items-center justify-center font-medium font-['Inter'] leading-tight tracking-wide align-middle",
  innerSize: {
    md: "text-label-md inline-flex self-center",
    sm: "text-label-sm inline-flex self-center",
    lg: "text-label-lg inline-flex self-center",
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
      "disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
    default:
      "bg-background-default border-solid border-[1px] border-border-default disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
  },
  icon: {
    leading: "ml-0 mr-2",
    trailing: "mr-2 ml-2",
  },
  state: {
    checked:
      "bg-background-selected text-text-inverse active:bg-background-selected-hover hover:bg-background-selected-hover",
    unchecked: "text-text-default hover:bg-background-neutral-hover active:bg-background-neutral-active",
  },
} as const;
