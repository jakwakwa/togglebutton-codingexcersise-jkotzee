import React from "react";
import { CSSProperties } from "react";

export const ChevronIcon = ({
  isDisabled = false,
  isChecked = false,
  size = "md",
  style,
}: {
  isDisabled?: boolean;
  isChecked?: boolean;
  size?: "sm" | "md" | "lg";
  style?: CSSProperties;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size === "sm" ? 12 : size === "lg" ? 24 : 16}`}
      height={`${size === "sm" ? 12 : size === "lg" ? 24 : 16}`}
      viewBox="0 0 24 24"
      style={style}
    >
      <path
        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
        fill={isDisabled ? "#9CA3AF" : !isChecked ? "#44546F" : "#fff"}
        style={{ fillOpacity: 1 }}
      />
    </svg>
  );
};
