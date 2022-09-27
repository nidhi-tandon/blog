const HorizontalLine = ({ width = "100px" }) => {
  return (
    <div
      style={{
        width: width,
        backgroundColor: "rgba(255,255,255,0.5)",
        height: "1px",
      }}
    />
  );
};

export default HorizontalLine;
