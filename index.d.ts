import { Tween, Timeline } from "gsap";

declare module "scrollmagic-plugin-gsap";

export interface ScrollMagicPluginGsap {
    (ScrollMagic: any, Tween: Tween, Timeline: Timeline): void;
}
