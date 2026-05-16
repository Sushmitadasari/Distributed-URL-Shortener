import { useState } from "react";

import api from "../api";

import UrlForm from "../components/UrlForm";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ResultCard from "../components/ResultCard";

function Home() {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [result, setResult] =
    useState(null);

  async function handleShorten(
    payload
  ) {
    try {
      setLoading(true);

      setError("");

      const response =
        await api.post(
          "/api/shorten",
          payload
        );

      setResult(response.data);
    } catch (err) {
      setError(
        err.response?.data
          ?.message ||
          "Failed to shorten URL"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <UrlForm
        onSubmit={handleShorten}
      />

      {loading && <Loader />}

      {error && (
        <ErrorMessage
          message={error}
        />
      )}

      {result && (
        <ResultCard
          result={result}
        />
      )}
    </div>
  );
}

export default Home;