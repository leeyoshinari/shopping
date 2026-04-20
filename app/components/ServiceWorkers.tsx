'use client';

import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
            console.log("SW registered:", reg);
        })
        .catch((err) => {
            console.error("SW failed:", err);
        });
    }
  }, []);

  return null;
}