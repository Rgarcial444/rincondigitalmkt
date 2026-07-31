import { useEffect, useState } from "react";
import { getVisitCount, recordVisit } from "@/lib/visit";

export function VisitCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const key = "__rd_visited";

    const run = async () => {
      try {
        if (sessionStorage.getItem(key)) {
          const c = await getVisitCount();
          if (!cancelled) setCount(c);
        } else {
          sessionStorage.setItem(key, "1");
          const c = await recordVisit();
          if (!cancelled) setCount(c);
        }
      } catch (err) {
        void err;
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return <span className="text-xs leading-none text-white/50">{count}</span>;
}
