import Image from "next/image";

import getBase64 from "@/lib/getBase64";
import CommentSVG from "@/components/svg/CommentSVG";
import LikeSVG from "@/components/svg/LikeSVG";

export default async function ImagePostProfile({
  linkImg,
  classDiv,
  classImg,
  like,
  comment,
}: {
  linkImg: string;
  classDiv: string;
  classImg: string;
  like: string;
  comment: string;
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
        <div className="h-10 w-10 z-[500] icon invisible">
          <LikeSVG like={like} color="#FFFFFF" />
        </div>
        <div className="h-10 w-10 z-[500] icon invisible">
          <CommentSVG comment={comment} color="#FFFFFF" />
        </div>
      </div>
    </>
  );
}
