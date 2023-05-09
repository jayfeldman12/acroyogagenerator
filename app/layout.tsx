import NavBar from './components/NavBar/NavBar';
import { WindowSizeContext } from './context/WindowSizeContext';
import './index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WindowSizeContext>
          <NavBar />
          {children}
        </WindowSizeContext>
      </body>
    </html>
  );
}
