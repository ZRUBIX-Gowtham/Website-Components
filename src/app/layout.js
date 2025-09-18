// app/layout.js
import './globals.css';
import Navbar from './Header';

export const metadata = {
  title: 'My App',
  description: 'A Next.js app with a sidebar layout',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
   
          <Navbar />
          <main >
            {children}
          </main>
       
      </body>
    </html>
  );
}
