export default function CommentSVG({ comment }: { comment: string }) {
  return (
    <>
      <svg
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        className="w-full h-full">
        <title>{comment}</title>
        <path
          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"></path>
      </svg>
    </>
  );
}
