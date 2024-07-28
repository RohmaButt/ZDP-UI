import * as React from "react";

export function IconComponent(props: any) {
  return (
    <div>
      <img
        src={
          require(`../node_modules/cryptocurrency-icons/svg/color/${props.name}.svg`)
            .default.src
        }
      />
    </div>
  );
}
