"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PresentePage() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenPresent = () => {
    setIsOpen(true);
    audioRef.current?.play();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex flex-col items-center justify-center p-4">
      <audio ref={audioRef} autoPlay loop>
        <source src="/music/music.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      {!isOpen ? (
        <div className="text-center">
          <svg
            className="w-64 h-64 mx-auto mb-8"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="20" width="80" height="70" fill="#FF69B4" />
            <rect x="10" y="20" width="80" height="15" fill="#FF1493" />
            <rect x="45" y="0" width="10" height="100" fill="#FF1493" />
            <rect x="0" y="45" width="100" height="10" fill="#FF1493" />
          </svg>
          <Button
            onClick={handleOpenPresent}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Abrir Presente
          </Button>
        </div>
      ) : (
        <Card className="w-full max-w-3xl bg-white/90 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">
              Parabéns FLAVIN BYOTLA! Muitos anos de vida!
            </h1>
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img
                            src={`/images/${index + 1}.jpg`}
                            alt={`Imagem ${index + 1}`}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
