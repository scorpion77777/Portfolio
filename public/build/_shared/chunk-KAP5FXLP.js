import {
  backgroundColorMap,
  colorMap,
  emojiMap
} from "/build/_shared/chunk-R3VDDOO2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-DSQI4GSY.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/utils/user.server
var require_user = __commonJS({
  "empty-module:~/utils/user.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/utils/auth.server
var require_auth = __commonJS({
  "empty-module:~/utils/auth.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/utils/kudos.server
var require_kudos = __commonJS({
  "empty-module:~/utils/kudos.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/user-circle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserCircle({ profile, onClick, className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `${className} cursor-pointer bg-gray-400 rounded-full flex justify-center items-center`,
      onClick,
      style: {
        backgroundSize: "cover",
        ...profile.profilePicture ? { backgroundImage: `url(${profile.profilePicture})` } : {}
      },
      children: !profile.profilePicture && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
        profile.firstName.charAt(0).toUpperCase(),
        profile.lastName.charAt(0).toUpperCase()
      ] }, void 0, true, {
        fileName: "app/components/user-circle.tsx",
        lineNumber: 21,
        columnNumber: 21
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/user-circle.tsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  );
}

// app/components/kudo.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Kudo({ profile, kudo }) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `flex ${backgroundColorMap[((_a = kudo.style) == null ? void 0 : _a.backgroundColor) || "RED"]} p-4 rounded-xl w-full gap-x-2 relative`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserCircle, { profile, className: "h-16 w-16" }, void 0, false, {
      fileName: "app/components/kudo.tsx",
      lineNumber: 10,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/kudo.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: `${colorMap[((_b = kudo.style) == null ? void 0 : _b.textColor) || "WHITE"]} font-bold text-lg whitespace-pre-wrap break-all`, children: [
        profile.firstName,
        " ",
        profile.lastName
      ] }, void 0, true, {
        fileName: "app/components/kudo.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: `${colorMap[((_c = kudo.style) == null ? void 0 : _c.textColor) || "WHITE"]} whitespace-pre-wrap break-all`, children: kudo.message }, void 0, false, {
        fileName: "app/components/kudo.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/kudo.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute bottom-4 right-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl", children: emojiMap[((_d = kudo.style) == null ? void 0 : _d.emoji) || "THUMBSUP"] }, void 0, false, {
      fileName: "app/components/kudo.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/kudo.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

export {
  require_user,
  require_auth,
  UserCircle,
  Kudo,
  require_kudos
};
//# sourceMappingURL=/build/_shared/chunk-KAP5FXLP.js.map
