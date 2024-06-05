import Image from "next/image";

export default function ImagenesCelulares() {
  return (
    <div className="container z-20 flex flex-row justify-center items-center">
      <Image
        src="/sitio-movil-2.png"
        className="w-96 h-auto object-cover"
        alt="Demo del sitio web en movil"
        width={239}
        height={498}
      />
      <Image
        src="/sitio-movil.png"
        className="w-full h-auto object-cover"
        alt="Demo del sitio web en movil"
        width={400}
        height={623}
      />
    </div>
  );
}
