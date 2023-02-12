const Spacer = ({ children, type = "horizental", size = 8, ...props }) => {
  const spacerStyle = {
    ...props.style,
    display: type === "vertical" ? "block" : "inline-block",
    verticalAlign: type === "horizontal" ? "middle" : undefined,
  };
  return <div style={spacerStyle}>{children}</div>;
};

export default Spacer;
