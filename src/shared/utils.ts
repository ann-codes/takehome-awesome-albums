import { useLocation } from "react-router";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function adjustImgSize(
  imgToResize: string,
  resizeFrom: string,
  resizeTo: string
) {
  const rgx = new RegExp(`${resizeFrom}x${resizeFrom}`, "i");
  return imgToResize.replace(rgx, `${resizeTo}x${resizeTo}`);
}
