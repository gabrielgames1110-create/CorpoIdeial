/* Componentes do design system FitLife, compilados. Não edite aqui: edite os textos em data.js e as cores em tema/tema.css. */
(function () {
  var defs = {};
  defs["components/core/Icon.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ICON_NAMES = void 0;
exports.Icon = Icon;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide v1.68.0 (ISC) — traço 2px, round caps/joins. Marcas sociais: Simple Icons v16.36.0 (CC0).
const LUCIDE = {
  "car": "<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/>",
  "coffee": "<path d=\"M10 2v2\"/><path d=\"M14 2v2\"/><path d=\"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1\"/><path d=\"M6 2v2\"/>",
  "cup-soda": "<path d=\"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8\"/><path d=\"M5 8h14\"/><path d=\"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0\"/><path d=\"m12 8 1-6h2\"/>",
  "dumbbell": "<path d=\"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z\"/><path d=\"m2.5 21.5 1.4-1.4\"/><path d=\"m20.1 3.9 1.4-1.4\"/><path d=\"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z\"/><path d=\"m9.6 14.4 4.8-4.8\"/>",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/>",
  "heart-pulse": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"/><path d=\"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\"/>",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/>",
  "flower-2": "<path d=\"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/><path d=\"M12 10v12\"/><path d=\"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z\"/><path d=\"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z\"/>",
  "flame": "<path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\"/>",
  "hand-fist": "<path d=\"M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0\"/><path d=\"M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5\"/><path d=\"M9 5A2 2 0 1 0 5 5V10\"/><path d=\"M9 7V4A2 2 0 1 1 13 4V7.268\"/>",
  "arrow-right": "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>",
  "arrow-up-right": "<path d=\"M7 7h10v10\"/><path d=\"M7 17 17 7\"/>",
  "play": "<path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\"/>",
  "search": "<path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/>",
  "menu": "<path d=\"M4 5h16\"/><path d=\"M4 12h16\"/><path d=\"M4 19h16\"/>",
  "x": "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>",
  "check": "<path d=\"M20 6 9 17l-5-5\"/>",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/>",
  "rocket": "<path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"/><path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\"/><path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\"/><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\"/>",
  "crown": "<path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\"/><path d=\"M5 21h14\"/>",
  "gem": "<path d=\"M10.5 3 8 9l4 13 4-13-2.5-6\"/><path d=\"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z\"/><path d=\"M2 9h20\"/>",
  "graduation-cap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\"/><path d=\"M22 10v6\"/><path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\"/>",
  "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\"/><circle cx=\"12\" cy=\"8\" r=\"6\"/>",
  "mail": "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/>",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"/><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"/>",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16 9-5.5 5.5L8 12\"/>",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>",
  "biceps-flexed": "<path d=\"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1\"/><path d=\"M15 14a5 5 0 0 0-7.584 2\"/><path d=\"M9.964 6.825C8.019 7.977 9.5 13 8 15\"/>",
  "calendar": "<path d=\"M8 2v3\"/><path d=\"M16 2v3\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 9h18\"/>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/>",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>",
  "phone": "<path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"/>",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\"/>",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"/>",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>"
};
const SOCIAL = {
  "instagram": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  "facebook": "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  "youtube": "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  "tiktok": "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
};
const ICON_NAMES = exports.ICON_NAMES = Object.keys(LUCIDE).concat(Object.keys(SOCIAL));
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  filled = false,
  title,
  className = '',
  style,
  ...rest
}) {
  const isSocial = Object.prototype.hasOwnProperty.call(SOCIAL, name);
  const body = isSocial ? SOCIAL[name] : LUCIDE[name];
  if (!body) return null;
  const html = (title ? '<title>' + title + '</title>' : '') + body;
  const a11y = title ? {
    role: 'img',
    'aria-label': title
  } : {
    'aria-hidden': true,
    focusable: 'false'
  };
  const cls = ['fl-icon', className].filter(Boolean).join(' ');
  if (isSocial) {
    return /*#__PURE__*/_react.default.createElement("svg", _extends({
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: cls,
      style: style
    }, a11y, rest), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
      d: body
    }));
  }
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: cls,
    style: style
  }, a11y, rest, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
}
  };
  defs["components/core/Logo.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = Logo;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lockup FitLife recortado da referência (152×34, fundo transparente, "FIT" branco).
// Só para fundos escuros. Substituir pelo arquivo oficial quando disponível.
const SRC = 'data:image/png;base64,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';
function Logo({
  src,
  height = 40,
  alt = 'FitLife — Train · Progress · Be better',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/_react.default.createElement("img", _extends({
    src: src || SRC,
    alt: alt,
    className: ['fl-logo', className].filter(Boolean).join(' '),
    style: {
      height,
      width: 'auto',
      ...style
    }
  }, rest));
}
  };
  defs["components/core/Button.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("./Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  block = false,
  icon,
  iconStart,
  href,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const v = variant === 'light' ? 'outline' : variant;
  const cls = ['btn', 'btn--' + v, block && 'btn--block', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, v === 'video' && /*#__PURE__*/_react.default.createElement("span", {
    className: "btn__play",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: "play",
    size: 14,
    filled: true
  })), iconStart && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: iconStart,
    size: 16
  }), children, icon && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: icon,
    size: 16,
    className: "btn__icon-end"
  }));
  if (href) return /*#__PURE__*/_react.default.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: type,
    className: cls
  }, rest), inner);
}
  };
  defs["components/core/IconButton.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = IconButton;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("./Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  onLight = false,
  href,
  type = 'button',
  iconSize,
  className = '',
  ...rest
}) {
  const cls = ['icon-btn', 'icon-btn--' + variant, size === 'sm' && 'icon-btn--sm', onLight && 'icon-btn--on-light', className].filter(Boolean).join(' ');
  const glyph = /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: icon,
    size: iconSize || (size === 'sm' ? 16 : 20)
  });
  if (href) return /*#__PURE__*/_react.default.createElement("a", _extends({
    className: cls,
    href: href,
    "aria-label": label,
    title: label
  }, rest), glyph);
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: type,
    className: cls,
    "aria-label": label,
    title: label
  }, rest), glyph);
}
  };
  defs["components/core/ArrowLink.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowLink = ArrowLink;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("./Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArrowLink({
  href = '#',
  onDark = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['link-arrow', onDark && 'link-arrow--on-dark', className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), children, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: "arrow-right",
    size: 16
  }));
}
  };
  defs["components/core/Badge.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = Badge;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("./Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  variant = 'soft',
  icon,
  className = '',
  children,
  ...rest
}) {
  const cls = ['badge', variant === 'popular' && 'badge--popular', className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: icon,
    size: 12
  }), children);
}
  };
  defs["components/typography/Eyebrow.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Eyebrow = Eyebrow;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  onDark = false,
  line = true,
  as = 'p',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['eyebrow', onDark && 'eyebrow--on-dark', !line && 'eyebrow--no-line', className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
  };
  defs["components/typography/SectionHeading.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionHeading = SectionHeading;
var _react = _interopRequireDefault(require("react"));
var _Eyebrow = require("./Eyebrow.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  highlight,
  highlightBreak = true,
  description,
  action,
  onDark = false,
  align = 'start',
  size = 'section',
  level = 2,
  className = '',
  ...rest
}) {
  const H = 'h' + level;
  const cls = ['section-heading', onDark && 'section-heading--on-dark', align === 'center' && 'section-heading--center', size === 'display' && 'section-heading--display', className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "section-heading__text"
  }, eyebrow && /*#__PURE__*/_react.default.createElement(_Eyebrow.Eyebrow, {
    onDark: onDark
  }, eyebrow), /*#__PURE__*/_react.default.createElement(H, {
    className: "section-heading__title"
  }, title, highlight && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: 'section-heading__highlight' + (highlightBreak ? ' section-heading__highlight--block' : '')
  }, highlight))), description && /*#__PURE__*/_react.default.createElement("p", {
    className: "section-heading__description"
  }, description)), action && /*#__PURE__*/_react.default.createElement("div", {
    className: "section-heading__action"
  }, action));
}
  };
  defs["components/forms/Input.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = Input;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let uid = 0;
function useFieldId(id) {
  const ref = _react.default.useRef(null);
  if (ref.current === null) ref.current = id || 'fl-field-' + ++uid;
  return id || ref.current;
}
function Input({
  id,
  label,
  hideLabel = false,
  error,
  success,
  hint,
  onDark = false,
  className = '',
  ...rest
}) {
  const fid = useFieldId(id);
  const msg = error || success || hint;
  const msgId = msg ? fid + '-msg' : undefined;
  const cls = ['field', onDark && 'field--on-dark', className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: fid,
    className: hideLabel ? 'sr-only' : 'field__label'
  }, label), /*#__PURE__*/_react.default.createElement("input", _extends({
    id: fid,
    className: "input",
    "aria-invalid": error ? 'true' : undefined,
    "aria-describedby": msgId
  }, rest)), error && /*#__PURE__*/_react.default.createElement("p", {
    id: msgId,
    className: "field__message field__message--error",
    role: "alert"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: "circle-alert",
    size: 14
  }), error), !error && success && /*#__PURE__*/_react.default.createElement("p", {
    id: msgId,
    className: "field__message field__message--success",
    role: "status"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: "circle-check",
    size: 14
  }), success), !error && !success && hint && /*#__PURE__*/_react.default.createElement("p", {
    id: msgId,
    className: "field__message"
  }, hint));
}
  };
  defs["components/forms/NewsletterForm.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterForm = NewsletterForm;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _IconButton = require("../core/IconButton.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
let uid = 0;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function NewsletterForm({
  title = 'Newsletter',
  description = 'Receba nossas dicas, ofertas especiais e novidades!',
  placeholder = 'Seu e-mail',
  submitLabel = 'Assinar a newsletter',
  errorMessage = 'Digite um e-mail válido.',
  successMessage = 'Pronto! Sua inscrição foi confirmada.',
  onDark = true,
  onSubmit,
  className = ''
}) {
  const idRef = _react.default.useRef(null);
  if (idRef.current === null) idRef.current = 'fl-newsletter-' + ++uid;
  const id = idRef.current;
  const [value, setValue] = _react.default.useState('');
  const [status, setStatus] = _react.default.useState('idle');
  function submit(e) {
    e.preventDefault();
    const email = value.trim();
    if (!EMAIL.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
    if (onSubmit) onSubmit(email);
  }
  const describedBy = [description && id + '-desc', status !== 'idle' && id + '-msg'].filter(Boolean).join(' ') || undefined;
  const cls = ['newsletter', onDark && 'newsletter--on-dark', className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement("form", {
    className: cls,
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "newsletter__title"
  }, title), description && /*#__PURE__*/_react.default.createElement("p", {
    id: id + '-desc',
    className: "newsletter__description"
  }, description), /*#__PURE__*/_react.default.createElement("div", {
    className: "newsletter__control"
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    type: "email",
    autoComplete: "email",
    className: "input newsletter__input",
    placeholder: placeholder,
    value: value,
    onChange: e => {
      setValue(e.target.value);
      if (status !== 'idle') setStatus('idle');
    },
    "aria-invalid": status === 'error' ? 'true' : undefined,
    "aria-describedby": describedBy
  }), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    type: "submit",
    icon: "arrow-right",
    label: submitLabel,
    variant: "primary",
    size: "sm",
    className: "newsletter__submit"
  })), status === 'error' && /*#__PURE__*/_react.default.createElement("p", {
    id: id + '-msg',
    className: "field__message field__message--error",
    role: "alert"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: "circle-alert",
    size: 14
  }), errorMessage), status === 'success' && /*#__PURE__*/_react.default.createElement("p", {
    id: id + '-msg',
    className: "field__message field__message--success",
    role: "status"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: "circle-check",
    size: 14
  }), successMessage));
}
  };
  defs["components/forms/SegmentedControl.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentedControl = SegmentedControl;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function SegmentedControl({
  options,
  value,
  defaultValue,
  onChange,
  label,
  className = ''
}) {
  const opts = (options || []).map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const [inner, setInner] = _react.default.useState(defaultValue !== undefined ? defaultValue : opts[0] && opts[0].value);
  const current = value !== undefined ? value : inner;
  const refs = _react.default.useRef([]);
  function select(v) {
    if (value === undefined) setInner(v);
    if (onChange) onChange(v);
  }
  function onKeyDown(e, i) {
    let n = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % opts.length;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + opts.length) % opts.length;
    if (e.key === 'Home') n = 0;
    if (e.key === 'End') n = opts.length - 1;
    if (n === null) return;
    e.preventDefault();
    select(opts[n].value);
    if (refs.current[n]) refs.current[n].focus();
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['seg', className].filter(Boolean).join(' '),
    role: "radiogroup",
    "aria-label": label
  }, opts.map((o, i) => {
    const on = o.value === current;
    return /*#__PURE__*/_react.default.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": on,
      tabIndex: on ? 0 : -1,
      ref: el => {
        refs.current[i] = el;
      },
      className: 'seg__opt' + (on ? ' is-active' : ''),
      onClick: () => select(o.value),
      onKeyDown: e => onKeyDown(e, i)
    }, o.label);
  }));
}
  };
  defs["components/content/FeatureItem.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureItem = FeatureItem;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureItem({
  icon,
  variant = 'plain',
  onDark = true,
  className = '',
  children,
  ...rest
}) {
  const ringed = variant === 'ringed';
  const cls = ['feature-item', ringed && 'feature-item--ringed', !onDark && 'feature-item--on-light', className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/_react.default.createElement("span", {
    className: "feature-item__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: icon,
    size: ringed ? 20 : 30,
    strokeWidth: ringed ? 2 : 1.5
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "feature-item__label"
  }, children));
}
  };
  defs["components/content/FeatureStrip.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureStrip = FeatureStrip;
var _react = _interopRequireDefault(require("react"));
var _FeatureItem = require("./FeatureItem.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function FeatureStrip({
  items = [],
  layout = 'strip',
  variant,
  onDark = true,
  className = ''
}) {
  const grid = layout === 'grid';
  const cls = [grid ? 'feature-grid' : 'feature-strip', !onDark && 'feature-strip--on-light', className].filter(Boolean).join(' ');
  const style = grid ? undefined : {
    '--feature-cols': items.length || 4
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls,
    style: style
  }, items.map(it => /*#__PURE__*/_react.default.createElement(_FeatureItem.FeatureItem, {
    key: it.label,
    icon: it.icon,
    variant: variant || (grid ? 'ringed' : 'plain'),
    onDark: onDark
  }, it.label)));
}
  };
  defs["components/content/SocialLinks.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialLinks = SocialLinks;
var _react = _interopRequireDefault(require("react"));
var _IconButton = require("../core/IconButton.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LABELS = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
  tiktok: 'TikTok'
};
function SocialLinks({
  items = [],
  variant = 'ghost',
  size = 'sm',
  owner,
  onLight = false,
  className = ''
}) {
  const cls = ['social-links', 'social-links--' + variant, className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: cls
  }, items.map(it => {
    const base = LABELS[it.network] || it.network;
    const label = it.label || (owner ? base + ' — ' + owner : base);
    return /*#__PURE__*/_react.default.createElement("li", {
      key: it.network
    }, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
      href: it.href || '#',
      icon: it.network,
      label: label,
      variant: variant,
      size: size,
      onLight: onLight,
      iconSize: variant === 'ring' ? 15 : 18
    }));
  }));
}
  };
  defs["components/navigation/SiteHeader.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteHeader = SiteHeader;
var _react = _interopRequireDefault(require("react"));
var _Logo = require("../core/Logo.jsx");
var _Button = require("../core/Button.jsx");
var _IconButton = require("../core/IconButton.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_LINKS = [{
  label: 'Início',
  href: '#inicio'
}, {
  label: 'Programas',
  href: '#programas'
}, {
  label: 'Planos',
  href: '#planos'
}, {
  label: 'Treinadores',
  href: '#treinadores'
}, {
  label: 'Sobre',
  href: '#sobre'
}, {
  label: 'Contato',
  href: '#contato'
}];
function SiteHeader({
  links = DEFAULT_LINKS,
  activeHref,
  onNavigate,
  ctaLabel = 'Matricule-se',
  ctaHref,
  onCtaClick,
  onSearch,
  homeHref = '#inicio',
  sticky = true,
  logoSrc,
  logoHeight = 40,
  brandName = 'FitLife',
  className = ''
}) {
  const [open, setOpen] = _react.default.useState(false);
  const active = activeHref !== undefined ? activeHref : links[0] && links[0].href;
  _react.default.useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  function go(href, e) {
    setOpen(false);
    if (onNavigate) onNavigate(href, e);
  }
  const linkProps = l => ({
    href: l.href,
    'aria-current': l.href === active ? 'page' : undefined,
    onClick: e => go(l.href, e)
  });
  return /*#__PURE__*/_react.default.createElement("header", {
    className: ['site-header', sticky && 'site-header--sticky', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-header__inner"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: homeHref,
    className: "site-header__brand",
    "aria-label": brandName + ' — Início',
    onClick: e => go(homeHref, e)
  }, /*#__PURE__*/_react.default.createElement(_Logo.Logo, {
    src: logoSrc,
    height: logoHeight,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("nav", {
    className: "site-header__nav",
    "aria-label": "Navega\xE7\xE3o principal"
  }, links.map(l => /*#__PURE__*/_react.default.createElement("a", _extends({
    key: l.href,
    className: 'site-header__link' + (l.href === active ? ' is-active' : '')
  }, linkProps(l)), l.label))), /*#__PURE__*/_react.default.createElement("div", {
    className: "site-header__actions"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    icon: "search",
    label: "Buscar",
    className: "site-header__search",
    onClick: onSearch
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    href: ctaHref,
    onClick: onCtaClick,
    className: "site-header__cta"
  }, ctaLabel), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    icon: open ? 'x' : 'menu',
    label: open ? 'Fechar menu' : 'Abrir menu',
    className: "site-header__toggle",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }))), open && /*#__PURE__*/_react.default.createElement("nav", {
    className: "site-header__mobile",
    "aria-label": "Navega\xE7\xE3o mobile"
  }, links.map(l => /*#__PURE__*/_react.default.createElement("a", _extends({
    key: l.href,
    className: l.href === active ? 'is-active' : undefined
  }, linkProps(l)), l.label))));
}
  };
  defs["components/navigation/SiteFooter.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteFooter = SiteFooter;
var _react = _interopRequireDefault(require("react"));
var _Logo = require("../core/Logo.jsx");
var _Icon = require("../core/Icon.jsx");
var _NewsletterForm = require("../forms/NewsletterForm.jsx");
var _SocialLinks = require("../content/SocialLinks.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DEFAULT_LINKS = [{
  label: 'Início',
  href: '#inicio'
}, {
  label: 'Programas',
  href: '#programas'
}, {
  label: 'Planos',
  href: '#planos'
}, {
  label: 'Treinadores',
  href: '#treinadores'
}, {
  label: 'Sobre',
  href: '#sobre'
}, {
  label: 'Contato',
  href: '#contato'
}];
const DEFAULT_SOCIAL = [{
  network: 'instagram',
  href: '#'
}, {
  network: 'facebook',
  href: '#'
}, {
  network: 'youtube',
  href: '#'
}, {
  network: 'tiktok',
  href: '#'
}];
const DEFAULT_LEGAL = [{
  label: 'Aviso legal',
  href: '#'
}, {
  label: 'Política de privacidade',
  href: '#'
}];
function SiteFooter({
  links = DEFAULT_LINKS,
  social = DEFAULT_SOCIAL,
  legalLinks = DEFAULT_LEGAL,
  copyright,
  newsletterDescription,
  onNewsletterSubmit,
  onNavigate,
  contact = [],
  logoSrc,
  logoHeight = 40,
  brandName = 'FitLife',
  className = ''
}) {
  const year = new Date().getFullYear();
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: ['site-footer', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__brand"
  }, /*#__PURE__*/_react.default.createElement(_Logo.Logo, {
    src: logoSrc,
    height: logoHeight,
    alt: brandName
  }), contact.length > 0 && /*#__PURE__*/_react.default.createElement("ul", {
    className: "site-footer__contact"
  }, contact.map(c => /*#__PURE__*/_react.default.createElement("li", {
    key: c.label
  }, c.icon && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: c.icon,
    size: 14
  }), c.href ? /*#__PURE__*/_react.default.createElement("a", {
    href: c.href
  }, c.label) : /*#__PURE__*/_react.default.createElement("span", null, c.label))))), /*#__PURE__*/_react.default.createElement("nav", {
    "aria-label": "Links \xFAteis"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "site-footer__title"
  }, "Links \xFAteis"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "site-footer__links"
  }, links.map(l => /*#__PURE__*/_react.default.createElement("li", {
    key: l.href
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: l.href,
    onClick: e => onNavigate && onNavigate(l.href, e)
  }, l.label))))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "site-footer__title"
  }, "Siga-nos"), /*#__PURE__*/_react.default.createElement(_SocialLinks.SocialLinks, {
    items: social
  })), /*#__PURE__*/_react.default.createElement(_NewsletterForm.NewsletterForm, {
    description: newsletterDescription,
    onSubmit: onNewsletterSubmit
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__bottom"
  }, /*#__PURE__*/_react.default.createElement("p", null, copyright || '© ' + year + ' ' + brandName + '. Todos os direitos reservados.'), /*#__PURE__*/_react.default.createElement("ul", {
    className: "site-footer__legal"
  }, legalLinks.map(l => /*#__PURE__*/_react.default.createElement("li", {
    key: l.label
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: l.href
  }, l.label)))))));
}
  };
  defs["components/cards/ProgramCard.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgramCard = ProgramCard;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _ArrowLink = require("../core/ArrowLink.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ProgramCard({
  title,
  description,
  image,
  imageAlt = '',
  imagePosition = 'center',
  icon = 'dumbbell',
  href = '#',
  linkLabel = 'Saiba mais',
  className = ''
}) {
  return /*#__PURE__*/_react.default.createElement("article", {
    className: ['program-card', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "program-card__media"
  }, image ? /*#__PURE__*/_react.default.createElement("img", {
    className: "program-card__image",
    src: image,
    alt: imageAlt,
    loading: "lazy",
    style: {
      objectPosition: imagePosition
    }
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "program-card__image"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "program-card__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: icon,
    size: 20
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "program-card__body"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "program-card__title"
  }, title), description && /*#__PURE__*/_react.default.createElement("p", {
    className: "program-card__description"
  }, description), linkLabel ? /*#__PURE__*/_react.default.createElement(_ArrowLink.ArrowLink, {
    href: href,
    className: "program-card__link"
  }, linkLabel, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, " \u2014 ", title)) : null));
}
  };
  defs["components/cards/PricingCard.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricingCard = PricingCard;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
var _Badge = require("../core/Badge.jsx");
var _Button = require("../core/Button.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function PricingCard({
  name,
  tagline,
  taglineIcon,
  price,
  currency = '€',
  currencyPosition = 'after',
  period = '/mês',
  features = [],
  featured = false,
  badge,
  ctaLabel = 'Escolher este plano',
  ctaHref,
  onSelect,
  className = ''
}) {
  const cls = ['pricing-card', featured && 'pricing-card--featured', className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement("article", {
    className: cls
  }, badge && /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    variant: "popular",
    className: "pricing-card__badge"
  }, badge), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "pricing-card__name"
  }, name), tagline && /*#__PURE__*/_react.default.createElement("p", {
    className: "pricing-card__tagline"
  }, taglineIcon && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: taglineIcon,
    size: 14
  }), tagline)), /*#__PURE__*/_react.default.createElement("p", {
    className: "pricing-card__price"
  }, currencyPosition === 'before' && /*#__PURE__*/_react.default.createElement("span", {
    className: "pricing-card__currency pricing-card__currency--before"
  }, currency), /*#__PURE__*/_react.default.createElement("span", {
    className: "pricing-card__amount"
  }, price), currencyPosition !== 'before' && /*#__PURE__*/_react.default.createElement("span", {
    className: "pricing-card__currency"
  }, currency), /*#__PURE__*/_react.default.createElement("span", {
    className: "pricing-card__period"
  }, period)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "pricing-card__features"
  }, features.map(f => /*#__PURE__*/_react.default.createElement("li", {
    key: f
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2.5
  }), f))), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    variant: featured ? 'primary' : 'outline',
    block: true,
    href: ctaHref,
    onClick: onSelect,
    className: "pricing-card__cta"
  }, ctaLabel, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, " \u2014 ", name)));
}
  };
  defs["components/cards/CoachCard.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoachCard = CoachCard;
var _react = _interopRequireDefault(require("react"));
var _SocialLinks = require("../content/SocialLinks.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CoachCard({
  name,
  role,
  meta,
  photo,
  photoAlt,
  photoPosition,
  photoRatio,
  social = [],
  className = ''
}) {
  const photoStyle = {};
  if (photoRatio) photoStyle.aspectRatio = photoRatio;
  if (photoPosition) photoStyle.objectPosition = photoPosition;
  return /*#__PURE__*/_react.default.createElement("article", {
    className: ['coach-card', className].filter(Boolean).join(' ')
  }, photo ? /*#__PURE__*/_react.default.createElement("img", {
    className: "coach-card__photo",
    src: photo,
    alt: photoAlt !== undefined ? photoAlt : name,
    loading: "lazy",
    style: photoStyle
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "coach-card__photo",
    style: photoStyle
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "coach-card__body"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "coach-card__name"
  }, name), role && /*#__PURE__*/_react.default.createElement("p", {
    className: "coach-card__role"
  }, role), meta && /*#__PURE__*/_react.default.createElement("p", {
    className: "coach-card__meta"
  }, meta), social.length > 0 && /*#__PURE__*/_react.default.createElement(_SocialLinks.SocialLinks, {
    items: social,
    variant: "ring",
    owner: name,
    className: "coach-card__social"
  })));
}
  };
  defs["components/cards/TestimonialCard.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestimonialCard = TestimonialCard;
var _react = _interopRequireDefault(require("react"));
var _StarRating = require("./StarRating.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TestimonialCard({
  name,
  avatar,
  rating = 5,
  quote,
  className = ''
}) {
  return /*#__PURE__*/_react.default.createElement("figure", {
    className: ['testimonial-card', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/_react.default.createElement("figcaption", {
    className: "testimonial-card__head"
  }, avatar ? /*#__PURE__*/_react.default.createElement("img", {
    className: "testimonial-card__avatar",
    src: avatar,
    alt: ""
  }) : /*#__PURE__*/_react.default.createElement("span", {
    className: "testimonial-card__avatar testimonial-card__initial",
    "aria-hidden": "true"
  }, String(name || '').charAt(0)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "testimonial-card__name"
  }, name), rating ? /*#__PURE__*/_react.default.createElement(_StarRating.StarRating, {
    value: rating
  }) : null)), /*#__PURE__*/_react.default.createElement("blockquote", {
    className: "testimonial-card__quote"
  }, /*#__PURE__*/_react.default.createElement("p", null, '\u201C' + quote + '\u201D')));
}
  };
  defs["components/cards/StarRating.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRating = StarRating;
var _react = _interopRequireDefault(require("react"));
var _Icon = require("../core/Icon.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function StarRating({
  value = 5,
  max = 5,
  size = 14,
  className = ''
}) {
  const on = Math.round(value);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: ['star-rating', className].filter(Boolean).join(' '),
    role: "img",
    "aria-label": 'Nota: ' + value + ' de ' + max
  }, Array.from({
    length: max
  }, (_, i) => /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    key: i,
    name: "star",
    size: size,
    filled: true,
    className: i < on ? 'is-on' : 'is-off'
  })));
}
  };
  defs["components/feedback/Modal.jsx"] = function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireDefault(require("react"));
