import {
  FormField
} from "/build/_shared/chunk-RWEPIB72.js";
import {
  Modal
} from "/build/_shared/chunk-OOECYOVG.js";
import "/build/_shared/chunk-LHKRQSYI.js";
import {
  SelectBox,
  departments
} from "/build/_shared/chunk-R3VDDOO2.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-DSQI4GSY.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/utils/validators.server
var require_validators = __commonJS({
  "empty-module:~/utils/validators.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../../utils/auth.server
var require_auth = __commonJS({
  "empty-module:../../utils/auth.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../../utils/user.server
var require_user = __commonJS({
  "empty-module:../../utils/user.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/home/profile.tsx
var import_react3 = __toESM(require_react());
var import_validators = __toESM(require_validators());
var import_auth = __toESM(require_auth());

// app/components/image-uploader.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ImageUploader = ({ onChange, imageUrl }) => {
  const [draggingOver, setDraggingOver] = (0, import_react.useState)(false);
  const fileInputRef = (0, import_react.useRef)(null);
  const dropRef = (0, import_react.useRef)(null);
  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    preventDefaults(e);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };
  const handleChange = (event) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      onChange(event.currentTarget.files[0]);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      ref: dropRef,
      className: `${draggingOver ? "border-4 border-dashed border-yellow-300 border-rounded" : ""} group rounded-full relative w-24 h-24 flex justify-center items-center bg-gray-400 transition duration-300 ease-in-out hover:bg-gray-500 cursor-pointer`,
      style: {
        backgroundSize: "cover",
        ...imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}
      },
      onDragEnter: () => setDraggingOver(true),
      onDragLeave: () => setDraggingOver(false),
      onDrag: preventDefaults,
      onDragStart: preventDefaults,
      onDragEnd: preventDefaults,
      onDragOver: preventDefaults,
      onDrop: handleDrop,
      onClick: () => {
        var _a;
        return (_a = fileInputRef.current) == null ? void 0 : _a.click();
      },
      children: [
        imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute w-full h-full bg-blue-400 opacity-50 rounded-full transition duration-300 ease-in-out group-hover:opacity-0" }, void 0, false, {
          fileName: "app/components/image-uploader.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-extrabold text-4xl text-gray-200 cursor-pointer select-none transition duration-300 ease-in-out group-hover:opacity-0 pointer-events-none z-10", children: "+" }, void 0, false, {
          fileName: "app/components/image-uploader.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", ref: fileInputRef, onChange: handleChange, className: "hidden" }, void 0, false, {
          fileName: "app/components/image-uploader.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/image-uploader.tsx",
      lineNumber: 37,
      columnNumber: 9
    },
    this
  );
};

// app/routes/home/profile.tsx
var import_user = __toESM(require_user());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ProfileSettings() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const { user } = useLoaderData();
  const actionData = useActionData();
  const [formError, setFormError] = (0, import_react3.useState)((actionData == null ? void 0 : actionData.error) || "");
  const firstLoad = (0, import_react3.useRef)(true);
  const [formData, setFormData] = (0, import_react3.useState)({
    firstName: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.firstName) || ((_b = user == null ? void 0 : user.profile) == null ? void 0 : _b.firstName),
    lastName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || ((_d = user == null ? void 0 : user.profile) == null ? void 0 : _d.lastName),
    department: ((_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.department) || (((_f = user == null ? void 0 : user.profile) == null ? void 0 : _f.department) || "MARKETING"),
    profilePicture: ((_g = user == null ? void 0 : user.profile) == null ? void 0 : _g.profilePicture) || ""
  });
  (0, import_react3.useEffect)(() => {
    if (!firstLoad.current) {
      setFormError("");
    }
  }, [formData]);
  (0, import_react3.useEffect)(() => {
    firstLoad.current = false;
  }, []);
  const handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  const handleFileUpload = async (file) => {
    let inputFormData = new FormData();
    inputFormData.append("profile-pic", file);
    const response = await fetch("/avatar", {
      method: "POST",
      body: inputFormData
    });
    const { imageUrl } = await response.json();
    setFormData({
      ...formData,
      profilePicture: imageUrl
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal, { isOpen: true, className: "w-1/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-4xl font-semibold text-blue-600 text-center mb-4", children: "Your Profile" }, void 0, false, {
      fileName: "app/routes/home/profile.tsx",
      lineNumber: 112,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2", children: formError }, void 0, false, {
      fileName: "app/routes/home/profile.tsx",
      lineNumber: 113,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-1/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageUploader, { onChange: handleFileUpload, imageUrl: formData.profilePicture || "" }, void 0, false, {
        fileName: "app/routes/home/profile.tsx",
        lineNumber: 118,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profile.tsx",
        lineNumber: 117,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { method: "post", onSubmit: (e) => !confirm("Are you sure?") ? e.preventDefault() : true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          FormField,
          {
            htmlFor: "firstName",
            label: "First Name",
            value: formData.firstName,
            onChange: (e) => handleInputChange(e, "firstName"),
            error: (_h = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _h.firstName
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profile.tsx",
            lineNumber: 122,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          FormField,
          {
            htmlFor: "lastName",
            label: "Last Name",
            value: formData.lastName,
            onChange: (e) => handleInputChange(e, "lastName"),
            error: (_i = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _i.lastName
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profile.tsx",
            lineNumber: 129,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          SelectBox,
          {
            className: "w-full rounded-xl px-3 py-2 text-gray-400",
            id: "department",
            label: "Department",
            name: "department",
            options: departments,
            value: formData.department,
            onChange: (e) => handleInputChange(e, "department")
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profile.tsx",
            lineNumber: 136,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { name: "_action", value: "delete", className: "rounded-xl w-full bg-red-300 font-semibold text-white mt-4 px-16 py-2 transition duration-300 ease-in-out hover:bg-red-400 hover:-translate-y-1", children: "Delete Account" }, void 0, false, {
          fileName: "app/routes/home/profile.tsx",
          lineNumber: 145,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full text-right mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { name: "_action", value: "save", className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 px-16 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: "Save" }, void 0, false, {
          fileName: "app/routes/home/profile.tsx",
          lineNumber: 149,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profile.tsx",
          lineNumber: 148,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profile.tsx",
        lineNumber: 121,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profile.tsx",
        lineNumber: 120,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profile.tsx",
      lineNumber: 116,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profile.tsx",
    lineNumber: 111,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profile.tsx",
    lineNumber: 110,
    columnNumber: 9
  }, this);
}
export {
  ProfileSettings as default
};
//# sourceMappingURL=/build/routes/home/profile-TZNUQWRM.js.map
