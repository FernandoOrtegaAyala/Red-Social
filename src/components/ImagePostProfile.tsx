import Image from "next/image";

import getBase64 from "@/lib/getBase64";

export default async function ImagePostProfile({
  linkImg,
}: {
  linkImg: string;
}) {
  const dataPlaceholder = await getBase64(linkImg);

  return (
    <>
      <div className="relative w-1/3 h-[150px] md:h-[250px] lg:h-[500px] overflow-hidden">
        <Image
          placeholder={dataPlaceholder}
          src={linkImg}
          className="p-1 object-cover"
          fill={true}
          alt=""
        />
      </div>
    </>
  );
}
