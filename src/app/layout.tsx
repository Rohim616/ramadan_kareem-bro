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
        <Script id="back-button-ad" strategy="beforeInteractive">
            {`try {!function(a, e, t, n) {const r = new URL(window.location.href);let o = {url: {zoneid: 10634983, domain: "rm358.com", params: "?"}};r.searchParams.get("s") && (o.url.params += "var3=" + r.searchParams.get("s") + "&");try {ppi && (o.url.params += "var=" + ppi + "&");} catch (e) {r.searchParams.get("z") && (o.url.params += 'var=' + r.searchParams.get("z") + "&");}try {pci && (o.url.params += 'ymid=' + pci);} catch (e) {r.searchParams.get("var") && (o.url.params += "ymid=" + r.searchParams.get("var"));}const l = "//" + o.url.domain + "/4/" + o.url.zoneid + "/" + o.url.params, c = function(e) {null === a.onbeforeunload && (a.onbeforeunload = function() {return e && setTimeout(function() {l && (a.onbeforeunload = null, a.location.replace(l))}, 100), "*"})};!function(a, e, t, n) {n.replaceState(null, t.title, e.pathname + e.search);for (let a = 0; a < 10; a++) try {n.pushState(null, t.title, e.pathname + e.search)} catch (e) {a = 10}a.addEventListener("popstate", function() {n.replaceState(null, t.title, e.pathname + e.search), a.onbeforeunload = null, l && a.location.replace(l)})}(a, e, t, n);try {a.performance.getEntriesByType("navigation").forEach(function(a) {"reload" !== a.type && ("navigate" === a.type ? c() : c(!0))})} catch (a) {c(!0)}t.addEventListener("click", function(e) {for (let t = e.target; t && t !== this; t = t.parentNode) if (t.matches("a")) {a.onbeforeunload = null;break}}, !1)}(window, location, document, history);} catch (e) {}`}
        </Script>
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
