"use client";

/**
 * "Watch" button that opens a project video in a native <dialog>.
 *
 * The native element gives focus trapping, Esc-to-close and a backdrop for free.
 * The <video> uses preload="none" with a poster, so nothing is downloaded until
 * the visitor presses the button.
 */

import { useRef } from "react";
import { Play, X } from "lucide-react";
import type { ProjectVideo as ProjectVideoData } from "@/content/site";

export default function ProjectVideo({
  video,
  title,
}: {
  video: ProjectVideoData;
  title: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  function open() {
    dialogRef.current?.showModal();
    // Called from a click, so playback with sound is allowed.
    videoRef.current?.play().catch(() => {
      /* Autoplay refused: the visitor can press play on the controls. */
    });
  }

  function handleClose() {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-brand-ink hover:underline"
      >
        <Play size={15} aria-hidden />
        {video.label}
      </button>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={(event) => {
          // A click on the backdrop targets the <dialog> itself.
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        aria-label={`${title}: ${video.label}`}
        className="m-auto w-[min(92vw,22rem)] overflow-hidden rounded-2xl border border-border-custom bg-bg-1 p-0 text-text-primary shadow-[var(--shadow-lift)] backdrop:bg-black/70"
      >
        <div className="relative">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            controls
            playsInline
            preload="none"
            className="block max-h-[85vh] w-full bg-black"
          >
            Your browser does not support embedded video.
          </video>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close video"
            className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
          >
            <X size={18} aria-hidden />
          </button>
        </div>
      </dialog>
    </>
  );
}
