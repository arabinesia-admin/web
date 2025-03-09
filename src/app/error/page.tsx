import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <Image
            src="/error-illustration.svg"
            alt="Error Illustration"
            width={250}
            height={250}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">Oops!</h1>
          <p className="text-xl text-emerald-600 mb-6">
            We can&apos;t seem to find the page you&apos;re looking for.
          </p>
          <p className="text-emerald-500 mb-8">
            Error code: 404 - Page Not Found
          </p>
          <div className="space-y-4">
            <Button
              asChild
              className="w-full bg-emerald-500 hover:bg-emerald-600"
            >
              <Link href="/">Go back home</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-50"
            >
              <Link href="/contact">Contact support</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
