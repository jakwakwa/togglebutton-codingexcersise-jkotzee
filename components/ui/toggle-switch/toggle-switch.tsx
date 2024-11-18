"use client";

import React, { useState } from "react";
import { ToggleIcon } from "@/components/icons/toggle-icon";
import { toggleClasses } from "./toggle-switch.constants";

interface ToggleSwitchProps {
  appearance?: "default" | "subtle";
  state?: "default";
  size?: "md" | "sm" | "lg";
  checked?: boolean;
  width?: "intrinsic" | "full";
  disabled?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

const defaultProperties: ToggleSwitchProps = {
  appearance: "subtle",
  state: "default",
  size: "sm",
  checked: false,
  width: "intrinsic",
  disabled: false,
  loading: false,
  iconOnly: false,
  leadingIcon: false,
  trailingIcon: false,
  label: "Label",
};

function getToggleClasses(
  options: ToggleSwitchProps,
  isChecked: boolean
): string {
  const classes = [
    toggleClasses.base,
    toggleClasses.width[options.width ?? "intrinsic"],
    toggleClasses.appearance[options.appearance ?? "default"],
    isChecked ? toggleClasses.state.checked : toggleClasses.state.unchecked,
  ];

  const IconMargins = options.leadingIcon
    ? "ml-0 mr-2"
    : options.trailingIcon
    ? "ml-2 mr-0"
    : "";

  return classes.join(" ") + (IconMargins ? ` ${IconMargins}` : "");
}

function ToggleSwitch(props: ToggleSwitchProps): React.ReactElement {
  const options = { ...defaultProperties, ...props };
  const [internalChecked, setInternalChecked] = useState<boolean>(
    options.checked || false
  );

  const isChecked = options.onChange ? options.checked : internalChecked;

  const handleClick = (): void => {
    const newValue = !isChecked;
    setInternalChecked(newValue);
    options.onChange?.(newValue);
  };

  const renderIcon = () => (
    <ToggleIcon
      isDisabled={options.disabled}
      isChecked={isChecked}
      size={options.size}
    />
  );

  return (
    <button
      className={getToggleClasses(options, isChecked ?? false)}
      onClick={handleClick}
      disabled={options.disabled}
    >
      {(options.iconOnly || options.leadingIcon) && renderIcon()}
      {!options.iconOnly && (
        <span
          className={[
            toggleClasses.size[options.size ?? "sm"],
            options.leadingIcon && "ml-2",
            options.trailingIcon && "mr-2",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {options.label}
        </span>
      )}
      {options.trailingIcon && renderIcon()}
    </button>
  );
}

export default ToggleSwitch;
