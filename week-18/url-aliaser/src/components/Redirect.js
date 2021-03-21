import { useEffect, useState } from "react";
import firebase from "firebase";
import { useRouteMatch } from "react-router";
import { db } from "../App.js";

const Redirect = () => {
  let match = useRouteMatch();
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    db.collection("links")
      .where("alias", "==", `${match.params.alias}`)
      .get()
      .then((data) => {
        const result = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUrl(result[0].url);
        updateHitCount(result[0].id);

        setTimeout(() => {
          window.location.href = `${result[0].url}`;
        }, 5000);
      })
      .catch((error) => {
        setError(error);
      });
    async function updateHitCount(postId) {
      await db
        .collection("links")
        .doc(postId)
        .update({ hitCount: firebase.firestore.FieldValue.increment(1) })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  }, [match.params.alias]);

  return (
    <>
      <div className="container-fluid d-flex flex-column">
        {!error && (
          <div className="mt-3 alert alert-info" role="alert">
            Az átirányítás megtörténik 5 másodpercen belül ide: {url}
          </div>
        )}
        {error && (
          <div className="mt-3 alert alert-danger" role="alert">
            Az alias nem található
          </div>
        )}
      </div>
    </>
  );
};

export default Redirect;
