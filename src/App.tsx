import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type photoType = {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
};

const API_KEY = "34684762-5d2200e812fc589270e134ff2";

function App() {
  const [photos, setPhotos] = useState<photoType[]>([]);
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

  return (
    <div>
      <div>
        {photos.length &&
          photos.map((photo) => (
            <img key={photo.id} alt={photo.type} src={photo.webformatURL} />
          ))}
      </div>
      <span ref={ref}>loading...</span>
    </div>
  );
}

export default App;
