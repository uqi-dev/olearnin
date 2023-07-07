"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/ui/button";
import { Input } from "@/components/ui/ui/input";
import { joinEarlyAccess } from "@/lib/services/earlyaccess.service";
import React, { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const WaitlistModal = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await joinEarlyAccess(email);
      setSuccess(true);
    } catch (error: any) {
      console.log(error);
      window.alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-2 px-4 rounded-full bg-black/90 text-white text-sm">
          Early Access
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-1 items-center justify-center">
        <DialogTitle className="text-center">
          {success ? (
            <>You&apos;re added to our waitlist!!</>
          ) : (
            <>Join the waitlist</>
          )}
        </DialogTitle>
        <DialogDescription className="text-center">
          {success ? (
            <>You&apos;ll get an email when we launch. Stay tuned</>
          ) : (
            <>Get notified when we launch!!</>
          )}
        </DialogDescription>
        {success ? (
          <div className="flex items-center justify-center flex-col">
            <Sparkles size={90} className="text-yellow-500 mt-5" />
            <div className="flex text-xs mt-6 items-center gap-5">
              Follow us on:
              <Link href="https://github.com/uqi-dev/olearnin" target="__blank">
                <GitHubLogoIcon width={15} height={15} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/olearnin"
                target="__blank"
              >
                <LinkedInLogoIcon width={15} height={15} />
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-10/12 mt-4 text-sm">
            <p className="mb-2">Email Address</p>
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email Address"
            />
            <Button
              disabled={loading}
              className="mt-7 hover:bg-orange-600 w-full"
              type="submit"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Join
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