var _IconButton = require("../core/IconButton.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
let uid = 0;
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function Modal({
  open,
  onClose,
  title,
  children,
  actions,
  dark = false,
  size = 'md',
  inline = false,
  closeLabel = 'Fechar',
  className = ''
}) {
  const panelRef = _react.default.useRef(null);
  const idRef = _react.default.useRef(null);
  if (idRef.current === null) idRef.current = 'fl-modal-' + ++uid;
  const titleId = idRef.current;
  _react.default.useEffect(() => {
    if (!open || inline) return undefined;
    const trigger = document.activeElement;
    const panel = panelRef.current;
    const items = () => Array.prototype.slice.call(panel.querySelectorAll(FOCUSABLE));
    const first = items().find(el => !el.classList.contains('modal__close'));
    (first || items()[0] || panel).focus();
    function onKey(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (onClose) onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const list = items();
      if (!list.length) return;
      const a = list[0],
        z = list[list.length - 1];
      if (e.shiftKey && document.activeElement === a) {
        e.preventDefault();
        z.focus();
      } else if (!e.shiftKey && document.activeElement === z) {
        e.preventDefault();
        a.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      if (trigger && trigger.focus) trigger.focus();
    };
  }, [open, inline]);
  if (!open) return null;
  const cls = ['modal', dark && 'modal--dark', size === 'lg' && 'modal--lg', className].filter(Boolean).join(' ');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'modal-backdrop' + (inline ? ' modal-backdrop--inline' : ''),
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: panelRef,
    className: cls,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    tabIndex: -1
  }, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    icon: "x",
    label: closeLabel,
    className: "modal__close",
    onLight: !dark,
    onClick: onClose
  }), title && /*#__PURE__*/_react.default.createElement("h2", {
    id: titleId,
    className: "modal__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__body"
  }, children), actions && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__actions"
  }, actions)));
}
  };
  var cache = {};
  function resolve(from, spec) {
    var parts = from.split('/'); parts.pop();
    spec.split('/').forEach(function (s) { if (s === '..') parts.pop(); else if (s !== '.') parts.push(s); });
    return parts.join('/');
  }
  function load(key) {
    if (cache[key]) return cache[key].exports;
    var m = { exports: {} }; cache[key] = m;
    defs[key](function (spec) {
      if (spec === 'react') return window.React;
      if (spec === 'react-dom') return window.ReactDOM;
      return load(resolve(key, spec));
    }, m, m.exports);
    return m.exports;
  }
  var ns = {};
  Object.keys(defs).forEach(function (k) {
    var ex = load(k);
    Object.keys(ex).forEach(function (n) { if (n !== '__esModule') ns[n] = ex[n]; });
  });
  window.FL = ns;
  window.FitLifeDS = Promise.resolve(ns);
})();

