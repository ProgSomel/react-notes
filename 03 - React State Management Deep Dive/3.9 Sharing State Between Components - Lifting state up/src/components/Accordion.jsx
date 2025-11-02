import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Learn with Somel</h2>
      <Panel
        title="Paid Course"
        isActive={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        autem, dolore sed aliquid dicta corrupti voluptatibus nulla, repudiandae
        ullam non nihil atque iusto vero ex libero ut facilis et tempore
        accusantium amet at explicabo quod enim? Error laborum atque qui aliquid
        est! Rem dolor rerum facere reiciendis. Dolorem, sunt quas.
      </Panel>
      <Panel
        title="Free Course"
        isActive={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        quasi, reprehenderit voluptates consequatur quae laborum tempora magnam
        sunt nemo obcaecati cupiditate consectetur perferendis porro expedita
        accusamus molestiae repudiandae veniam delectus doloribus sit maiores
        voluptate veritatis deleniti. Perferendis reprehenderit ipsa impedit
        natus, dolore dolorem totam delectus quaerat veniam ducimus vitae nulla!
      </Panel>
    </>
  );
}
