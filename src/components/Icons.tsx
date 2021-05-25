import React from "react";

interface Props {
  id: string;
}

const Icons = (props: Props) => {
  let icon: string = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@latest/128/color/${props.id}.png`;
  return icon ? (
    <img className="crypto-icon" src={icon} alt="Cryptocurrency" />
  ) : null;
};

export default Icons;
