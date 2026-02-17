export const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const withBase = (path: string) =>
    `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path.startsWith("/") ? path : "/" + path}`;
