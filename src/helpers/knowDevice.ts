import { useMediaQuery } from "@react-hook/media-query";

export const isMobile = (): boolean => {
  const isMobileQuery = useMediaQuery("(max-width: 760px)");
  return isMobileQuery;
};
