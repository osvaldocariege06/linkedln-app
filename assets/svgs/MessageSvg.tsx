import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
export const MessageSvg = ({ ...props }) => (
  <Svg width={194} height={195} viewBox="0 0 194 195" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M97 1C42.3521 1 0 40.8237 0 94.6081C0 122.743 11.5932 147.053 30.4662 163.848C32.0471 165.266 33.0034 167.227 33.0815 169.343L33.6085 186.508C33.7841 191.983 39.4636 195.536 44.499 193.342L63.7429 184.896C65.3823 184.178 67.1974 184.042 68.9149 184.508C77.7561 186.935 87.1829 188.216 97 188.216C151.648 188.216 194 148.393 194 94.6081C194 40.8237 151.648 1 97 1Z"
      fill="url(#paint0_linear_0_11134)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.7557 122.941L67.2533 78.0343C71.7816 70.8989 81.502 69.1151 88.2946 74.1758L110.956 91.0641C113.044 92.6153 115.894 92.5959 117.963 91.0447L148.569 67.9711C152.648 64.8881 157.996 69.7549 155.244 74.0594L126.766 118.946C122.238 126.082 112.517 127.866 105.725 122.805L83.0635 105.917C80.975 104.365 78.1253 104.385 76.0563 105.936L45.4312 129.029C41.3518 132.112 36.0036 127.245 38.7557 122.941Z"
      fill="white"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_0_11134"
        x1={-0.00121994}
        y1={1}
        x2={-0.00121994}
        y2={194.002}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00B2FF" />
        <Stop offset={1} stopColor="#006AFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
