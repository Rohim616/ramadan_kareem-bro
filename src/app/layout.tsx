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
        <Script id="onclick-ad" strategy="lazyOnload">
            {`
              (function () {
                  var clickUrl = "https://rm358.com/4/10634969?var={your_source_id}";

                  function clickTbEventInit() {
                      document.addEventListener('click', function () {
                          window.onbeforeunload = null;
                          window.open(clickUrl, '_blank', 'noreferrer,noopener');
                      });
                  }

                  setTimeout(function () {
                      clickTbEventInit();
                  }, 5000);
              })();
            `}
        </Script>
      </body>
    </html>
  );
}
