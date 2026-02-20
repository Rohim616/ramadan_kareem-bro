import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-2xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold font-headline text-primary">
            Contact Us
          </CardTitle>
          <CardDescription className="text-lg pt-2">
            We'd love to hear from you! Reach out with any questions or feedback.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
            <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Email</h4>
              <p className="text-muted-foreground">For general inquiries, support, or feedback, please email us at:</p>
              <a href="mailto:support@example.com" className="text-accent font-medium hover:underline">
                support@example.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
            <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Phone</h4>
              <p className="text-muted-foreground">You can reach our support team during business hours (9 AM - 5 PM) at:</p>
              <a href="tel:+1234567890" className="text-accent font-medium hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Address</h4>
              <p className="text-muted-foreground">
                123 Learning Lane<br />
                Knowledge City, KC 54321<br />
                Digital World
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
