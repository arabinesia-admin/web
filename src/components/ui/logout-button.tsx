"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialog } from "./alert-dialog";
import { createClient } from "@/utils/supabase/client";

export function LogoutButton() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleLogout = async () => {
    const supabase = await createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <>
      <Button variant="destructive" onClick={() => setIsAlertOpen(true)}>
        Logout
      </Button>
      <AlertDialog
        isOpen={isAlertOpen}
        setIsOpen={setIsAlertOpen}
        onConfirm={handleLogout}
        title="Confirm Logout"
        description="Are you sure you want to log out? You will be redirected to the login page."
      />
    </>
  );
}