/* hero.jsx */
(function () {
function Hero({
  onStart
}) {
  const {
    SectionHeading,
    Button,
    FeatureStrip
  } = window.FL;
  const D = window.FL_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "inicio",
    className: "hero",
    "aria-label": "In\xEDcio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: D.images.hero,
    alt: 'Treino na ' + D.brand.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("img", {
    className: "hero__brush",
    src: D.images.brushSide,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "container hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__content"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    size: "display",
    level: 1,
    eyebrow: D.brand.tagline,
    title: "Alcance seus",
    highlight: "objetivos",
    description: D.hero.description
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    onClick: onStart
  }, "Matricule-se"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#planos"
  }, "Ver planos"))), /*#__PURE__*/React.createElement(FeatureStrip, {
    className: "hero__features",
    items: D.features
  })));
}
Object.assign(window, {
  Hero
});
})();

/* estrutura.jsx */
(function () {
function Estrutura() {
  const {
    SectionHeading,
    ArrowLink,
    ProgramCard
  } = window.FL;
  const D = window.FL_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "estrutura",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    className: "kit-head",
    eyebrow: "Nossa estrutura",
    title: "Alguns motivos para",
    highlight: "treinar com a gente",
    description: "Estrutura completa para voc\xEA treinar com conforto e seguran\xE7a.",
    action: /*#__PURE__*/React.createElement(ArrowLink, {
      href: "#planos"
    }, "Ver planos")
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-grid-3"
  }, D.amenities.map(a => /*#__PURE__*/React.createElement(ProgramCard, {
    key: a.title,
    title: a.title,
    description: a.description,
    icon: a.icon,
    image: a.image,
    imagePosition: a.position,
    imageAlt: a.title,
    linkLabel: ""
  })))));
}
function Horarios() {
  const {
    SectionHeading,
    Icon
  } = window.FL;
  const D = window.FL_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "horarios",
    className: "hours",
    "aria-label": "Hor\xE1rios"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hours__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: D.images.hours,
    alt: 'Fachada da ' + D.brand.name,
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hours__content"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    eyebrow: "Hor\xE1rios",
    title: "Planeje seu",
    highlight: "treino",
    description: "Esperamos voc\xEA!"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "hours__list"
  }, D.hours.map(h => /*#__PURE__*/React.createElement("li", {
    key: h.day,
    className: "hours__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hours__day"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18
  }), h.day), /*#__PURE__*/React.createElement("span", {
    className: "hours__times"
  }, h.times.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "hours__time"
  }, t))))))));
}
Object.assign(window, {
  Estrutura,
  Horarios
});
})();

