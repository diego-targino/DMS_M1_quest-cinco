import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100",
    height: "100",
    paddingTop: 40,
    alignContent: "flex-end",
  },
  expressionBox: {
    height: "40%",
    backgroundColor: "#646464",
    color: "#f3f3f3",
    fontSize: 80,
    textAlign: "right",
    textAlignVertical: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxHeight: "12%",
  },
});
