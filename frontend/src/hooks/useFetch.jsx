import { useState, useEffect } from "react";
import { useDashboardContext } from "../DashboardContext";

export const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setData } = useDashboardContext();
  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.result);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        setError("Something went wrong..");
      });
  }, [url]);

  return { loading, error };
};
