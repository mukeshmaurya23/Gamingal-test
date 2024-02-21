import { TextStyle } from "react-native/types";

import Typography from "../constant/typography";
import { moderateScale } from "react-native-size-matters";
import Colors from "../constant/Color";

interface FontStyleProp<T = TextStyle> {
  poppinsRegular10: T;
  poppinsRegular12: T;
  poppinsRegular14: T;
  poppinsRegular16: T;
  poppinsRegular18: T;
  poppinsRegular20: T;
  poppinsMedium10: T;
  poppinsMedium12: T;
  poppinsMedium14: T;
  poppinsMedium16: T;
  poppinsMedium18: T;
  poppinsMedium20: T;
  poppinsSemiBold10: T;
  poppinsSemiBold12: T;
  poppinsSemiBold14: T;
  poppinsSemiBold16: T;
  poppinsSemiBold18: T;
  poppinsSemiBold20: T;
  poppinsBold10: T;
  poppinsBold12: T;
  poppinsBold14: T;
  poppinsBold16: T;
  poppinsBold18: T;
  poppinsBold20: T;
  poppinsLight10: T;
  poppinsLight12: T;
  poppinsLight14: T;
  poppinsLight16: T;
  poppinsLight18: T;
  poppinsLight20: T;
  poppinsThin10: T;
  poppinsThin12: T;
  poppinsThin14: T;
  poppinsThin16: T;
  poppinsThin18: T;
  poppinsThin20: T;

  _PoppinsBold: (
    fontFamily: typeof Typography.interBold,
    fontSize: number,
    color: string,
  ) => T;

  _PoppinsSemiBold: (
    fontFamily: typeof Typography.interSemiBold,
    fontSize: number,
    color: string,
  ) => T;

  _PoppinsRegular: (
    fontFamily: typeof Typography.interRegular,
    fontSize: number,
    color: string,
  ) => T;

  _PoppinsMedium: (
    fontFamily: typeof Typography.interMedium,
    fontSize: number,
    color: string,
  ) => T;

  _PoppinsLight: (
    fontFamily: typeof Typography.interLight,
    fontSize: number,
    color: string,
  ) => T;

  _PoppinsThin: (
    fontFamily: typeof Typography.interThin,
    fontSize: number,
    color: string,
  ) => T;
}

