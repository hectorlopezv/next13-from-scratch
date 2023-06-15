"use client";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorUserPage({ error, reset }: Props) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return <div>ErrorUserPage</div>;
}
