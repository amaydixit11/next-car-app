import Image from "next/image";
import { Lander } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Lander />
    </main>
  );
}
