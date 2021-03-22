import { useState, useEffect } from "react";
import db from "./firebase/db";
import { useHistory } from 'react-router-dom'

export default function Attractions() {
  const [attractions, setAttractions] = useState([]);
  const [selectedCity, setSelectedCity] = useState('')
  const history = useHistory()

  const uniqueCities = [...new Set(attractions.map(item => item.settlement))];

  useEffect(() => {
    db.collection("attractions")
      .get()
      .then((ref) => {
        ref.docs.forEach((doc) => {
          const attraction = doc.data();
          setAttractions((previousAttractions) => [
            ...previousAttractions,
            attraction,
          ]);
        });
      });
  }, []);

  const handleAddClick = () => {
    history.push('/attractions/new')
  }
  
  useEffect(() => {
    db.collection("attractions").where("settlement", "==", `${selectedCity}`)
    .get()
    .then((ref) => {
      ref.docs.forEach((doc) => {
        const attraction = doc.data();
        setAttractions(() => [
          attraction
        ]);
      });
    });
  }, [selectedCity]);

  return (
    <main className={"container"}>
      <h1>Látványosságok</h1>

      <button className="btn btn-primary mb-2" onClick={handleAddClick}>Felvitel</button>

      <form>
      <label htmlFor="city-selector">Város</label>
      <select onChange={(e) => setSelectedCity(e.target.value)} id="city-selector" className="form-control mb-2">
        <option value={selectedCity}>Mindegyik</option>
        {uniqueCities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
      </form>
      

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Megnevezés</th>
            <th>Település</th>
            <th>Cím</th>
            <th>Kategória</th>
            <th>Ár</th>
            <th>Megjegyzés</th>
            <th style={{ width: 200 }}>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {attractions.map((attraction, index) => (
            <tr key={index}>
              <td>{attraction.name}</td>
              <td>{attraction.settlement}</td>
              <td>{attraction.address}</td>
              <td>{attraction.category}</td>
              <td>{attraction.price}</td>
              <td>{attraction.note}</td>
              <td>
                <button className="btn btn-primary">Módosítás</button>
                <button className="btn btn-danger">Törlés</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
