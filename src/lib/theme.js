/**
 * Karmyug brand palette — single source of truth for places that need an
 * actual JS color value (Cal.com's cssVarsPerTheme config, inline styles),
 * as opposed to Tailwind classNames, which use the same hex values directly
 * as literal arbitrary classes (e.g. bg-[#2E5AA7]) so the JIT compiler can
 * pick them up.
 */
export const BRAND = {
  citrusZest: "#FFA62B", // accents, badges, CTAs on dark surfaces
  seaBreeze: "#86C5FF", // secondary highlight, borders
  amalfiTile: "#2E5AA7", // primary brand blue
  amalfiTileHover: "#234A8B", // primary hover (matches site-wide hover shade)
  creamGelato: "#F8E6A0", // warm soft backgrounds
  navyDeep: "#0F2545", // dark panel background
  navyPanel: "#132B54", // dark panel secondary surface
  navyBorder: "#1F3B66", // dark panel borders
  mutedOnDark: "#9FB3D9", // muted text on dark navy surfaces
};