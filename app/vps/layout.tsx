import { Metadata } from 'next';

// Preload images
const preloadImages = [
  '/images/ubuntu.svg',
  '/images/centos.svg',
  '/images/debian.svg',
  '/images/windows.svg',
  '/images/dashboard.png'
];

export const metadata: Metadata = {
  title: 'VPS Hosting - OozeCloud',
  description: 'High-performance VPS hosting with full root access, instant deployment, and 24/7 support.',
};

export default function VPSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {preloadImages.map((src) => (
        <link
          key={src}
          rel="preload"
          as="image"
          href={src}
          type={src.endsWith('.svg') ? 'image/svg+xml' : 'image/png'}
          crossOrigin="anonymous"
        />
      ))}
      {children}
    </>
  );
} 