import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-E4BGBYZL.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/utils/constants.ts
var colorMap = {
  RED: "text-red-400",
  GREEN: "text-green-400",
  BLUE: "text-blue-400",
  WHITE: "text-white",
  YELLOW: "text-yellow-300"
};
var backgroundColorMap = {
  RED: "bg-red-400",
  GREEN: "bg-green-400",
  BLUE: "bg-blue-400",
  WHITE: "bg-white",
  YELLOW: "bg-yellow-300"
};
var emojiMap = {
  THUMBSUP: "\u{1F44D}",
  PARTY: "\u{1F389}",
  HANDSUP: "\u{1F64C}\u{1F3FB}"
};
var sortOptions = [
  {
    name: "Date",
    value: "date"
  },
  {
    name: "Sender Name",
    value: "sender"
  },
  {
    name: "Emoji",
    value: "emoji"
  }
];
var departments = [
  { name: "HR", value: "HR" },
  { name: "Engineering", value: "ENGINEERING" },
  { name: "Sales", value: "SALES" },
  { name: "Marketing", value: "MARKETING" }
];

// app/components/select-box.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SelectBox({
  options = [],
  onChange = () => {
  },
  className = "",
  containerClassName = "",
  name,
  id,
  value,
  label
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: id, className: "text-blue-600 font-semibold", children: label }, void 0, false, {
      fileName: "app/components/select-box.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex items-center ${containerClassName} my-2`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: `${className} appearance-none`, id, name, onChange, value: value || "", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.name }, option.name, false, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 32,
        columnNumber: 29
      }, this)) }, void 0, false, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-gray-400 -ml-7 mt-1 pointer-events-none", viewBox: "0 0 140 140", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" }, void 0, false, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 38,
        columnNumber: 160
      }, this) }, void 0, false, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 38,
        columnNumber: 157
      }, this) }, void 0, false, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/select-box.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/select-box.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

export {
  colorMap,
  backgroundColorMap,
  emojiMap,
  sortOptions,
  departments,
  SelectBox
};
//# sourceMappingURL=/build/_shared/chunk-IBDJ6IMC.js.map
