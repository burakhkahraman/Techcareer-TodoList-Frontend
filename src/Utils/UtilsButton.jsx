const UtilsButton = ({ label, fontColor, backgroundColor }) => {
    const textStyle = {
      color: fontColor,
    };
  
    const buttonStyle = {
      flex: "1", /* Butonları eşit genişlikte yapar */
      margin: "0 10px",
      background: backgroundColor,
      border: "1px solid #ccc",
      borderRadius: "5px", // "borderRadius" doğru syntax
    };
  
    return (
      <div>
        <button className="utils-button" style={buttonStyle}>
          <span style={textStyle}>{label}</span>
        </button>
      </div>
    );
  };
  
  export default UtilsButton;
  