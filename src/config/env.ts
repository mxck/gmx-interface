import { PRODUCTION_PREVIEW_KEY } from "./localStorage";

export const UI_VERSION = "1.4";

export const IS_TOUCH = "ontouchstart" in window;

export function isDevelopment() {
  return true;
}

export function isLocal() {
  return window.location.host?.includes("localhost");
}
