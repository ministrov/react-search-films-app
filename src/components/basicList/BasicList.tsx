import { ReactNode } from "react";

type BasicListProps = {
  children: ReactNode;
  className?: string;
}

export default function BasicList({ children, className }: BasicListProps) {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}
