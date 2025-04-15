// import type { Metadata } from 'next';
import './styles/globals.css';

// export const metadata: Metadata = {
//   title: 'Brittany Chiang | Software Engineer',
//   description: 'Brittany Chiang is a software engineer specializing in building (and occasionally designing) exceptional digital experiences.',
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 