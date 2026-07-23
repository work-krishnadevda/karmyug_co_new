import { getCalApi } from "@calcom/embed-react";
import { BRAND } from "@/lib/theme";

/**
 * Shared Cal.com theme/UI config.
 * Call this once from any component that mounts a <Cal /> embed
 * (via a useEffect with an empty dependency array), instead of
 * copy-pasting the theme block into every embed.
 */
export async function initCalUi() {
  const cal = await getCalApi();

  cal("ui", {
    theme: "dark",
    layout: "month_view",
    hideEventTypeDetails: true,

    styles: {
      branding: { brandColor: BRAND.amalfiTile },
    },

    cssVarsPerTheme: {
      dark: {
        "cal-brand": BRAND.amalfiTile,
        "cal-bg": BRAND.navyDeep,
        "cal-bg-emphasis": BRAND.navyPanel,
        "cal-text": "#ffffff",
        "cal-text-emphasis": "#ffffff",
        "cal-border-booker": BRAND.navyBorder,
        "cal-border-default": BRAND.navyBorder,
        "cal-border-subtle": BRAND.navyPanel,
        "cal-border-muted": BRAND.navyPanel,
        "cal-border-emphasis": BRAND.seaBreeze,
        "cal-border": BRAND.navyBorder,
        "cal-border-booker-width": "1px",
        "cal-radius": "18px",
      },
    },
  });

  return cal;
}