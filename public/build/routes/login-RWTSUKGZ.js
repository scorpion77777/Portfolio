import {
  FormField
} from "/build/_shared/chunk-VGNREFO2.js";
import {
  Layout
} from "/build/_shared/chunk-BNMJ7VGO.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useActionData
} from "/build/_shared/chunk-E4BGBYZL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:../utils/validators.server
var require_validators = __commonJS({
  "empty-module:../utils/validators.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../utils/auth.server
var require_auth = __commonJS({
  "empty-module:../utils/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/login.tsx
var import_react = __toESM(require_react());
var import_validators = __toESM(require_validators());
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  var _a, _b, _c, _d;
  const actionData = useActionData();
  const firstLoad = (0, import_react.useRef)(true);
  const [action, setAction] = (0, import_react.useState)("login");
  const [errors, setErrors] = (0, import_react.useState)((actionData == null ? void 0 : actionData.errors) || {});
  const [formError, setFormError] = (0, import_react.useState)((actionData == null ? void 0 : actionData.error) || "");
  const [formData, setFormData] = (0, import_react.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    firstName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || "",
    lastName: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.firstName) || ""
  });
  const handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  (0, import_react.useEffect)(() => {
    if (!firstLoad.current) {
      const newState = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      };
      setErrors(newState);
      setFormError("");
      setFormData(newState);
    }
  }, [action]);
  (0, import_react.useEffect)(() => {
    if (!firstLoad.current) {
      setFormError("");
    }
  }, [formData]);
  (0, import_react.useEffect)(() => {
    firstLoad.current = false;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        onClick: () => setAction(action == "login" ? "register" : "login"),
        className: "absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 hover:bg-yellow-400 hover:-translate-y-1",
        children: action === "login" ? "Sign Up" : "Sign In"
      },
      void 0,
      false,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 119,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        className: "h-24 w-24 m-2 ml-4 cursor-pointer hover:shadow-3xl rounded-full mb-5",
        src: "https://img.icons8.com/plasticine/512/homer-simpson.png",
        alt: "Sonic Youth On Stage"
      },
      void 0,
      false,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 123,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-extrabold text-yellow-300 shadow-2xl", children: "Welcome to My Team" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 126,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-slate-300", children: action === "login" ? "Log In To Connect with the team!" : "Sign Up To Get Started!" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 128,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "POST", className: "rounded-2xl bg-gray-200 p-6 w-96 shadow-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: formError }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 132,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        FormField,
        {
          htmlFor: "email",
          label: "Email",
          value: formData.email,
          onChange: (e) => handleInputChange(e, "email"),
          error: errors == null ? void 0 : errors.email
        },
        void 0,
        false,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 135,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        FormField,
        {
          htmlFor: "password",
          type: "password",
          label: "Password",
          value: formData.password,
          onChange: (e) => handleInputChange(e, "password"),
          error: errors == null ? void 0 : errors.password
        },
        void 0,
        false,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 142,
          columnNumber: 21
        },
        this
      ),
      action === "register" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { htmlFor: "firstName", label: "First Name", onChange: (e) => handleInputChange(e, "firstName"), value: formData.firstName, error: errors == null ? void 0 : errors.firstName }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 154,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { htmlFor: "lastName", label: "Last Name", onChange: (e) => handleInputChange(e, "lastName"), value: formData.lastName, error: errors == null ? void 0 : errors.lastName }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 156,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 152,
        columnNumber: 50
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_action", value: action, className: "rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: action === "login" ? "Sign In" : "Sign Up" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 161,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 160,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 131,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl text-white font-extrabold", children: "Made with \u2764\uFE0F\u200D\u{1F525}" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 169,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 168,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 117,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 116,
    columnNumber: 9
  }, this);
}
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-RWTSUKGZ.js.map