/* equipe.jsx */
(function () {
function Equipe() {
  const {
    SectionHeading,
    CoachCard
  } = window.FL;
  const D = window.FL_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "equipe",
    className: "section section--dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    className: "kit-head",
    onDark: true,
    eyebrow: "Nossa equipe",
    title: "Profissionais",
    highlight: "ao seu lado",
    description: "Personal trainers, professores, nutricionista e atendimento: cada um na sua fun\xE7\xE3o para ajudar voc\xEA a evoluir."
  }), /*#__PURE__*/React.createElement("div", {
    className: "team-grid"
  }, D.team.map(p => /*#__PURE__*/React.createElement(CoachCard, {
    key: p.name + p.role,
    name: p.name,
    role: p.role,
    meta: p.meta,
    photo: p.photo,
    photoAlt: p.name + ', ' + p.role,
    social: p.social || []
  })))));
}
Object.assign(window, {
  Equipe
});
})();

/* pricing.jsx */
(function () {
function Planos({
  onSelect
}) {
  const {
    SectionHeading,
    SegmentedControl,
    PricingCard
  } = window.FL;
  const D = window.FL_DATA;
  const [groupId, setGroupId] = React.useState(D.planGroups[0].id);
  const group = D.planGroups.find(g => g.id === groupId) || D.planGroups[0];
  return /*#__PURE__*/React.createElement("section", {
    id: "planos",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    className: "kit-head",
    eyebrow: "Nossos planos",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Planos adaptados", /*#__PURE__*/React.createElement("br", null), "\xE0s suas necessidades"),
    action: /*#__PURE__*/React.createElement(SegmentedControl, {
      label: "Tipo de plano",
      value: groupId,
      onChange: setGroupId,
      options: D.planGroups.map(g => ({
        value: g.id,
        label: g.label
      }))
    })
  }), /*#__PURE__*/React.createElement("p", {
    className: "kit-group-note"
  }, group.note), /*#__PURE__*/React.createElement("div", {
    className: 'pricing-grid kit-pricing' + (group.plans.length === 3 ? ' kit-pricing--3' : '')
  }, group.plans.map(p => /*#__PURE__*/React.createElement(PricingCard, {
    key: group.id + p.name,
    name: p.name,
    tagline: p.tagline,
    taglineIcon: p.taglineIcon,
    price: p.price,
    currency: "R$",
    currencyPosition: "before",
    period: p.period || '/mês',
    features: p.features || [],
    featured: !!p.featured,
    badge: p.badge,
    onSelect: () => onSelect(Object.assign({
      group: group.label
    }, p))
  })))));
}
function FinalCta({
  onStart
}) {
  const {
    SectionHeading,
    Button
  } = window.FL;
  const D = window.FL_DATA;
  return /*#__PURE__*/React.createElement("section", {
    className: "final-cta",
    "aria-label": "Pronto para come\xE7ar?"
  }, /*#__PURE__*/React.createElement("img", {
    className: "final-cta__brush",
    src: D.images.brushSide,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "container final-cta__inner"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    eyebrow: "Pronto para come\xE7ar?",
    title: "Sua transforma\xE7\xE3o",
    highlight: "come\xE7a aqui!",
    description: "Venha treinar com a gente e d\xEA o primeiro passo rumo \xE0 melhor vers\xE3o de voc\xEA."
  }), /*#__PURE__*/React.createElement("div", {
    className: "final-cta__action"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    onClick: onStart
  }, "Matricule-se agora"), /*#__PURE__*/React.createElement("p", {
    className: "final-cta__note"
  }, "Atendimento: ", D.brand.phone))));
}
Object.assign(window, {
  Planos,
  FinalCta
});
})();

