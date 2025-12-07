import Image from 'next/image';
import CountdownTimer from '@/components/countdown-timer';

export default function Home() {
  const targetDate = new Date('2026-01-09T00:00:00');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      {/* Mobile-sized container with a 9:16 aspect ratio */}
      <div className="relative w-full max-w-sm aspect-[9/16] overflow-hidden rounded-2xl shadow-2xl bg-background">
        <Image
          src={'/images/Comingsoon_Bg.webp'}
          alt={'Coming soon background'}
          fill
          className="object-cover"
          priority
        />



        {/* Content container */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
                    <div className="flex-grow flex flex-col items-center justify-end pb-24">
                      <div className="mt-8">
              <CountdownTimer targetDate={targetDate} size="small" />
            </div>
          </div>
          <footer className="w-full text-custom-text text-sm">
            <p>©pcipnuippnucms</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