const fontStyles: FontStyleProp = {
  _PoppinsBold: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _PoppinsLight: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _PoppinsMedium: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _PoppinsRegular: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _PoppinsSemiBold: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },

  _PoppinsThin: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },

  poppinsBold10: {
    fontFamily: Typography.poppinsBold,
    fontSize: moderateScale(10),
    color: Colors.textGrey,
  },
  poppinsBold12: {
    fontFamily: Typography.poppinsBold,
    fontSize: moderateScale(12),
    color: Colors.textGrey,
  },
  poppinsBold14: {
    fontFamily: Typography.poppinsBold,
    fontSize: moderateScale(14),
    color: Colors.textGrey,
  },
  poppinsBold16: {
    fontFamily: Typography.poppinsBold,
    fontSize: moderateScale(16),
    color: Colors.textGrey,
  },
  poppinsBold18: {
    fontFamily: Typography.poppinsBold,
    fontSize: moderateScale(18),
    color: Colors.textGrey,
  },
  poppinsBold20: {
    fontFamily: Typography.poppinsBold,
    fontSize: moderateScale(20),
    color: Colors.textGrey,
  },

  poppinsLight10: {
    fontFamily: Typography.poppinsLight,
    fontSize: moderateScale(10),
    color: Colors.textGrey,
  },

  poppinsLight12: {
    fontFamily: Typography.poppinsLight,
    fontSize: moderateScale(12),
    color: Colors.textGrey,
  },

  poppinsLight14: {
    fontFamily: Typography.poppinsLight,
    fontSize: moderateScale(14),
    color: Colors.textGrey,
  },

  poppinsLight16: {
    fontFamily: Typography.poppinsLight,
    fontSize: moderateScale(16),
    color: Colors.textGrey,
  },

  poppinsLight18: {
    fontFamily: Typography.poppinsLight,
    fontSize: moderateScale(18),
    color: Colors.textGrey,
  },

  poppinsLight20: {
    fontFamily: Typography.poppinsLight,
    fontSize: moderateScale(20),
    color: Colors.textGrey,
  },

  poppinsMedium10: {
    fontFamily: Typography.poppinsMedium,
    fontSize: moderateScale(10),
    color: Colors.textGrey,
  },

  poppinsMedium12: {
    fontFamily: Typography.poppinsMedium,
    fontSize: moderateScale(12),
    color: Colors.textGrey,
  },

  poppinsMedium14: {
    fontFamily: Typography.poppinsMedium,
    fontSize: moderateScale(14),
    color: Colors.textGrey,
  },

  poppinsMedium16: {
    fontFamily: Typography.poppinsMedium,
    fontSize: moderateScale(16),
    color: Colors.textGrey,
  },

  poppinsMedium18: {
    fontFamily: Typography.poppinsMedium,
    fontSize: moderateScale(18),
    color: Colors.textGrey,
  },

  poppinsMedium20: {
    fontFamily: Typography.poppinsMedium,
    fontSize: moderateScale(20),
    color: Colors.textGrey,
  },

  poppinsRegular10: {
    fontFamily: Typography.poppinsRegular,
    fontSize: moderateScale(10),
    color: Colors.textGrey,
  },

  poppinsRegular12: {
    fontFamily: Typography.poppinsRegular,
    fontSize: moderateScale(12),
    color: Colors.textGrey,
  },

  poppinsRegular14: {
    fontFamily: Typography.poppinsRegular,
    fontSize: moderateScale(14),
    color: Colors.textGrey,
  },

  poppinsRegular16: {
    fontFamily: Typography.poppinsRegular,
    fontSize: moderateScale(16),
    color: Colors.textGrey,
  },

  poppinsRegular18: {
    fontFamily: Typography.poppinsRegular,
    fontSize: moderateScale(18),
    color: Colors.textGrey,
  },

  poppinsRegular20: {
    fontFamily: Typography.poppinsRegular,
    fontSize: moderateScale(20),
    color: Colors.textGrey,
  },

  poppinsSemiBold10: {
    fontFamily: Typography.poppinsSemiBold,
    fontSize: moderateScale(10),
    color: Colors.textGrey,
  },

  poppinsSemiBold12: {
    fontFamily: Typography.poppinsSemiBold,
    fontSize: moderateScale(12),
    color: Colors.textGrey,
  },

  poppinsSemiBold14: {
    fontFamily: Typography.poppinsSemiBold,
    fontSize: moderateScale(14),
    color: Colors.textGrey,
  },

  poppinsSemiBold16: {
    fontFamily: Typography.poppinsSemiBold,
    fontSize: moderateScale(16),
    color: Colors.textGrey,
  },

  poppinsSemiBold18: {
    fontFamily: Typography.poppinsSemiBold,
    fontSize: moderateScale(18),
    color: Colors.textGrey,
  },

  poppinsSemiBold20: {
    fontFamily: Typography.poppinsSemiBold,
    fontSize: moderateScale(20),
    color: Colors.textGrey,
  },
  poppinsThin10: {
    fontFamily: Typography.poppinsThin,
    fontSize: moderateScale(10),
    color: Colors.textGrey,
  },
  poppinsThin12: {
    fontFamily: Typography.poppinsThin,
    fontSize: moderateScale(12),
    color: Colors.textGrey,
  },
  poppinsThin14: {
    fontFamily: Typography.poppinsThin,
    fontSize: moderateScale(14),
    color: Colors.textGrey,
  },
  poppinsThin16: {
    fontFamily: Typography.poppinsThin,
    fontSize: moderateScale(16),
    color: Colors.textGrey,
  },
  poppinsThin18: {
    fontFamily: Typography.poppinsThin,
    fontSize: moderateScale(18),
    color: Colors.textGrey,
  },
  poppinsThin20: {
    fontFamily: Typography.poppinsThin,
    fontSize: moderateScale(20),
    color: Colors.textGrey,
  },
};

export default fontStyles;
