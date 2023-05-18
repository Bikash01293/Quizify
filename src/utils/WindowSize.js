
export default function useWindowSize() {
  if (typeof window !== "undefined") {
    return { width: 400, height: 800 };
  }
}
