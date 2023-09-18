import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie DB",
  description: "Everything about movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
