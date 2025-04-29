"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

interface DownloadCardProps {
  title: string;
  description: string;
  pdfUrl: string;
  fileName?: string;
}

export const BookCard: React.FC<DownloadCardProps> = ({
  title,
  description,
  pdfUrl,
  fileName,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName || "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden hover:border-black shadow-lg m-4">
      <CardContent className="flex items-center justify-between p-4">
        <h3 className="text-lg font-semibold mx-3">{title}</h3>
        <Image
          src="/images/cover-arabinesia.jpg"
          alt="arabinesia-logo"
          width={60}
          height={60}
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 bg-gray-200">
        <Button
          onClick={handleDownload}
          className="hover:bg-brand-primary hover:text-white border-gray-600"
          variant="outline"
        >
          Download PDF
        </Button>
        <Download className="text-gray-500" />
      </CardFooter>
    </Card>
  );
};
