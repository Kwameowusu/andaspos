import { ComponentProps } from "react";

export const PlayIcon = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.008 9.17503L14.169 11.323C14.3738 11.4426 14.4997 11.6619 14.4997 11.899C14.4997 12.1362 14.3738 12.3555 14.169 12.475L11.008 14.825C10.408 15.232 9.5 14.885 9.5 14.249V9.74903C9.5 9.11603 10.409 8.76803 11.008 9.17503Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 11V13C5 16.3137 7.68629 19 11 19H13C16.3137 19 19 16.3137 19 13V11C19 7.68629 16.3137 5 13 5H11C7.68629 5 5 7.68629 5 11Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
