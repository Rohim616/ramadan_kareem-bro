import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { QuizProvider } from '@/contexts/quiz-context';
import { cn } from '@/lib/utils';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { WarningDialog } from '@/components/warning-dialog';
import Script from 'next/script';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavMenu } from '@/components/NavMenu';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Ramadan Rewards Quiz',
  description: 'Test your knowledge about Ramadan and win exciting rewards!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <meta name="pushsdk" content="f4e552425265a9e5267fd125510c6ec3" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased', poppins.variable)} suppressHydrationWarning>
        <FirebaseClientProvider>
          <QuizProvider>
            <WarningDialog />
            <div className="relative min-h-screen w-full bg-gradient-radial-purple">
              <header className="absolute top-0 right-0 p-4 z-10 flex items-center gap-2">
                <LanguageSwitcher />
                <NavMenu />
              </header>
              {children}
            </div>
            <Toaster />
          </QuizProvider>
        </FirebaseClientProvider>
        <Script src="https://pl28739627.effectivegatecpm.com/61/f5/b1/61f5b15ec5abd125f85bcc8c2a7889e2.js" strategy="lazyOnload" />
        <Script src="https://pl28739867.effectivegatecpm.com/69/79/88/6979885ba185792b8d19bb95ebb64b3c.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
