"use client";

import React, { useState } from 'react';
import { Play } from 'lucide-react'; // Assuming lucide-react is available, or I'll use standard text/svg

const tracks = [
    {
        id: "6ZKFXFWoWhkz0xk8eRj4DK",
        url: "https://open.spotify.com/embed/track/6ZKFXFWoWhkz0xk8eRj4DK?utm_source=generator",
        label: "Mars IPNU"
    },
    {
        id: "1daJcoZ7aAUUWRbrC7CCh6",
        url: "https://open.spotify.com/embed/track/1daJcoZ7aAUUWRbrC7CCh6?utm_source=generator",
        label: "Mars IPPNU"
    },
    {
        id: "1POBeyBI3SscEUvLKf0jfP",
        url: "https://open.spotify.com/embed/track/1POBeyBI3SscEUvLKf0jfP?utm_source=generator",
        label: "Pelajar NU Ciamis"
    }
];

export function SpotifyPlaylist() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    return (
        <div className="w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Playlist 
                </h3>
            </div>

            <div className="p-4">
                <iframe
                    key={tracks[currentTrackIndex].id}
                    style={{ borderRadius: "12px" }}
                    src={tracks[currentTrackIndex].url}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
                    {tracks.map((track, index) => (
                        <button
                            key={track.id}
                            onClick={() => setCurrentTrackIndex(index)}
                            className={`flex items-center gap-4 p-4 text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 ${currentTrackIndex === index
                                ? "bg-slate-100 dark:bg-slate-900 border-l-4 border-l-green-500"
                                : "border-l-4 border-l-transparent"
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${currentTrackIndex === index
                                ? "bg-green-500 text-white"
                                : "bg-slate-200 dark:bg-slate-800 text-slate-500"
                                }`}>
                                {index + 1}
                            </div>
                            <div className="flex-1">
                                <span className={`font-medium block ${currentTrackIndex === index
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-slate-700 dark:text-slate-300"
                                    }`}>
                                    {track.label}
                                </span>
                            </div>
                            {currentTrackIndex === index && (
                                <span className="text-green-500 text-xs font-bold px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
                                    Now Playing
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
