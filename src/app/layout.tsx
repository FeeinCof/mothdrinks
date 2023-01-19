"use client";
import { useState } from "react";
import "./globals.css";
import { AgeGateConfirmationBox } from "@/components";
interface ReactNode {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ReactNode) {
  // get session storage and convert to boolean
  const age_confirmed =
    String(sessionStorage.getItem("age_confirmed")?.toLowerCase()) == "true";

  const [ageConfirmed, setAgeConfirmed] = useState<boolean>(age_confirmed);
  const ageConfirming = (data: boolean = false) => {
    if (data) {
      sessionStorage.setItem("age_confirmed", "true");
      setAgeConfirmed(data);
    } else {
      document.location.href = "https://www.google.com/";
    }
  };
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {ageConfirmed ? (
          children
        ) : (
          <AgeGateConfirmationBox
            onClick={(data: boolean) => ageConfirming(data)}
          />
        )}
      </body>
    </html>
  );
}
