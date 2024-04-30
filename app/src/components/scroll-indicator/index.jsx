import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollPercent((scrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
  }, []);

  if (errorMsg) {
    return <div>Error: {errorMsg}</div>;
  }

  if (loading) {
    return <div>Loading data! Please wait..</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1 className="font-semibold text-xl my-5">Custom Scroll Indicator</h1>
        <div className="bg-yellow-300">
          <div
            className="current-progress-bar bg-amber-600 text-sm font-semibold text-zinc-900"
            style={{ width: `${scrollPercent}%` }}
          >
            {Math.floor(scrollPercent)}%
          </div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length ? data.map((item) => <p>{item.title}</p>) : null}
      </div>
    </div>
  );
}
