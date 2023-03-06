export const metadata = {
  title: "Pokédex",
  description: "Pokédex CRUD app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
