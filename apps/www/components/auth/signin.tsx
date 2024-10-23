"use client";
import { signin, signinWithOAuth } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { GitHubLogo, GoogleLogoColored } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToggle } from "@/hooks/useToggle";
import { SignInFormData, signInSchema } from "@/utils/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Provider } from "@supabase/supabase-js";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const callbackForDesktopApp = searchParams?.get("callback") ?? "";

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (data: SignInFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);

      const response = await signin(formData, callbackForDesktopApp);
      if (response?.error) {
        setErrorMessage(response.error);
      } else {
        form.reset();
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOAuthSignIn = async (provider: Provider) => {
    setErrorMessage(null);
    try {
      await signinWithOAuth(provider, callbackForDesktopApp);
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  const [isPasswordVisible, togglePasswordVisibility] = useToggle(false);

  return (
    <section className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pb-20 md:pt-40">
          <div className="max-w-3xl pb-10 mx-auto text-3xl text-center md:pb-17 lg:text-4xl">
            <h1 className="h1">Welcome back</h1>
          </div>

          <div className="max-w-sm mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOAuthSignIn("google");
              }}
            >
              <Button
                type="submit"
                size="lg"
                variant="authgroup"
                className="relative flex items-center w-full px-0 rounded-md"
              >
                <GoogleLogoColored className="w-4 h-4 mx-1 bg-background text-foreground shrink-0" />
                <span className="">Sign in with Google</span>
              </Button>
            </form>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOAuthSignIn("github");
              }}
            >
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 mt-3">
                  <Button
                    type="submit"
                    size="lg"
                    variant="authgroup"
                    className="relative flex items-center w-full px-0 rounded-md"
                  >
                    <GitHubLogo className="w-4 h-4 mx-1 text-gray-700 shrink-0" />
                    <span className="">Sign in with GitHub</span>
                  </Button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div
                className="mr-3 border-t border-gray-400 border-dotted grow"
                aria-hidden="true"
              />
              <div className="text-gray-400">Or, sign in with your email</div>
              <div
                className="ml-3 border-t border-gray-400 border-dotted grow"
                aria-hidden="true"
              />
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSignIn)}
                className="space-y-4"
              >
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="helloworld@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Label className="flex items-center">
                  <Checkbox
                    className="rounded"
                    checked={isPasswordVisible}
                    onCheckedChange={togglePasswordVisibility}
                  />
                  <span className="ml-2 text-gray-600 cursor-pointer">
                    Show Password
                  </span>
                </Label>
                <div className="flex justify-between">
                  <Label className="flex items-center">
                    <Checkbox className="rounded" />
                    <span className="ml-2 text-gray-600 cursor-pointer">
                      Keep me signed in
                    </span>
                  </Label>
                  <Link
                    href="/reset-password"
                    className="text-gray-600 transition duration-150 ease-in-out"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-md"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>

                {errorMessage && (
                  <p className="text-center text-red-500">{errorMessage}</p>
                )}
              </form>
            </Form>

            <div className="mt-6 text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-gray-800 transition duration-150 ease-in-out hover:text-primary-800"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
