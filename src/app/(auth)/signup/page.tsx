import { SignUpForm } from "@/components/form/signup-form";
import Navbar from "@/components/shared/navbar";

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full md:max-w-3xl">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
