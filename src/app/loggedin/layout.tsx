import { ConvexClientProvider } from "../ConvexClientProvider";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <Providers>
        {children}
    </Providers>
    );
  }