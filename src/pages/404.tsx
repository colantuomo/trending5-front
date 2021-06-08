import Error from "next/error";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      location.pathname = "/";
    }, 1000);
  }, []);
  return <Error statusCode={404} />;
}
