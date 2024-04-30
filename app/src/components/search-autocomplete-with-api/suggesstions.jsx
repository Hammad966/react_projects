export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {/* {data && data.length
          ? data.map((item, index) => (
              <li className="cursor-pointer" onClick={handleClick} key={index}>
                {item}
              </li>
            ))
          : null} */}

      {data && data.length
        ? data.map((item, index) => (
            <li className="cursor-pointer" onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
