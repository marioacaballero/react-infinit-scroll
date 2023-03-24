import { useFetch } from "./UseFecth";
import "./App.css";
import { ChaoticOrbit } from "@uiball/loaders";

function App() {
  const { photos, ref } = useFetch();

  return (
    <div className="container">
      <h1>Infinite Scroll App</h1>
      <div className="photos">
        {photos.length ? (
          photos.map((photo) => (
            <img key={photo.id} alt={photo.type} src={photo.webformatURL} />
          ))
        ) : (
          <></>
        )}
      </div>
      <span ref={ref} className="loader">
        <ChaoticOrbit size={25} speed={1.5} color="black" />
      </span>
    </div>
  );
}

export default App;
