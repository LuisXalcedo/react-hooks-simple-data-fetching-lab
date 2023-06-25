// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resposnse) => resposnse.json())
      .then((data) => setDog(data.message));
  }, []);

  if (!dog) {
    return <p>Loading...</p>;
  }
  return <img src={dog} alt="A Random Dog" />;
}

export default App;
