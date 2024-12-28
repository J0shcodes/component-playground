import { ComponentProps } from "@/types"

export const encodeState = (code: string, props: ComponentProps): string => {
  try {
    return btoa(JSON.stringify({ code, props }))
  } catch (error) {
    return ""
  }
}

export const decodeState = (
  hash: string,
): { code: string; props: ComponentProps } | null => {
  try {
    const decoded = atob(hash.slice(1))
    return JSON.parse(decoded)
  } catch (error) {
    return null
  }
}
