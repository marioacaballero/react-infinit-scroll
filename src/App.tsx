import { ChaoticOrbit } from "@uiball/loaders";
import { useFetch } from "./UseFecth";
import Card from "./Card";
import "./App.css";

function App() {
  const { photos, ref } = useFetch();

  return (
    <div className="container">
      <h1>Infinite Scroll App</h1>
      <div className="photos">
        {photos.length ? (
          photos.map((photo) => (
            <Card
              key={photo.id}
              type={photo.type}
              pageURL={photo.pageURL}
              webformatURL={photo.webformatURL}
              id={photo.id}
            />
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
