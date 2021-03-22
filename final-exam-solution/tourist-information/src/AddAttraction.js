import { useState, useEffect } from "react";
import db from "./firebase/db";

const AddAttraction = () => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [settlement, setSettlement] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [note, setNote] = useState("");
  const [attractionIDs, setAttractionIDs] = useState("");

  useEffect(() => {
    db.collection("attractions")
      .get()
      .then((ref) => {
        ref.docs.forEach((doc) => {
          const attraction = doc.data();
          setAttractionIDs((previousAttractions) => [
            ...previousAttractions,
            attraction,
          ]);
        });
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, settlement, address, category, price, note };

    db.collection("attractions")
      .doc(`${attractionIDs.length}`)
      .set(formData)
      .then(() => {
        console.log("Document successfully written!");
        setSuccess(true);
        setName("");
        setSettlement("");
        setAddress("");
        setPrice(0);
        setNote("");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        setSuccess(false);
      });
  };

  return (
    <main className={"container"}>
      <h2>Új látványosság felvitele</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="form-group">
          <label htmlFor="name">Megnevezés</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="invalid-feedback">Hiányzó érték</div>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="settlement">Település</label>
          <input
            type="text"
            className="form-control"
            id="settlement"
            value={settlement}
            onChange={(e) => setSettlement(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="address">Cím</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="category">Kategória</label>
          <select
            className="form-control"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option>múzeum</option>
            <option>étterem</option>
            <option>építmény</option>
          </select>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="price">Ár</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="note">Megjegyzés</label>
          <textarea
            id="note"
            cols="30"
            rows="10"
            maxLength="1000"
            className="form-control"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Mentés
        </button>
      </form>
      {success && (
        <div className="mt-3 alert alert-success" role="alert">
          Sikeres mentés
        </div>
      )}
    </main>
  );
};

export default AddAttraction;
