import { Pressable, Text } from "react-native";
import { styles } from "./style";

export default function ValueButton(props) {
  const calculeWidth = () => {
    if (props.width) return `${props.width * 25}%`;
    return "25%";
  };
  const getBackgroundColor = () => props.color ?? "#f0f0f0";

  const getPressedBackgroundColor = () => props.pressedColor ?? "#c5c6c6";

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? getPressedBackgroundColor()
            : getBackgroundColor(),
        },
        {
          ...styles.valueButton,
          width: calculeWidth(),
        },
      ]}
      onPress={() => props.onPress(props.value)}
    >
      <Text style={styles.buttonText}>{props.value}</Text>
    </Pressable>
  );
}
