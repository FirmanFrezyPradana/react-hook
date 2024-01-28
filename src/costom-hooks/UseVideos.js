/** @format */

import { useState, useEffect, useDebugValue } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
    useDebugValue(defaultSearchTerm,(s)=>slowFunction(s))
  //useDebugValue(slowFunction(defaultSearchTerm)); //jika dibuat seperti ini maka website akan lama dalam ngedebug inputan

  //   console.log(useDebugValue(defaultSearchTerm));
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
function slowFunction(value) {
  console.log("funcsi kuadrat");
  for (let i = 0; i < 200000000; i++) {}
  return value;
}