/* dialogs.jsx */
(function () {
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function SignupDialog({
  state,
  onClose
}) {
  const {
    Modal,
    Input,
    Button
  } = window.FL;
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(null);
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    if (state) {
      setEmail('');
      setError(null);
      setDone(false);
    }
  }, [state]);
  const plan = state && state.plan;
  function submit(e) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError('Digite um e-mail válido.');
      return;
    }
    setDone(true);
  }
  const title = done ? 'Obrigado!' : plan ? plan.name : 'Matricule-se';
  return /*#__PURE__*/React.createElement(Modal, {
    open: !!state,
    onClose: onClose,
    title: title
  }, done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Recebemos sua solicita\xE7\xE3o. Entraremos em contato pelo e-mail ", email.trim(), "."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose
  }, "Fechar")) : /*#__PURE__*/React.createElement("form", {
    className: "kit-form",
    onSubmit: submit,
    noValidate: true
  }, plan && /*#__PURE__*/React.createElement("p", {
    className: "kit-plan"
  }, /*#__PURE__*/React.createElement("strong", null, "R$ ", plan.price, plan.period || '/mês'), " \xB7 ", plan.group, plan.features && plan.features.length ? ' · ' + plan.features.join(' ') : ''), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    autoComplete: "email",
    placeholder: "Seu e-mail",
    value: email,
    error: error,
    onChange: e => {
      setEmail(e.target.value);
      setError(null);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    block: true,
    icon: "arrow-right"
  }, plan ? 'Escolher este plano' : 'Matricule-se agora')));
}
Object.assign(window, {
  SignupDialog
});
})();

