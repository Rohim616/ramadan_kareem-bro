import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-4xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline text-primary">
            Privacy Policy
          </CardTitle>
          <CardDescription>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 prose dark:prose-invert max-w-none">
          <p>
            Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-primary">1. Information We Collect</h2>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. The only personal information we collect is your phone number if you choose to claim a reward, for the sole purpose of delivering that reward. We also collect referral data to track the sharing of links.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to operate and maintain our Quiz, to process and deliver your claimed rewards, and to prevent abuse of the system by ensuring one reward per phone number.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary">3. Data Storage and Security</h2>
            <p>
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. Specifically, phone numbers that have claimed a reward are stored to prevent duplicate claims.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary">4. Cookies</h2>
            <p>
              We use cookies to manage your quiz session state and track referral sources. Cookies are small text files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary">5. Links to Other Sites</h2>
            <p>
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary">6. Changes to Our Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary">7. Contact Us</h2>
            <p>
              If you have any questions about our Privacy Policy, please contact us.
            </p>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
