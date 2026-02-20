"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, Info, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";

export function NavMenu() {
    const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border border-primary/20 bg-card/50 backdrop-blur-sm">
          <Menu className="h-5 w-5 text-primary" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href="/about" passHref>
            <DropdownMenuItem>
                <Info className="mr-2 h-4 w-4" />
                <span>{t('nav_about')}</span>
            </DropdownMenuItem>
        </Link>
        <Link href="/contact" passHref>
            <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>{t('nav_contact')}</span>
            </DropdownMenuItem>
        </Link>
        <Link href="/privacy-policy" passHref>
            <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>{t('nav_privacy_policy')}</span>
            </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
