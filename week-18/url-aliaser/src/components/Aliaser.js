import { useState } from "react";
import { isValidUrl } from "../utils/utils.js";
import { db } from "../App.js";

const Aliaser = () => {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidUrl(url) === true) {
      setError("");
      let generatedSecreCode = randomIntFromInterval(1000, 9999);

      const formData = { url, alias, hitCount: 0, generatedSecreCode };

      db.collection("links")
        .doc()
        .set(formData)
        .then(() => {
          console.log("Document successfully written!");
          setError(false);
          setSuccess(true);
          setSecretCode(generatedSecreCode);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
          setSuccess(false);
          setError(error);
        });
    } else {
      setError("Nem megfelelő formátum");
    }
  };
  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <h1>URL aliaser</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <label htmlFor="url-input">URL</label>
          <input
            className="form-control"
            type="text"
            name="url-input"
            id="url-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <label htmlFor="alias-input">Alias</label>
          <input
            className="form-control"
            type="text"
            name="alias-input"
            id="alias-input"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            required
          />
          <button type="submit" className="mt-3 btn-primary">
            Mentés
          </button>
        </form>
        {error && (
          <div className="mt-3 alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-3 alert alert-success" role="alert">
            Sikeres mentés, a törléshez szükséges kód: {secretCode}
          </div>
        )}
      </div>
    </>
  );
};

export default Aliaser;
