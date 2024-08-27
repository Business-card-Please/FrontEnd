import { NextRouter } from "next/router";

export interface LoginFastRouteInterFace {
  text: string;
  isLined: boolean;
  routeMethod: NextRouter;
}

export interface LoginInterface {
  nickname: string;
  password: string;
}
