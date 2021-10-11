enum EPlacement {
  Top = "top",
  Left = "left",
  Right = "right",
  Bottom = "bottom",
  // TopLeft = "topLeft",
  // TopRight = "topRight",
  // BottomLeft = "bottomLeft",
  // BottomRight = "bottomRight",
  // LeftTop = "leftTop",
  // LeftBottom = "leftBottom",
  // RightTop = "rightTop",
  // RightBottom = "rightBottom",
}

export type TPlacement = "top" | "left" | "right" | "bottom";
// | "topLeft"
// | "topRight"
// | "bottomLeft"
// | "bottomRight"
// | "leftTop"
// | "leftBottom"
// | "rightTop"
// | "rightBottom";

export const getPlacement = (placement: TPlacement | undefined): number => {
  switch (placement) {
    case EPlacement.Top:
      return 1;
    case EPlacement.Left:
      return 6;
    case EPlacement.Right:
      return 7;
    case EPlacement.Bottom:
      return 4;
    // case EPlacement.TopLeft:
    //   return `bottom: ${calc}; left: 0;`;
    // case EPlacement.TopRight:
    //   return `bottom: ${calc}; right: 0;`;
    // case EPlacement.BottomLeft:
    //   return `top: ${calc}; left: 0;`;
    // case EPlacement.BottomRight:
    //   return `top: ${calc}; right: 0;`;
    // case EPlacement.LeftTop:
    //   return `right: ${calc}; top: -100%;`;
    // case EPlacement.LeftBottom:
    //   return `right: ${calc}; bottom: -100%;`;
    // case EPlacement.RightTop:
    //   return `left: ${calc}; top: -100%;`;
    // case EPlacement.RightBottom:
    //   return `left: ${calc}; bottom: -100%;`;
    default:
      return 1;
  }
};
