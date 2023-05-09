import { WindowSizeContext } from './context/WindowSizeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WindowSizeContext>{children} </WindowSizeContext>
      </body>
    </html>
  );
}
