"use client";
import { getUserSequence, getVideos } from "@/actions/action";
import { VideoCard } from "@/components/video-card";
import { YoutubeVideos } from "@/types/type";
import { useEffect, useState } from "react";
import CustomLoading from "./ui/custom-loading";
import { useProfileStore } from "@/lib/store";

export const RenderVideos = () => {
  const [videos, setVideos] = useState<YoutubeVideos[]>([]);
  const [currentVideo, setCurrentVideo] = useState<YoutubeVideos[]>([]);
  const [watchedVideos, setWatchedVideos] = useState<YoutubeVideos[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { profile } = useProfileStore();

  useEffect(() => {
    const fetchVideos = async () => {
      if (profile) {
        setLoading(true);
        try {
          const { data: sequenceData, success } = await getUserSequence(
            profile.id
          );
          if (success === false) {
            setError("Error fetching videos. Please try again later1");
            return;
          }

          const { data: fetchedVideos, error: videosError } = await getVideos(
            profile.meeting
          );
          if (videosError) {
            setError("Error fetching videos. Please try again later2");
            return;
          }

          const allVideos = fetchedVideos.map((video: YoutubeVideos) => ({
            id: video.id,
            title: video.title,
            description: video.description,
            thumbnail_url: video.thumbnail_url,
            video_id: video.video_id,
            watched: false,
            sequence: video.sequence,
          }));

          // Corrected filtering logic
          if (sequenceData) {
            const unWatchedVideos = allVideos.filter(
              (video) => video.sequence > sequenceData.video_sequence
            );
            const watchedVideos = allVideos.filter(
              (video) => video.sequence < sequenceData.video_sequence
            );
            const currentVideo = allVideos.filter(
              (video) => video.sequence === sequenceData.video_sequence
            );
            setVideos(unWatchedVideos);
            setWatchedVideos(watchedVideos);
            setCurrentVideo(currentVideo);
          }
        } catch (fetchError) {
          setError(`Error fetching videos. Please try again later.`);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchVideos();
  }, [profile]);

  if (loading) {
    return <CustomLoading />;
  }

  if (error) {
    return (
      <p className="flex justify-center items-center text-red-500">{error}</p>
    );
  }

  return (
    <div dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {watchedVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            description={video.description}
            thumbnailUrl={video.thumbnail_url}
            youtubeVideoId={video.video_id}
            isCompleted={true}
            videoId={video.id}
            updateLink={false}
          />
        ))}
        {currentVideo.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            description={video.description}
            thumbnailUrl={video.thumbnail_url}
            youtubeVideoId={video.video_id}
            isCompleted={false}
            videoId={video.id}
            updateLink={true}
          />
        ))}
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            description={video.description}
            thumbnailUrl={video.thumbnail_url}
            youtubeVideoId={video.video_id}
            isCompleted={false}
            videoId={video.id}
            updateLink={false}
          />
        ))}
      </div>
    </div>
  );
};
