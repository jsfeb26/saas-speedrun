import { LogoIcon } from "@/components/logo";
import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<LogoIcon size={180} />, {
    ...size,
  });
}
