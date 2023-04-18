import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-DSQI4GSY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/form-field.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {
  },
  error = ""
}) {
  const [errorText, setErrorText] = (0, import_react.useState)(error);
  (0, import_react.useEffect)(() => {
    setErrorText(error);
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor, className: "text-blue-600 font-semibold", children: label }, void 0, false, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: (e) => {
      onChange(e);
      setErrorText("");
    }, type, id: htmlFor, name: htmlFor, className: "w-full p-2 rounded-xl my-2", value }, void 0, false, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: errorText || "" }, void 0, false, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/form-field.tsx",
    lineNumber: 26,
    columnNumber: 12
  }, this);
}

export {
  FormField
};
//# sourceMappingURL=/build/_shared/chunk-RWEPIB72.js.map
