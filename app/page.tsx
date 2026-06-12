import Image from "next/image";

export default function StaticPage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/assets/bg.png" alt="background" fill className="object-cover" />
      </div>
      <div className="absolute left-[25%] top-[18%]">
        <Image src="/assets/logo.png" width={175} height={0} className="h-auto" alt="background" />
      </div>
      <div className="absolute left-[38%] top-[21%]">
        <Image src="/assets/HACK@BROWN.png" width={600} height={0} className="h-auto" alt="background" />
      </div>
      <div className="absolute left-[38%] top-[33%]">
        <Image src="/assets/coming.png" width={600} height={0} className="h-auto" alt="background" />
      </div>
      <div className="absolute top-[52%] right-[-54.5%]">
        <Image src="/assets/background.png" width={1300} height={0} className="h-auto" alt="Left Image" />
      </div>
      <div className="absolute top-[52%] left-[0%]">
        <Image src="/assets/background.png" width={1300} height={0} className="h-auto" alt="Left Image" />
      </div>
      <div className="absolute top-[93%] left-[0%]">
        <Image src="/assets/train.png" width={3000} height={0} className="h-auto" alt="Right Image" />
      </div>
    </main>
  );
}
{/*BDRmono 2006*/ }