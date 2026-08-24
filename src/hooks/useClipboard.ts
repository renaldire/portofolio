import { useEffect, useRef, useState } from "react";

type CopyStatus = "idle" | "copied" | "error";

export function useClipboard(resetAfterMs = 2200) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const copy = async (value: string) => {
    window.clearTimeout(timeoutRef.current);

    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    timeoutRef.current = window.setTimeout(() => setStatus("idle"), resetAfterMs);
  };

  return { copy, status } as const;
}
