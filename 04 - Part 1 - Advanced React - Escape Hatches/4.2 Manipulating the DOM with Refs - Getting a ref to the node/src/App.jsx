import { useRef } from "react";
export default function App() {
    const firstCatRef = useRef(null);
  

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>Neo</button>
        <button onClick={handleScrollToSecondCat}>Millie</button>
        <button onClick={handleScrollToThirdCat}>Bella</button>
        <div>
          <ul>
            <li>
              <img
                src="https://placecats.com/neo/300/200"
                alt="Neo"
                ref={firstCatRef}
              />
            </li>
            <li>
              <img
                src="https://placecats.com/millie/200/200"
                alt="Millie"
                ref={secondCatRef}
              />
            </li>
            <li>
              <img
                src="https://placecats.com/bella/199/200"
                alt="Bella"
                ref={thirdCatRef}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
