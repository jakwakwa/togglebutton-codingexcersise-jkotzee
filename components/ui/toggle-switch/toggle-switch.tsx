"use client";

import React, { useState } from "react";
import { ToggleIcon } from "@/components/icons/toggle-icon";
import { toggleClasses } from "./toggle-switch.constants";
import { ChevronIcon } from "@/components/icons/chevron-icon";

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
  isChevron?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
  tabIndex?: number;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaControls?: string;
}

const defaultProperties: ToggleSwitchProps = {
  appearance: "default",
  state: "default",
  size: "lg",
  checked: false,
  width: "intrinsic",
  disabled: false,
  loading: false,
  iconOnly: false,
  leadingIcon: false,
  trailingIcon: false,
  isChevron: false,
  label: "Label",
  tabIndex: 0,
  ariaLabel: undefined,
  ariaDescribedBy: undefined,
  ariaControls: undefined,
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

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  const renderIcon = (): React.ReactNode =>
    options.isChevron ? (
      <ChevronIcon
        isDisabled={options.disabled}
        isChecked={isChecked}
        size={options.size}
        style={{
          transform: isChecked ? "rotate(180deg)" : undefined,
          transition: "transform 0.2s ease-in-out",
        }}
      />
    ) : (
      <ToggleIcon
        isDisabled={options.disabled}
        isChecked={isChecked}
        size={options.size}
      />
    );

  return (
    <button
      className={
        getToggleClasses(options, isChecked ?? false) +
        " " +
        toggleClasses.outerSize[options.size ?? "sm"]
      }
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={options.disabled}
      role="switch"
      aria-checked={isChecked}
      aria-label={options.ariaLabel || options.label}
      aria-describedby={options.ariaDescribedBy}
      aria-controls={options.ariaControls}
      tabIndex={options.disabled ? -1 : options.tabIndex}
    >
      {(options.iconOnly || options.leadingIcon) && renderIcon()}
      {!options.iconOnly && (
        <span
          className={[
            toggleClasses.innerSize[options.size ?? "sm"],
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
