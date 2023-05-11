import Image from "next/image";
import ThisCantBeReached from "../../Components/Home/ThisCantBeReached";

export default function Home() {
  return (
    <main>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
        <ThisCantBeReached />
      </div>
    </main>
  );
}
