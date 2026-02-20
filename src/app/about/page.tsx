import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold font-headline text-primary">
            About Us
          </CardTitle>
          <p className="text-lg text-muted-foreground pt-2">
            Learn more about our mission, vision, and the team behind this project.
          </p>
        </CardHeader>
        <CardContent className="space-y-12 p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Building className="h-24 w-24 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">
                Our mission is to provide engaging and educational experiences through our interactive quizzes. We believe in the power of knowledge and aim to make learning fun and rewarding for everyone, especially during significant times like Ramadan.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-shrink-0">
              <Target className="h-24 w-24 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">
                We envision a world where learning is accessible and enjoyable. Through our platform, we strive to foster a community of curious minds who are eager to test their knowledge, learn new things, and celebrate cultural and religious heritage.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Users className="h-24 w-24 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary">Our Team</h3>
              <p className="mt-2 text-muted-foreground">
                We are a passionate team of developers, designers, and content creators dedicated to building high-quality applications. Our diverse backgrounds and shared commitment to excellence drive us to create meaningful and impactful digital products.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
