import React from "react";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

const ShortenedURL = ({ shortenedUrl }) => {
  const [copied, copy] = useCopyToClipboard(
    `https://rel.ink/${shortenedUrl.hashId}`
  );

  return (
    <div className="shortened-url-content-container">
      <p>{shortenedUrl.originalUrl}</p>
      <div className="divider"></div>
      <p>https://rel.ink/api/links/{shortenedUrl.hashId}</p>
      <button style={copied ? { background: "#3A3054" } : null} onClick={copy}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default ShortenedURL;
