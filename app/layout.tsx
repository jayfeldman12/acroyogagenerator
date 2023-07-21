import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { WindowSizeContext } from './context/WindowSizeContext';
import './index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="https://acroyoga757.com/wp-content/uploads/2019/11/cropped-AcroYoga757com-PashiFloatStk1-URL-blk-512x512-32x32.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Website to inspire pose and flow ideas for acro yoga" />
        <link
          rel="apple-touch-icon"
          href="https://acroyoga757.com/wp-content/uploads/2019/11/cropped-AcroYoga757com-PashiFloatStk1-URL-blk-512x512-32x32.jpg"
        />
        <link rel="manifest" href="manifest.json" />
        <title>Acro Yoga Poses</title>
      </head>
      <body>
        <WindowSizeContext>
          <NavBar />
          {children}
          <Analytics />
          <Footer />
        </WindowSizeContext>
      </body>
    </html>
  );
}
