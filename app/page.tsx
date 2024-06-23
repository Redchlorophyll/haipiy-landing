import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className={"w-full h-[100vh] overflow-hidden"}>
        <Image
          src="/main-banner.jpg"
          alt={"main banner illustration"}
          layout="fill"
          objectFit={"cover"}
        />
      </div>
      <div className={"absolute translate-y-[45vh] md:translate-y-[40vh]"}>
        <Image
          src={"/haipiy-main.png"}
          alt={"haipiy logo"}
          width={300}
          height={400}
        />
      </div>
    </main>
  );
}
