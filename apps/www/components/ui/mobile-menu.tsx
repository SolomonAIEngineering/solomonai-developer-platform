"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { User } from "@supabase/supabase-js";
import {
  LogIn,
  LogOut,
  Menu,
  MoonStar,
  Settings,
  SquareArrowRight,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";

export default function MobileMenu({
  user,
  handleSignOut,
}: {
  user: User | null;
  handleSignOut: () => Promise<void>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const MobileNavItem = ({
    href,
    onClick,
    children,
  }: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <li>
      <Link
        href={href}
        className="block py-4 text-base font-medium rounded-md text-foreground"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-md hover:bg-secondary-300/10"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex w-[300px] flex-col justify-between sm:w-[400px]"
        >
          <div>
            <SheetHeader className="mb-4">
              <SheetTitle className="text-center">Solomon AI Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile menu">
              <ul className="space-y-1">
                <div className="mb-4 space-y-4">
                  {user ? (
                    <>
                      <div className="items-center hidden space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage
                            src={user.user_metadata.avatar_url}
                            alt={user.user_metadata.full_name || "User avatar"}
                          />
                          <AvatarFallback>
                            {user.email?.[0].toUpperCase() || "U"}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">
                          {user.user_metadata.full_name || user.email}
                        </span>
                      </div>
                      <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                        <Button
                          variant="outline"
                          className="justify-start w-full"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Dashboard
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="justify-start w-full"
                        onClick={() => {
                          handleSignOut();
                          setIsOpen(false);
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="https://app-business.solomon-ai.app"
                        onClick={() => setIsOpen(false)}
                      >
                        <Button
                          variant="outline"
                          className="justify-start w-full"
                        >
                          <LogIn className="w-4 h-4 mr-2" />
                          Sign in
                        </Button>
                      </Link>
                      <Link href="https://app-business.solomon-ai.app" onClick={() => setIsOpen(false)}>
                        <Button
                          variant="outline"
                          className="justify-start w-full mt-4"
                        >
                          <SquareArrowRight className="w-4 h-4 mr-2" />
                          Try Solomon AI
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
                <MobileNavItem href="/" onClick={() => setIsOpen(false)}>
                  Home
                </MobileNavItem>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="resources">
                    <AccordionTrigger>Resources</AccordionTrigger>
                    <AccordionContent>
                      <ul className="ml-4 space-y-1">
                        <MobileNavItem
                          href="/about"
                          onClick={() => setIsOpen(false)}
                        >
                          About
                        </MobileNavItem>
                        <MobileNavItem
                          href="https://engineering-docs.solomon-ai.app/"
                          onClick={() => setIsOpen(false)}
                        >
                          Documentation
                        </MobileNavItem>
                        <MobileNavItem
                          href="/blog"
                          onClick={() => setIsOpen(false)}
                        >
                          Blog
                        </MobileNavItem>

                        <MobileNavItem
                          href="/faq"
                          onClick={() => setIsOpen(false)}
                        >
                          FAQ
                        </MobileNavItem>
                        <MobileNavItem
                          href="/changelog"
                          onClick={() => setIsOpen(false)}
                        >
                          Changelog
                        </MobileNavItem>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <MobileNavItem href="/pricing" onClick={() => setIsOpen(false)}>
                  Pricing
                </MobileNavItem>
                <MobileNavItem
                  href="/desktop-download"
                  onClick={() => setIsOpen(false)}
                >
                  Download
                </MobileNavItem>
                <MobileNavItem
                  href="https://solomon-ai.betteruptime.com/"
                  onClick={() => setIsOpen(false)}
                >
                  Uptime
                </MobileNavItem>
              </ul>
            </nav>
          </div>
          <div className="pb-6 space-y-4 width-full">
            <div className="width-full">
              {mounted ? (
                <Button
                  variant="outline"
                  className="justify-center w-full"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? (
                    <>
                      <Sun strokeWidth={1} className="w-5 h-5" />
                      Light
                    </>
                  ) : (
                    <>
                      <MoonStar strokeWidth={1} className="w-5 h-5" />
                      Dark
                    </>
                  )}
                </Button>
              ) : null}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