/* app.jsx */
(function () {
const SECTION_IDS = ['inicio', 'estrutura', 'equipe', 'planos', 'horarios', 'contato'];
function App() {
  const {
    SiteHeader,
    SiteFooter
  } = window.FL;
  const D = window.FL_DATA;
  const [active, setActive] = React.useState('#inicio');
  const [signup, setSignup] = React.useState(null);
  React.useEffect(() => {
    document.title = D.brand.name + ' — ' + D.brand.tagline;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive('#' + e.target.id);
      });
    }, {
      rootMargin: '-45% 0px -50% 0px'
    });
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  const openSignup = plan => setSignup({
    plan: plan || null
  });
  const contact = [{
    icon: 'map-pin',
    label: D.brand.address
  }, {
    icon: 'phone',
    label: D.brand.phone,
    href: D.brand.phoneHref
  }, {
    icon: 'mail',
    label: D.brand.email,
    href: 'mailto:' + D.brand.email
  }];
  const social = [{
    network: 'instagram',
    href: D.brand.instagram
  }, {
    network: 'facebook',
    href: D.brand.facebook
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "kit-brush",
    src: D.images.brushTop,
    alt: ""
  }), /*#__PURE__*/React.createElement(SiteHeader, {
    links: D.nav,
    activeHref: active,
    onNavigate: href => setActive(href),
    onCtaClick: () => openSignup(),
    logoSrc: D.brand.logo,
    logoHeight: D.brand.logoHeight || 56,
    brandName: D.brand.name
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onStart: () => openSignup()
  }), /*#__PURE__*/React.createElement(Estrutura, null), /*#__PURE__*/React.createElement(Equipe, null), /*#__PURE__*/React.createElement(Planos, {
    onSelect: openSignup
  }), /*#__PURE__*/React.createElement(Horarios, null), /*#__PURE__*/React.createElement(FinalCta, {
    onStart: () => openSignup()
  })), /*#__PURE__*/React.createElement("div", {
    id: "contato"
  }, /*#__PURE__*/React.createElement(SiteFooter, {
    links: D.nav,
    social: social,
    contact: contact,
    logoSrc: D.brand.logo,
    logoHeight: D.brand.logoFooterHeight || 56,
    brandName: D.brand.name,
    onNavigate: href => setActive(href)
  })), /*#__PURE__*/React.createElement(SignupDialog, {
    state: signup,
    onClose: () => setSignup(null)
  }));
}
window.FitLifeDS.then(ns => {
  window.FL = ns;
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
});
})();
