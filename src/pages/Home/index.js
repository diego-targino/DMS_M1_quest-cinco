import { Text, View } from "react-native";
import { styles } from "./style";
import ValueButton from "../../components/ValueButton";
import { useState } from "react";

export default function Home() {
  const [expressionValue, setExpressionValue] = useState("0");

  const expressionResult = () => {
    setExpressionValue(eval(expressionValue));
  };
  const onPress = (value) => {
    switch (value) {
      case "AC":
        setExpressionValue("0");
        break;
      case "=":
        expressionResult();
        break;
      case ".":
        if (!expressionValue.includes("."))
          setExpressionValue(expressionValue + value);
        break;
      case "/":
      case "*":
      case "-":
      case "+":
        if (!["/", "*", "-", "+"].some((x) => expressionValue.endsWith(x)))
          setExpressionValue(expressionValue + value);
        break;
      default:
        if (expressionValue !== "0")
          setExpressionValue(expressionValue + value);
        else setExpressionValue(value);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.expressionBox}>{expressionValue}</Text>
      <View style={styles.row}>
        <ValueButton value="AC" width={3} onPress={onPress} />
        <ValueButton value="/" onPress={onPress} />
      </View>
      <View style={styles.row}>
        <ValueButton value="7" onPress={onPress} />
        <ValueButton value="8" onPress={onPress} />
        <ValueButton value="9" onPress={onPress} />
        <ValueButton
          value="*"
          color="#f88436"
          pressedColor="#fcbe94"
          onPress={onPress}
        />
      </View>
      <View style={styles.row}>
        <ValueButton value="4" onPress={onPress} />
        <ValueButton value="5" onPress={onPress} />
        <ValueButton value="6" onPress={onPress} />
        <ValueButton
          value="-"
          color="#f88436"
          pressedColor="#fcbe94"
          onPress={onPress}
        />
      </View>
      <View style={styles.row}>
        <ValueButton value="1" onPress={onPress} />
        <ValueButton value="2" onPress={onPress} />
        <ValueButton value="3" onPress={onPress} />
        <ValueButton
          value="+"
          color="#f88436"
          pressedColor="#fcbe94"
          onPress={onPress}
        />
      </View>
      <View style={styles.row}>
        <ValueButton value="0" width={2} onPress={onPress} />
        <ValueButton value="." onPress={onPress} />
        <ValueButton
          value="="
          color="#f88436"
          pressedColor="#fcbe94"
          onPress={onPress}
        />
      </View>
    </View>
  );
}
