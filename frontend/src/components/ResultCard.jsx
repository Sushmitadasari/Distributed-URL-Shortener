import { Link } from "react-router-dom";

function ResultCard({ result }) {
  async function copyToClipboard() {
    await navigator.clipboard.writeText(
      result.short_url
    );

    alert("Copied!");
  }

  return (
    <div className="card">
      <h2>Short URL Created</h2>

      <p className="result-url">
        {result.short_url}
      </p>

      <button
        className="button copy-btn"
        onClick={copyToClipboard}
      >
        Copy URL
      </button>

      <Link
        className="analytics-link"
        to={`/analytics/${result.short_code}`}
      >
        View Analytics
      </Link>
    </div>
  );
}

export default ResultCard;