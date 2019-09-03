import { Dimensions, PixelRatio, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export const wp = widthPercent => {
  const elemWidth = parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

export const hp = heightPercent => {
  const elemHeight = parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

export const isAndroid = Platform.OS === "android";

export default { isAndroid };
