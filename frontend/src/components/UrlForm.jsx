import { useState } from "react";

function UrlForm({ onSubmit }) {
  const [url, setUrl] =
    useState("");

  const [strategy, setStrategy] =
    useState("snowflake");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      url,
      strategy
    });
  }

  return (
    <form
      className="card"
      onSubmit={handleSubmit}
    >
      <input
        className="input"
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
      />

      <select
        className="select"
        value={strategy}
        onChange={(e) =>
          setStrategy(e.target.value)
        }
      >
        <option value="snowflake">
          Snowflake
        </option>

        <option value="hash">
          Hash
        </option>
      </select>

      <button
        className="button"
        type="submit"
      >
        Shorten URL
      </button>
    </form>
  );
}

export default UrlForm;