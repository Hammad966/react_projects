import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrIndex) => {
    setCurrentTabIndex(getCurrIndex);
    onChange(getCurrIndex);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((item, id) => (
          <div className={`tab-item ${currentTabIndex === id ? "active" : ""}`} onClick={() => handleOnClick(id)} key={item.label}>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  )
}
