"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    //log error to logging service
    console.log("error", error);
  }, [error]);

  return (
    <div>
      <h2>something is wrong</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
