const Icon = ({
  name,
  size,
  strokeWidth = 2,
  color = "black",
  rotate,
  ...props
}) => {
  const iconStyle = {
    "stroke-width": strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };
  const icon = require("feather-icons").icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : "";
  const decode = decodeURIComponent(encodeURIComponent(svg));
  const base64 = btoa(decode);
  return (
    <div
      style={{
        display: "inline-block",
        width: size,
        height: size,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        ...props.style,
      }}
      {...props}
    >
      <img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
    </div>
  );
};

export default Icon;
