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
        <Script id="propush-me-smart-tag" strategy="lazyOnload">
          {`
            var s = document.createElement('script');
            s.src = "//gmanq.com/ebf/a6905/mw.min.js?z=10634945&sw=/sw-check-permissions-1b1b6.js";
            s.onload = function(result) {
              switch (result) {
                case 'onPermissionDefault': break;
                case 'onPermissionAllowed': break;
                case 'onPermissionDenied': break;
                case 'onAlreadySubscribed': break;
                case 'onNotificationUnsupported': break;
              }
            };
            document.head.appendChild(s);
          `}
        </Script>
      </body>
    </html>
  );
}
