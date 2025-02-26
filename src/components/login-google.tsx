"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { AlertDialog } from "./ui/alert-dialog";

const LogInWithGoogle = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={() => setIsAlertOpen(true)}
      >
        {" "}
        <Image
          src="/svg/google.svg"
          alt="google"
          width={20}
          height={20}
          className="mr-2"
        />
        Login with Google
      </Button>
      <AlertDialog
        isOpen={isAlertOpen}
        setIsOpen={setIsAlertOpen}
        onConfirm={async () => {
          setIsAlertOpen(false);
        }}
        title="Under Maintenance"
        description="We apologize for the inconvenience. The Google Provider Login feature is currently under maintenance. Please try again later."
      />
    </>
  );
};

export default LogInWithGoogle;
