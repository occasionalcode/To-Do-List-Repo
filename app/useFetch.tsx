import next from "next";
import { revalidatePath } from "next/cache";
import React from "react";
import { useEffect, useState } from "react";

const useFetch = ({ url }: any) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if !pending return null
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not Fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch Aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortCont.abort();
  }, [isPending]);

  return { data, isPending, error };
};

export default useFetch;
