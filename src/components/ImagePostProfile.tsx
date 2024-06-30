import Image from "next/image";

import getBase64 from "@/lib/getBase64";

export default async function ImagePostProfile({
  linkImg,
  classDiv,
  classImg,
}: {
  linkImg: string;
  classDiv: string;
  classImg: string;
}) {
  const dataPlaceholder = await getBase64(linkImg);

  return (
    <>
      <div className={classDiv}>
        <Image
          placeholder={dataPlaceholder}
          src={linkImg}
          className={classImg}
          fill={true}
          alt=""
        />
      </div>
    </>
  );
}
