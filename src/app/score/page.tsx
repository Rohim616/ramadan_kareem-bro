"use client";

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/contexts/quiz-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, RotateCcw, ArrowRight, Trophy, Copy, Facebook, Twitter, RefreshCw } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';

const REFERRAL_GOAL = 7;

// A simple hashing function to create a unique-ish ID from a timestamp
const simpleHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36).substring(0, 8);
};

function ReferralSection({ onComplete }: { onComplete: () => void }) {
  const [shares, setShares] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();

  const referralCode = useMemo(() => simpleHash(Date.now().toString()), []);
  const referralLink = useMemo(() => {
    if (typeof window !== 'undefined') {
        return `${window.location.origin}/?ref=${referralCode}`;
    }
    return '';
  }, [referralCode]);

  const progress = (shares / REFERRAL_GOAL) * 100;
  
  const handleCheckReferrals = () => {
    setIsChecking(true);
    toast({
      title: "Checking for referrals...",
      description: "This is a simulated check.",
    });

    setTimeout(() => {
      const newShares = shares < REFERRAL_GOAL ? shares + 1 : shares;
      setShares(newShares);
      setIsChecking(false);

      if (newShares >= REFERRAL_GOAL) {
        toast({
          title: "Congratulations!",
          description: `You've reached ${REFERRAL_GOAL} referrals and unlocked your reward.`,
        });
        setTimeout(() => onComplete(), 500);
      } else {
         toast({
          title: "Update",
          description: `You now have ${newShares} referral(s). Keep sharing!`,
        });
      }
    }, 1500); // Simulate network delay
  };

  const copyToClipboard = () => {
    if (!navigator.clipboard) {
        toast({
            variant: "destructive",
            title: "Clipboard not available",
            description: "Please copy the link manually.",
        });
        return;
    }
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied to clipboard!",
      description: "You can now share your referral link.",
    });
  };

  const openShareDialog = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4 fill-current">
        <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486-.137-.05-.282-.075-.427.05-.145.124-.553.69-.678.832-.126.142-.25.162-.474.05-.224-.112-1.041-.384-1.983-1.22-.734-.658-1.22-1.47-1.365-1.722-.145-.251-.019-.387.099-.512.106-.112.239-.28.358-.425.12-.145.164-.25.24-.418.075-.168.038-.313-.012-.437-.05-.124-.474-1.134-.65-1.55-.174-.415-.35-.357-.474-.357-.112 0-.25.018-.386.018-.137 0-.357.05-.537.248-.18.2-.69.664-.69 1.613 0 .948.707 1.868.81 2.01.102.14.935 1.516 2.262 2.11.314.143.564.227.755.287.348.107.653.092.895-.05.27-.16.88-.36.99-.723.11-.36.11-.67.075-.773-.037-.103-.137-.163-.296-.31zM12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/>
    </svg>
  );

  return (
    <div className="w-full space-y-4 pt-4 text-left">
      <CardHeader className="p-0">
        <CardTitle className="text-xl font-bold">Share to Continue</CardTitle>
        <CardDescription>
          Share with {REFERRAL_GOAL} friends to unlock your reward. Click "Check Progress" to simulate receiving referrals.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 space-y-4">
        <div>
          <Progress value={progress} className="w-full h-3" />
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {shares} of {REFERRAL_GOAL} referrals complete
          </p>
        </div>
        <div className="space-y-2">
            <p className="text-sm font-medium">Your referral link</p>
            <div className="flex gap-2">
                <Input value={referralLink} readOnly className="text-muted-foreground" />
                <Button variant="outline" size="icon" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4" />
                </Button>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Button onClick={() => openShareDialog(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`)}>
            <Facebook className="mr-2" /> Facebook
          </Button>
          <Button onClick={() => openShareDialog(`https://twitter.com/intent/tweet?text=Check%20this%20out!&url=${encodeURIComponent(referralLink)}`)}>
            <Twitter className="mr-2" /> Twitter
          </Button>
           <Button onClick={() => openShareDialog(`https://api.whatsapp.com/send?text=Check%20this%20out!%20${encodeURIComponent(referralLink)}`)} className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
            <WhatsAppIcon />
            WhatsApp
          </Button>
          <Button variant="secondary" onClick={handleCheckReferrals} disabled={isChecking}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isChecking ? 'animate-spin' : ''}`} />
            {isChecking ? "Checking..." : "Check Progress"}
          </Button>
        </div>
      </CardContent>
    </div>
  );
}


export default function ScorePage() {
  const router = useRouter();
  const { score, mbReward, resetQuiz, answers } = useQuiz();
  const [referralsComplete, setReferralsComplete] = useState(false);

  useEffect(() => {
    // If user lands here without answering, redirect to home
    if (Object.keys(answers).length === 0) {
      router.replace('/');
    }
  }, [answers, router]);
  
  const handleReset = () => {
    resetQuiz();
    router.push('/');
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="items-center">
            <div className="p-4 bg-accent/20 rounded-full mb-4">
                <Trophy className="w-12 h-12 text-accent" />
            </div>
          <CardTitle className="text-3xl font-bold font-headline text-primary">
            Quiz Result
          </CardTitle>
          <CardDescription className="text-lg">
            Here is how you performed!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-secondary rounded-lg">
            <p className="text-sm font-medium text-muted-foreground">YOUR SCORE</p>
            <p className="text-6xl font-bold text-primary">{score}%</p>
          </div>
          <div className="flex items-center justify-center text-2xl font-semibold text-foreground">
            <Gift className="w-8 h-8 mr-3 text-accent" />
            <p>You've won <span className="text-accent font-bold">{mbReward} MB</span> of data!</p>
          </div>
          {!referralsComplete && <ReferralSection onComplete={() => setReferralsComplete(true)} />}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" onClick={handleReset} className="w-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          {referralsComplete && (
            <Link href="/claim" passHref className="w-full">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </main>
  );
}
