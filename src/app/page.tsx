import Image from 'next/image';
import CountdownTimer from '@/components/countdown-timer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const targetDate = new Date('2026-01-09T00:00:00');
  const backgroundImage = PlaceHolderImages.find(p => p.id === 'coming-soon-background');

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          fill
          className="object-cover -z-20 opacity-30"
          data-ai-hint={backgroundImage.imageHint}
          priority
        />
      )}

      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight font-headline uppercase" style={{ textShadow: '0 2px 10px hsl(var(--background))' }}>
          Coming Soon
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="mt-12 md:mt-16">
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
       <footer className="absolute bottom-4 text-center w-full text-foreground/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Countdown Landing. All rights reserved.</p>
      </footer>
    </main>
  );
}
