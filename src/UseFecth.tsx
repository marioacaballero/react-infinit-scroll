import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PhotoType } from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export function useFetch() {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [page, setPage] = useState<number>(0);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setPage(page + 1);
      fetch(`https://pixabay.com/api/?key=${API_KEY}&page=${page + 1}`)
        .then((response) => response.json())
        .then((data) => {
          setPhotos([...photos, ...data.hits]);
        });
    }
  }, [inView]);

  return { photos, ref };
}
