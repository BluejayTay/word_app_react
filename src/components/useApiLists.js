import { useState, useEffect } from "react";
import axios from "axios";

export default function useApiLists() {
  const [apiLists, setApiLists] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    requestApiLists();

    async function requestApiLists() {
      setStatus("loading");
      axios.get(`http://localhost:3000/api/study_lists`).then((response) => {
        setApiLists(response.data);
      });
      setStatus("loaded");
    }
  }, []);
  console.log(apiLists);

  return [apiLists, status];
}
