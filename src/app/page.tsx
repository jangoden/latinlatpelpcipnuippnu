import Image from 'next/image';
import CountdownTimer from '@/components/countdown-timer';
import CurvedLoop from '@/components/CurvedLoop';

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
        <div className="relative z-10 flex h-full flex-col items-center justify-between p-4 text-center text-white">
          {/* CurvedLoop at the top */}
          <div className="w-full flex-shrink-0 flex justify-center pt-8">
            <CurvedLoop
              marqueeText="COMING SOON ✦ LATIN ✦ LATPEL ✦ REKAN ✦ REKANITA ✦ PC IPNU ✦ PC IPPNU ✦ CIAMIS ✦"
              speed={3}
              curveAmount={500}
              direction="right"
              interactive={true}
                                      className="custom-text-style text-custom-text"            />
          </div>

          {/* CountdownTimer at its previous lower position */}
          <div className="flex-grow flex flex-col items-center justify-end pb-24">
            <div>
              <CountdownTimer targetDate={targetDate} size="small" />
            </div>
          </div>
          <footer className="w-full text-custom-text text-sm">
            <p>©pcipnuippnucms2025</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
