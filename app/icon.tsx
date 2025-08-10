import { ImageResponse } from "next/og";
import { LogoIcon } from "@/components/logo";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<LogoIcon size={32} />, {
    ...size,
  });
}
