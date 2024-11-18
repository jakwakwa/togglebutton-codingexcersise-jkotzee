export const ToggleIcon = ({
  isDisabled = false,
  isChecked = false,
  size = "md",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size === "sm" ? 24 : size === "lg" ? 32 : 28}`}
      height={`${size === "sm" ? 24 : size === "lg" ? 32 : 28}`}
      viewBox="0 0 24 24"
    >
      <path
        d="M7.7587 2H16.2413C17.0463 1.99999 17.7106 1.99998 18.2518 2.04419C18.8139 2.09012 19.3306 2.18868 19.816 2.43597C20.5686 2.81947 21.1805 3.43139 21.564 4.18404C21.8113 4.66937 21.9099 5.18608 21.9558 5.74817C22 6.28936 22 6.95372 22 7.75868V16.2413C22 17.0463 22 17.7106 21.9558 18.2518C21.9099 18.8139 21.8113 19.3306 21.564 19.816C21.1805 20.5686 20.5686 21.1805 19.816 21.564C19.3306 21.8113 18.8139 21.9099 18.2518 21.9558C17.7106 22 17.0463 22 16.2413 22H7.75868C7.73455 22 7.71056 22 7.68669 22L6.89416 22C6.62378 22 6.358 22.0001 6.14403 21.9811C6.13603 21.9804 6.12769 21.9797 6.119 21.9788C5.98945 21.9729 5.8659 21.9654 5.74817 21.9558C5.18608 21.9099 4.66937 21.8113 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43597 19.816C2.18868 19.3306 2.09012 18.8139 2.04419 18.2518C1.99998 17.7106 1.99999 17.0463 2 16.2413V7.7587C1.99999 6.95373 1.99998 6.28937 2.04419 5.74817C2.09012 5.18608 2.18868 4.66937 2.43597 4.18404C2.81947 3.43139 3.43139 2.81947 4.18404 2.43597C4.66937 2.18868 5.18608 2.09012 5.74817 2.04419C6.28937 1.99998 6.95373 1.99999 7.7587 2ZM7.8 20H16.2C17.0566 20 17.6389 19.9992 18.089 19.9624C18.5274 19.9266 18.7516 19.8617 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C19.8617 18.7516 19.9266 18.5274 19.9624 18.089C19.9992 17.6389 20 17.0566 20 16.2V15.4142L16.4243 11.8385C16.2146 11.6288 16.0993 11.5146 16.0101 11.4389C16.0066 11.4359 16.0032 11.4331 16 11.4304C15.9968 11.4331 15.9934 11.4359 15.9899 11.4389C15.9007 11.5146 15.7854 11.6288 15.5757 11.8385L7.41441 19.9998C7.53648 20 7.66483 20 7.8 20ZM20 12.5858V7.8C20 6.94342 19.9992 6.36113 19.9624 5.91104C19.9266 5.47262 19.8617 5.24842 19.782 5.09202C19.5903 4.7157 19.2843 4.40973 18.908 4.21799C18.7516 4.1383 18.5274 4.07337 18.089 4.03755C17.6389 4.00078 17.0566 4 16.2 4H7.8C6.94342 4 6.36113 4.00078 5.91104 4.03755C5.47262 4.07337 5.24842 4.1383 5.09202 4.21799C4.7157 4.40973 4.40973 4.7157 4.21799 5.09202C4.1383 5.24842 4.07337 5.47262 4.03755 5.91104C4.00078 6.36113 4 6.94342 4 7.8V16.2C4 17.0566 4.00078 17.6389 4.03755 18.089C4.07337 18.5274 4.1383 18.7516 4.21799 18.908C4.38624 19.2382 4.64245 19.5142 4.95696 19.7065C5.01522 19.6185 5.07261 19.5482 5.11519 19.4973C5.25309 19.3326 5.44105 19.1447 5.63227 18.9535L14.1841 10.4017C14.3625 10.2232 14.5363 10.0494 14.6955 9.91424C14.8704 9.76581 15.0922 9.60624 15.382 9.5121C15.7837 9.38159 16.2163 9.38159 16.618 9.5121C16.9078 9.60624 17.1296 9.76581 17.3045 9.91424C17.4637 10.0494 17.6375 10.2232 17.8159 10.4017L20 12.5858ZM8.5 7.5C7.94772 7.5 7.5 7.94772 7.5 8.5C7.5 9.05229 7.94772 9.5 8.5 9.5C9.05229 9.5 9.5 9.05229 9.5 8.5C9.5 7.94772 9.05229 7.5 8.5 7.5ZM5.5 8.5C5.5 6.84315 6.84315 5.5 8.5 5.5C10.1569 5.5 11.5 6.84315 11.5 8.5C11.5 10.1569 10.1569 11.5 8.5 11.5C6.84315 11.5 5.5 10.1569 5.5 8.5Z"
        fill={isDisabled ? "#9CA3AF" : !isChecked ? "#44546F" : "#bcc1c8"}
        style={{ fillOpacity: 1 }}
      />
    </svg>
  );
};