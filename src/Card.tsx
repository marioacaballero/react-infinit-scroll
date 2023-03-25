import { PhotoType } from "./types";

function Card({ type, webformatURL, pageURL }: PhotoType) {
  return (
    <a href={pageURL}>
      <img alt={type} src={webformatURL} />
    </a>
  );
}

export default Card;
