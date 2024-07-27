import { useEffect, useState } from "react";

function useBenchmark() {
  const [takenTime, setTakenTime] = useState<number | undefined>();

  useEffect(() => {
    (async () => {
      const before = performance.now();
      const a = await fetch("/api/hello");
      const after = performance.now();
      console.log("Time taken to fetch /api/hello", after - before);
      setTakenTime(after - before);
    })();
  }, []);
  return {
    takenTime,
  };
}

export default function Test() {
  const { takenTime } = useBenchmark();
  return (
    <div className="">
      test page
      {takenTime && <div className="">taken time: {takenTime}ms</div>}
    </div>
  );
}
