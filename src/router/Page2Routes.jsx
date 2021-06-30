import { Page2 } from "../Page2";
import { UrlPramerter } from "../UrlPramerters";

export const Page2Routs = [
  {
    path: "",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlPramerter />
  }
];
