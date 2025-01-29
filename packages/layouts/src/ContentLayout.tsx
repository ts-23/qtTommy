import type { PropsWithChildren } from "react";

type ContentLayoutProps = {} & PropsWithChildren;

export function ContentLayout({ children, ...other }: ContentLayoutProps) {
  return <div>{children}</div>;
}
