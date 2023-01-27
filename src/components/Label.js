import { Text } from "react-native";

const Label = ({ text, color, fontSize }) => {
  return <Text style={{ color, fontSize }}>{text}</Text>;
};

export default Label;
