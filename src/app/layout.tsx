export const metadata = {
  title: "Pokédex",
  description: "A Pokédex CRUD app",
};

interface RootLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
