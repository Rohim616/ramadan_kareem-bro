import type { SVGProps } from "react";

export function MosqueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 22h20" />
      <path d="M4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8H4v-8Z" />
      <path d="M6 12V8a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v4" />
      <path d="M12 2v4" />
      <path d="M18 12a2 2 0 0 0-2-2" />
      <path d="M8 12a2 2 0 0 0-2-2" />
    </svg>
  );
}

export function LanternIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 2h8" />
      <path d="M12 2v4" />
      <path d="m6.7 13 1.1 9" />
      <path d="m17.3 13-1.1 9" />
      <path d="M10 13h4" />
      <path d="M3 6h18" />
      <path d="M6 6c0 4.5 1.5 8 6 8s6-3.5 6-8" />
    </svg>
  );
}
