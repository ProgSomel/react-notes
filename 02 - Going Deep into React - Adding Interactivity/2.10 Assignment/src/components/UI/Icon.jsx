import { icons } from "../../data/icons";

export default function Icon({ className, name }) {
  const icon = icons[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...icon.attributes}
    >
      {icon.innerSVG}
    </svg>
  );
}
