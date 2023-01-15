import { create } from "@storybook/theming";
import logoUrl from "../public/logo.png";
export default create({
  base: "light",

  colorPrimary: "#fa884b",
  colorSecondary: "#fa884b",

  // Toolbar default and active colors
  barTextColor: "#403f3f",
  barSelectedColor: "#fa884b",
  barBg: "#F5FBFF",

  brandTitle: "Iotcore Vue Components",
  brandUrl: "https://cowlar.com/",
  brandImage: process.env.NODE_ENV === "production" ? logoUrl : "/logo.png",
  brandTarget: "_target",
});
