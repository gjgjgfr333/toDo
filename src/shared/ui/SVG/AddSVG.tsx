import React from 'react';
import {View} from 'react-native';
import {SvgXml} from "react-native-svg";

const xml = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M5 34.5V20.5C5 18.8431 6.34315 17.5 8 17.5H55C56.6569 17.5 58 18.8431 58 20.5V34.5C58 36.1569 56.6569 37.5 55 37.5H8C6.34315 37.5 5 36.1569 5 34.5Z" fill="#AAF98F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 18.5C6.89543 18.5 6 19.3954 6 20.5V34.5C6 35.6046 6.89543 36.5 8 36.5H55C56.1046 36.5 57 35.6046 57 34.5V20.5C57 19.3954 56.1046 18.5 55 18.5H8ZM4 20.5C4 18.2909 5.79086 16.5 8 16.5H55C57.2091 16.5 59 18.2909 59 20.5V34.5C59 36.7091 57.2091 38.5 55 38.5H8C5.79086 38.5 4 36.7091 4 34.5V20.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 21.5C16.5523 21.5 17 21.9477 17 22.5V32.5C17 33.0523 16.5523 33.5 16 33.5C15.4477 33.5 15 33.0523 15 32.5V22.5C15 21.9477 15.4477 21.5 16 21.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 27.5C10 26.9477 10.4477 26.5 11 26.5H21C21.5523 26.5 22 26.9477 22 27.5C22 28.0523 21.5523 28.5 21 28.5H11C10.4477 28.5 10 28.0523 10 27.5Z" fill="black"/>
<path d="M41.5335 58.1054L25.329 46.9742C24.0679 46.1079 23.8011 44.3562 24.7473 43.1538L24.9036 42.9551C25.6992 41.9441 27.1529 41.7456 28.1904 42.5063L32.1014 45.374C33.2941 46.2486 34.8328 44.8693 34.0933 43.5884L26.4683 30.3816C25.7089 29.0662 26.1595 27.3844 27.4748 26.625C28.7901 25.8656 30.472 26.3163 31.2314 27.6316L35.1064 34.3433L36.8384 33.3433C38.2733 32.5148 40.1081 33.0064 40.9365 34.4413L41.1865 34.8743L42.9186 33.8743C44.3534 33.0459 46.1882 33.5375 47.0166 34.9724L47.5166 35.8384L48.8157 35.0884C50.2506 34.26 52.0853 34.7516 52.9138 36.1865L58.9138 46.5788C59.7422 48.0137 59.2506 49.8485 57.8157 50.6769L44.7321 58.2307C43.7308 58.8088 42.4864 58.7601 41.5335 58.1054Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.6023 30.8816C24.5667 29.088 25.1813 26.7945 26.9748 25.759C28.7684 24.7235 31.0619 25.338 32.0974 27.1316L35.4724 32.9773L36.3385 32.4773C38.105 31.4573 40.3261 31.938 41.5258 33.5238L42.4186 33.0083C44.3318 31.9038 46.7781 32.5593 47.8827 34.4724L48.3157 34.2224C50.2289 33.1179 52.6752 33.7734 53.7798 35.6865L59.7798 46.0788C60.8844 47.992 60.2289 50.4384 58.3157 51.5429L45.2321 59.0968C43.8971 59.8676 42.2379 59.8026 40.9673 58.9297L24.7628 47.7985C23.0254 46.605 22.658 44.1919 23.9614 42.5355L24.1178 42.3367C25.2467 40.9021 27.3095 40.6204 28.7817 41.6999L32.6927 44.5676C32.7967 44.6438 32.8756 44.653 32.9325 44.648C33.0011 44.642 33.0822 44.6097 33.1544 44.545C33.2267 44.4802 33.2676 44.4031 33.281 44.3355C33.2922 44.2795 33.2917 44.2001 33.2273 44.0885L25.6023 30.8816ZM48.8827 36.2045L49.1327 36.6375C49.4088 37.1158 49.245 37.7274 48.7667 38.0035C48.2884 38.2797 47.6768 38.1158 47.4006 37.6375L46.1506 35.4724C45.5984 34.5159 44.3752 34.1881 43.4186 34.7404L42.5526 35.2404L44.0526 37.8385C44.3287 38.3168 44.1648 38.9284 43.6865 39.2045C43.2083 39.4806 42.5967 39.3168 42.3205 38.8385L40.0705 34.9414C39.5182 33.9848 38.2951 33.657 37.3385 34.2093L36.4724 34.7093L38.4724 38.1734C38.7486 38.6517 38.5847 39.2633 38.1064 39.5394C37.6281 39.8156 37.0165 39.6517 36.7404 39.1734L30.3654 28.1316C29.8821 27.2946 28.8119 27.0078 27.9748 27.491C27.1378 27.9743 26.8511 29.0446 27.3343 29.8816L34.9593 43.0885C36.2399 45.3065 33.5755 47.695 31.5101 46.1805L27.5991 43.3128C26.9963 42.8708 26.1517 42.9861 25.6895 43.5735L25.5332 43.7722C24.9443 44.5206 25.1103 45.6108 25.8952 46.1499L42.0997 57.2812C42.735 57.7176 43.5646 57.7501 44.2321 57.3647L57.3157 49.8109C58.2723 49.2586 58.6 48.0354 58.0478 47.0788L52.0478 36.6865C51.4955 35.73 50.2723 35.4022 49.3157 35.9545L48.8827 36.2045Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>
`

export const AddSvg = () => {
    return (
        <SvgXml xml={xml}/>
    );
};