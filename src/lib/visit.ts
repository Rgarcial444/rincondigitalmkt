import { createServerFn } from "@tanstack/react-start";

const state = globalThis as { __rdVisitCount?: number };

function read(): number {
  return typeof state.__rdVisitCount === "number" ? state.__rdVisitCount : 0;
}

export const getVisitCount = createServerFn({ method: "POST" }).handler(async () => read());

export const recordVisit = createServerFn({ method: "POST" }).handler(async () => {
  const next = read() + 1;
  state.__rdVisitCount = next;
  return next;
});
