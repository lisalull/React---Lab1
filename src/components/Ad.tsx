import "./Ad.css";

interface Props {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

const Ad = ({ flavor, fontSize, darkTheme }: Props) => {
  return (
    <div className="Ad">
      <div
        className={`box ${darkTheme ? "dark" : ""}`}
        style={{
          fontSize: fontSize + "px",
        }}
      >
        <p>Vote For</p>
        <p className="flavor">{flavor}</p>
      </div>
    </div>
  );
};

export default Ad;
