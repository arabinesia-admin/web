"use client";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import YouTube from "react-youtube";
import { useState } from "react";
import { DialogContent } from "./ui/dialog";
import { CheckCircle, CircleDashed } from "lucide-react";
import { useProfileStore } from "@/lib/store";
import { updateWatchProgress } from "@/actions/action";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  youtubeVideoId: string;
  isCompleted: boolean;
  videoId: string;
  updateLink: boolean;
}

export function VideoCard({
  title,
  description,
  thumbnailUrl,
  youtubeVideoId,
  isCompleted,
  videoId,
  updateLink,
}: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = useProfileStore();

  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-xl ">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <a className="block relative w-full h-40">
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover"
            sizes="425px"
            layout="fill"
            loading="lazy"
          />
        </a>
        <DialogContent className="sm:max-w-[425px]">
          <YouTube
            videoId={youtubeVideoId}
            opts={{
              width: "100%",
              height: "300",
              playerVars: {
                autoplay: 1,
                rel: 0,
              },
            }}
          />
        </DialogContent>
      </Dialog>
      <CardContent className="px-4">
        <h3 className="text-lg font-semibold my-2">{title}</h3>
        <p className="text-sm text-gray-600 my-2">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-2 bg-gray-100">
        {/* Cek isCompleted to avoid update unusual data */}
        {updateLink === true ? (
          <Button
            onClick={() => {
              if (profile) {
                updateWatchProgress(profile.id, videoId + 1), setIsOpen(true);
              }
            }}
            className="hover:bg-brand-primary hover:text-white border-gray-600"
            variant="outline"
          >
            Play Video
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
            className="hover:bg-brand-primary hover:text-white border-gray-600"
            variant="outline"
          >
            Play Video
          </Button>
        )}
        {isCompleted === true ? (
          <CheckCircle className="text-green-500" />
        ) : (
          <CircleDashed className="text-gray-500" />
        )}
      </CardFooter>
    </Card>
  );
}
