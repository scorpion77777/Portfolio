var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
}, __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default")), __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-S5PKYUE2.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/avatar.tsx
var avatar_exports = {};
__export(avatar_exports, {
  action: () => action
});
var import_node3 = require("@remix-run/node");

// app/utils/auth.server.ts
var import_node = require("@remix-run/node");

// app/utils/prisma.server.ts
var prisma_server_exports = {};
__export(prisma_server_exports, {
  prisma: () => prisma
});
var import_client = require("@prisma/client");
__reExport(prisma_server_exports, require("@prisma/client"));
var prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var createUser = async (user) => {
  let passwordHash = await import_bcryptjs.default.hash(user.password, 10);
  return { id: (await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      profile: {
        firstName: user.firstName,
        lastName: user.lastName
      }
    }
  })).id, email: user.email };
}, getOtherUsers = async (userId) => await prisma.user.findMany({
  where: {
    id: { not: userId }
  },
  orderBy: {
    profile: {
      firstName: "asc"
    }
  }
}), getUserById = async (userId) => await prisma.user.findUnique({
  where: {
    id: userId
  }
}), updateUser = async (userId, profile) => {
  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      profile: {
        update: profile
      }
    }
  });
}, deleteUser = async (id) => {
  await prisma.user.delete({ where: { id } });
};

// app/utils/auth.server.ts
var import_bcryptjs2 = __toESM(require("bcryptjs")), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "kudos-session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function register(user) {
  if (await prisma.user.count({ where: { email: user.email } }))
    return (0, import_node.json)(
      { error: "User already exists with that email" },
      { status: 400 }
    );
  let newUser = await createUser(user);
  return newUser ? createUserSession(newUser.id, "/") : (0, import_node.json)(
    {
      error: "Something went wrong trying to create a new user.",
      fields: { email: user.email, password: user.password }
    },
    { status: 400 }
  );
}
async function login({ email, password }) {
  let user = await prisma.user.findUnique({
    where: { email }
  });
  return !user || !await import_bcryptjs2.default.compare(password, user.password) ? (0, import_node.json)({ error: "Incorrect login" }, { status: 400 }) : createUserSession(user.id, "/");
}
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { id: !0, email: !0, profile: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/utils/s3.server.ts
var import_node2 = require("@remix-run/node"), import_s3 = __toESM(require("aws-sdk/clients/s3")), import_cuid = __toESM(require("cuid")), s3 = new import_s3.default({
  region: process.env.BUCKET_REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
}), uploadHandler = async ({ name, filename, stream }) => {
  if (name !== "profile-pic") {
    stream.resume();
    return;
  }
  let { Location } = await s3.upload({
    Bucket: process.env.BUCKET_NAME || "",
    Key: `${(0, import_cuid.default)()}.${filename.split(".").slice(-1)}`,
    Body: stream
  }).promise();
  return Location;
};
async function uploadAvatar(request) {
  var _a;
  return ((_a = (await (0, import_node2.unstable_parseMultipartFormData)(
    request,
    uploadHandler
  )).get("profile-pic")) == null ? void 0 : _a.toString()) || "";
}

// app/routes/avatar.tsx
var action = async ({ request }) => {
  let userId = await requireUserId(request), imageUrl = await uploadAvatar(request);
  return await prisma.user.update({
    data: {
      profile: {
        update: {
          profilePicture: imageUrl
        }
      }
    },
    where: {
      id: userId
    }
  }), (0, import_node3.json)({ imageUrl });
};

// app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader
});
var import_node4 = require("@remix-run/node");
var action2 = async ({ request }) => logout(request), loader = async () => (0, import_node4.redirect)("/");

// app/routes/index.ts
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader2
});
var import_node5 = require("@remix-run/node");
var loader2 = async ({ request }) => (await requireUserId(request), (0, import_node5.redirect)("/home"));

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Login,
  loader: () => loader3
});
var import_react4 = require("react");

// app/components/layout.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-screen w-full bg-blue-600 font-mono", children }, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/form-field.tsx
var import_react3 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {
  },
  error = ""
}) {
  let [errorText, setErrorText] = (0, import_react3.useState)(error);
  return (0, import_react3.useEffect)(() => {
    setErrorText(error);
  }, [error]), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor, className: "text-blue-600 font-semibold", children: label }, void 0, !1, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { onChange: (e) => {
      onChange(e), setErrorText("");
    }, type, id: htmlFor, name: htmlFor, className: "w-full p-2 rounded-xl my-2", value }, void 0, !1, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: errorText || "" }, void 0, !1, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/form-field.tsx",
    lineNumber: 26,
    columnNumber: 12
  }, this);
}

// app/utils/validators.server.ts
var validateEmail = (email) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.length || !validRegex.test(email))
    return "Please enter a valid email address";
}, validatePassword = (password) => {
  if (password.length < 5)
    return "Password must be at least 5 characters long";
}, validateName = (name) => {
  if (!name.length)
    return "Please enter a value";
};

// app/routes/login.tsx
var import_node6 = require("@remix-run/node");
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => await getUser(request) ? (0, import_node6.redirect)("/") : null, action3 = async ({ request }) => {
  let form = await request.formData(), action6 = form.get("_action"), email = form.get("email"), password = form.get("password"), firstName = form.get("firstName"), lastName = form.get("lastName");
  if (typeof action6 != "string" || typeof email != "string" || typeof password != "string")
    return (0, import_node6.json)({ error: "Invalid Form Data", form: action6 }, { status: 400 });
  if (action6 === "register" && (typeof firstName != "string" || typeof lastName != "string"))
    return (0, import_node6.json)({ error: "Invalid Form Data", form: action6 }, { status: 400 });
  let errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...action6 === "register" ? {
      firstName: validateName(firstName || ""),
      lastName: validateName(lastName || "")
    } : {}
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node6.json)({ errors, fields: { email, password, firstName, lastName }, form: action6 }, { status: 400 });
  switch (action6) {
    case "login":
      return await login({ email, password });
    case "register":
      return firstName = firstName, lastName = lastName, await register({ email, password, firstName, lastName });
    default:
      return (0, import_node6.json)({ error: "Invalid Form Data" }, { status: 400 });
  }
};
function Login() {
  var _a, _b, _c, _d;
  let actionData = (0, import_react5.useActionData)(), firstLoad = (0, import_react4.useRef)(!0), [action6, setAction] = (0, import_react4.useState)("login"), [errors, setErrors] = (0, import_react4.useState)((actionData == null ? void 0 : actionData.errors) || {}), [formError, setFormError] = (0, import_react4.useState)((actionData == null ? void 0 : actionData.error) || ""), [formData, setFormData] = (0, import_react4.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    firstName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || "",
    lastName: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.firstName) || ""
  }), handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return (0, import_react4.useEffect)(() => {
    if (!firstLoad.current) {
      let newState = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      };
      setErrors(newState), setFormError(""), setFormData(newState);
    }
  }, [action6]), (0, import_react4.useEffect)(() => {
    firstLoad.current || setFormError("");
  }, [formData]), (0, import_react4.useEffect)(() => {
    firstLoad.current = !1;
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        onClick: () => setAction(action6 == "login" ? "register" : "login"),
        className: "absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 hover:bg-yellow-400 hover:-translate-y-1",
        children: action6 === "login" ? "Sign Up" : "Sign In"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 119,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        className: "h-24 w-24 m-2 ml-4 cursor-pointer hover:shadow-3xl rounded-full mb-5",
        src: "https://img.icons8.com/plasticine/512/homer-simpson.png",
        alt: "Sonic Youth On Stage"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 123,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-3xl font-extrabold text-yellow-300 shadow-2xl", children: "Welcome to My Team" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 126,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-semibold text-slate-300", children: action6 === "login" ? "Log In To Connect with the team!" : "Sign Up To Get Started!" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 128,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { method: "POST", className: "rounded-2xl bg-gray-200 p-6 w-96 shadow-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: formError }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 132,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        FormField,
        {
          htmlFor: "email",
          label: "Email",
          value: formData.email,
          onChange: (e) => handleInputChange(e, "email"),
          error: errors == null ? void 0 : errors.email
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 135,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 142,
          columnNumber: 21
        },
        this
      ),
      action6 === "register" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormField, { htmlFor: "firstName", label: "First Name", onChange: (e) => handleInputChange(e, "firstName"), value: formData.firstName, error: errors == null ? void 0 : errors.firstName }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 154,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormField, { htmlFor: "lastName", label: "Last Name", onChange: (e) => handleInputChange(e, "lastName"), value: formData.lastName, error: errors == null ? void 0 : errors.lastName }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 156,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 152,
        columnNumber: 50
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", name: "_action", value: action6, className: "rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: action6 === "login" ? "Sign In" : "Sign Up" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 161,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 160,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 131,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl text-white font-extrabold", children: "Made with \u2764\uFE0F\u200D\u{1F525}" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 169,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 168,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 117,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 116,
    columnNumber: 9
  }, this);
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home,
  loader: () => loader4
});
var import_node7 = require("@remix-run/node");

// app/components/user-circle.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function UserCircle({ profile, onClick, className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      className: `${className} cursor-pointer bg-gray-400 rounded-full flex justify-center items-center`,
      onClick,
      style: {
        backgroundSize: "cover",
        ...profile.profilePicture ? { backgroundImage: `url(${profile.profilePicture})` } : {}
      },
      children: !profile.profilePicture && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: [
        profile.firstName.charAt(0).toUpperCase(),
        profile.lastName.charAt(0).toUpperCase()
      ] }, void 0, !0, {
        fileName: "app/components/user-circle.tsx",
        lineNumber: 21,
        columnNumber: 21
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/user-circle.tsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  );
}

// app/components/user-panel.tsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function UserPanel({ users }) {
  let navigate = (0, import_react6.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-1/6 bg-green-200 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-center bg-blue-700 h-20 flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-xl text-white font-semibold", children: "My Team" }, void 0, !1, {
        fileName: "app/components/user-panel.tsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "img",
        {
          className: "h-16 w-16 m-2 ml-4 cursor-pointer",
          src: "https://img.icons8.com/plasticine/512/homer-simpson.png",
          alt: "Sonic Youth On Stage"
        },
        void 0,
        !1,
        {
          fileName: "app/components/user-panel.tsx",
          lineNumber: 18,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10", children: users.map(
      (user) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        UserCircle,
        {
          profile: user.profile,
          className: "h-24 w-24 mx-auto flex-shrink-0",
          onClick: () => navigate(`kudo/${user.id}`)
        },
        user.id,
        !1,
        {
          fileName: "app/components/user-panel.tsx",
          lineNumber: 24,
          columnNumber: 21
        },
        this
      )
    ) }, void 0, !1, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-center p-6 bg-blue-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: "Sign Out" }, void 0, !1, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 34,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/user-panel.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/routes/home.tsx
var import_react8 = require("@remix-run/react");

// app/utils/constants.ts
var colorMap = {
  RED: "text-red-400",
  GREEN: "text-green-400",
  BLUE: "text-blue-400",
  WHITE: "text-white",
  YELLOW: "text-yellow-300"
}, backgroundColorMap = {
  RED: "bg-red-400",
  GREEN: "bg-green-400",
  BLUE: "bg-blue-400",
  WHITE: "bg-white",
  YELLOW: "bg-yellow-300"
}, emojiMap = {
  THUMBSUP: "\u{1F44D}",
  PARTY: "\u{1F389}",
  HANDSUP: "\u{1F64C}\u{1F3FB}"
}, sortOptions = [
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
], departments = [
  { name: "HR", value: "HR" },
  { name: "Engineering", value: "ENGINEERING" },
  { name: "Sales", value: "SALES" },
  { name: "Marketing", value: "MARKETING" }
];

// app/components/kudo.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Kudo({ profile, kudo }) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: `flex ${backgroundColorMap[((_a = kudo.style) == null ? void 0 : _a.backgroundColor) || "RED"]} p-4 rounded-xl w-full gap-x-2 relative`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(UserCircle, { profile, className: "h-16 w-16" }, void 0, !1, {
      fileName: "app/components/kudo.tsx",
      lineNumber: 10,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/kudo.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: `${colorMap[((_b = kudo.style) == null ? void 0 : _b.textColor) || "WHITE"]} font-bold text-lg whitespace-pre-wrap break-all`, children: [
        profile.firstName,
        " ",
        profile.lastName
      ] }, void 0, !0, {
        fileName: "app/components/kudo.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: `${colorMap[((_c = kudo.style) == null ? void 0 : _c.textColor) || "WHITE"]} whitespace-pre-wrap break-all`, children: kudo.message }, void 0, !1, {
        fileName: "app/components/kudo.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/kudo.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute bottom-4 right-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl", children: emojiMap[((_d = kudo.style) == null ? void 0 : _d.emoji) || "THUMBSUP"] }, void 0, !1, {
      fileName: "app/components/kudo.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/kudo.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/components/search-bar.tsx
var import_react7 = require("@remix-run/react");

// app/components/select-box.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: id, className: "text-blue-600 font-semibold", children: label }, void 0, !1, {
      fileName: "app/components/select-box.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: `flex items-center ${containerClassName} my-2`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("select", { className: `${className} appearance-none`, id, name, onChange, value: value || "", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: option.value, children: option.name }, option.name, !1, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 32,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-gray-400 -ml-7 mt-1 pointer-events-none", viewBox: "0 0 140 140", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" }, void 0, !1, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 38,
        columnNumber: 160
      }, this) }, void 0, !1, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 38,
        columnNumber: 157
      }, this) }, void 0, !1, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/select-box.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/select-box.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/components/search-bar.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function SearchBar({ profile }) {
  let navigate = (0, import_react7.useNavigate)(), [searchParams] = (0, import_react7.useSearchParams)(), clearFilters = () => {
    searchParams.delete("filter"), searchParams.delete("sort"), navigate("/home");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { className: "w-full px-6 flex items-center gap-x-4 border-b-4 border-b-blue-900 border-opacity-30 h-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center w-2/5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", name: "filter", className: "w-full rounded-xl px-3 py-2", placeholder: "Search a message or name" }, void 0, !1, {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-gray-400 -ml-8", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M0 0h24v24H0V0z", fill: "none" }, void 0, !1, {
          fileName: "app/components/search-bar.tsx",
          lineNumber: 26,
          columnNumber: 130
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }, void 0, !1, {
          fileName: "app/components/search-bar.tsx",
          lineNumber: 26,
          columnNumber: 170
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      SelectBox,
      {
        className: "w-full rounded-xl px-3 py-2 text-gray-400",
        containerClassName: "w-40",
        name: "sort",
        options: sortOptions
      },
      void 0,
      !1,
      {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 28,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "submit", className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: "Search" }, void 0, !1, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    searchParams.get("filter") && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { onClick: clearFilters, className: "rounded-xl bg-red-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: "Clear Filters" }, void 0, !1, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 38,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      UserCircle,
      {
        className: "h-14 w-14 transition duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-yellow-300",
        profile,
        onClick: () => navigate("profile")
      },
      void 0,
      !1,
      {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 43,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/search-bar.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/utils/kudos.server.ts
var createKudo = async (message, userId, recipientId, style) => {
  await prisma.kudo.create({
    data: {
      message,
      author: {
        connect: {
          id: userId
        }
      },
      recipient: {
        connect: {
          id: recipientId
        }
      },
      style
    }
  });
}, getFilteredKudos = async (userId, sortFilter, whereFilter) => await prisma.kudo.findMany({
  select: {
    id: !0,
    style: !0,
    message: !0,
    author: {
      select: {
        profile: !0
      }
    }
  },
  orderBy: {
    ...sortFilter
  },
  where: {
    recipientId: userId,
    ...whereFilter
  }
}), getRecentKudos = async () => await prisma.kudo.findMany({
  take: 3,
  orderBy: {
    createdAt: "desc"
  },
  select: {
    style: {
      select: {
        emoji: !0
      }
    },
    recipient: {
      select: {
        id: !0,
        profile: !0
      }
    }
  }
});

// app/components/recent-bar.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function RecentBar({ kudos }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-1/5 border-l-4 border-l-yellow-300 flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "text-xl text-yellow-300 font-semibold my-6", children: "Recent Posts" }, void 0, !1, {
      fileName: "app/components/recent-bar.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h-full flex flex-col gap-y-10 mt-10", children: kudos.map(
      (kudo) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h-24 w-24 relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UserCircle, { profile: kudo.recipient.profile, className: "w-20 h-20" }, void 0, !1, {
            fileName: "app/components/recent-bar.tsx",
            lineNumber: 16,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h-8 w-8 text-3xl bottom-2 right-4 rounded-full absolute flex justify-center items-center", children: emojiMap[((_a = kudo == null ? void 0 : kudo.style) == null ? void 0 : _a.emoji) || "THUMBSUP"] }, void 0, !1, {
            fileName: "app/components/recent-bar.tsx",
            lineNumber: 17,
            columnNumber: 25
          }, this)
        ] }, kudo.recipient.id, !0, {
          fileName: "app/components/recent-bar.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this);
      }
    ) }, void 0, !1, {
      fileName: "app/components/recent-bar.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/recent-bar.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/routes/home.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  let userId = await requireUserId(request), users = await getOtherUsers(userId), url = new URL(request.url), sort = url.searchParams.get("sort"), filter = url.searchParams.get("filter"), sortOptions2 = {};
  sort && (sort === "date" && (sortOptions2 = {
    createdAt: "desc"
  }), sort === "sender" && (sortOptions2 = {
    author: {
      profile: {
        firstName: "asc"
      }
    }
  }), sort === "emoji" && (sortOptions2 = {
    style: {
      emoji: "asc"
    }
  }));
  let textFilter = {};
  filter && (textFilter = {
    OR: [
      {
        message: {
          mode: "insensitive",
          contains: filter
        }
      },
      {
        author: {
          OR: [
            { profile: { is: { firstName: { mode: "insensitive", contains: filter } } } },
            { profile: { is: { lastName: { mode: "insensitive", contains: filter } } } }
          ]
        }
      }
    ]
  });
  let kudos = await getFilteredKudos(userId, sortOptions2, textFilter), recentKudos = await getRecentKudos(), user = await getUser(request);
  return (0, import_node7.json)({ user, users, kudos, recentKudos });
};
function Home() {
  let { users, kudos, recentKudos, user } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "h-full flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(UserPanel, { users }, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex-1 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SearchBar, { profile: user.profile }, void 0, !1, {
          fileName: "app/routes/home.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex-1 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full p-10 flex flex-col gap-y-4", children: kudos.map(
            (kudo) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Kudo, { kudo, profile: kudo.author.profile }, kudo.id, !1, {
              fileName: "app/routes/home.tsx",
              lineNumber: 92,
              columnNumber: 33
            }, this)
          ) }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 89,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(RecentBar, { kudos: recentKudos }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 96,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.tsx",
    lineNumber: 82,
    columnNumber: 12
  }, this);
}

// app/routes/home/kudo.$userId.tsx
var kudo_userId_exports = {};
__export(kudo_userId_exports, {
  action: () => action4,
  default: () => KudoModal,
  loader: () => loader5
});

// app/components/modal.tsx
var import_react10 = require("@remix-run/react");

// app/components/portal.tsx
var import_react_dom = require("react-dom"), import_react9 = require("react"), createWrapper = (wrapperId) => {
  let wrapper = document.createElement("div");
  return wrapper.setAttribute("id", wrapperId), document.body.appendChild(wrapper), wrapper;
}, Portal = ({ children, wrapperId }) => {
  let [wrapper, setWrapper] = (0, import_react9.useState)(null);
  return (0, import_react9.useEffect)(() => {
    let element = document.getElementById(wrapperId), created = !1;
    return element || (created = !0, element = createWrapper(wrapperId)), setWrapper(element), () => {
      created && (element == null ? void 0 : element.parentNode) && element.parentNode.removeChild(element);
    };
  }, [wrapperId]), wrapper === null ? null : (0, import_react_dom.createPortal)(children, wrapper);
};

// app/components/modal.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), Modal = ({ children, isOpen, ariaLabel, className }) => {
  let navigate = (0, import_react10.useNavigate)();
  return isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Portal, { wrapperId: "modal", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "div",
      {
        className: "fixed inset-0 overflow-y-auto bg-gray-600 bg-opacity-80",
        "aria-labelledby": ariaLabel ?? "modal-title",
        role: "dialog",
        "aria-modal": "true",
        onClick: () => navigate("/home")
      },
      void 0,
      !1,
      {
        fileName: "app/components/modal.tsx",
        lineNumber: 16,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "fixed inset-0 pointer-events-none flex justify-center items-center max-h-screen overflow-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: `${className} p-4 bg-gray-200 pointer-events-auto max-h-screen md:rounded-xl`, children }, void 0, !1, {
      fileName: "app/components/modal.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/modal.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modal.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) : null;
};

// app/routes/home/kudo.$userId.tsx
var import_react11 = require("@remix-run/react");
var import_react12 = require("react");
var import_node8 = require("@remix-run/node");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), loader5 = async ({ request, params }) => {
  let { userId } = params, user = await getUser(request);
  if (typeof userId != "string")
    return (0, import_node8.redirect)("/home");
  let recipient = await getUserById(userId);
  return (0, import_node8.json)({ recipient, user });
}, action4 = async ({ request }) => {
  let form = await request.formData(), userId = await requireUserId(request), message = form.get("message"), backgroundColor = form.get("backgroundColor"), textColor = form.get("textColor"), emoji = form.get("emoji"), recipientId = form.get("recipientId");
  return typeof message != "string" || typeof recipientId != "string" || typeof backgroundColor != "string" || typeof textColor != "string" || typeof emoji != "string" ? (0, import_node8.json)({ error: "Invalid Form Data" }, { status: 400 }) : message.length ? recipientId.length ? (await createKudo(
    message,
    userId,
    recipientId,
    {
      backgroundColor,
      textColor,
      emoji
    }
  ), (0, import_node8.redirect)("/home")) : (0, import_node8.json)({ error: "No recipient found..." }, { status: 400 }) : (0, import_node8.json)({ error: "Please provide a message." }, { status: 400 });
};
function KudoModal() {
  let actionData = (0, import_react11.useActionData)(), [formError] = (0, import_react12.useState)((actionData == null ? void 0 : actionData.error) || ""), [formData, setFormData] = (0, import_react12.useState)({
    message: "",
    style: {
      backgroundColor: "RED",
      textColor: "WHITE",
      emoji: "THUMBSUP"
    }
  }), handleChange = (e, field) => {
    setFormData((data) => ({ ...data, [field]: e.target.value }));
  }, handleStyleChange = (e, field) => {
    setFormData((data) => ({
      ...data,
      style: {
        ...data.style,
        [field]: e.target.value
      }
    }));
  }, getOptions = (data) => Object.keys(data).reduce((acc, curr) => (acc.push({
    name: curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase(),
    value: curr
  }), acc), []), colors = getOptions(colorMap), emojis = getOptions(emojiMap), { recipient, user } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Modal, { isOpen: !0, className: "w-2/3 p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2", children: formError }, void 0, !1, {
      fileName: "app/routes/home/kudo.$userId.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", value: recipient.id, name: "recipientId" }, void 0, !1, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col md:flex-row gap-y-2 md:gap-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "text-center flex flex-col items-center gap-y-2 pr-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(UserCircle, { profile: recipient.profile, className: "h-24 w-24" }, void 0, !1, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 117,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-blue-300", children: [
            recipient.profile.firstName,
            " ",
            recipient.profile.lastName
          ] }, void 0, !0, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 118,
            columnNumber: 21
          }, this),
          recipient.profile.department && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "px-2 py-1 bg-gray-300 rounded-xl text-blue-300 w-auto", children: recipient.profile.department[0].toUpperCase() + recipient.profile.department.toLowerCase().slice(1) }, void 0, !1, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 121,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home/kudo.$userId.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex-1 flex flex-col gap-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "textarea",
            {
              name: "message",
              className: "w-full rounded-xl h-40 p-4",
              value: formData.message,
              onChange: (e) => handleChange(e, "message"),
              placeholder: `Say something nice about ${recipient.profile.firstName}...`
            },
            void 0,
            !1,
            {
              fileName: "app/routes/home/kudo.$userId.tsx",
              lineNumber: 128,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col items-center md:flex-row md:justify-start gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              SelectBox,
              {
                options: colors,
                name: "backgroundColor",
                value: formData.style.backgroundColor,
                onChange: (e) => handleStyleChange(e, "backgroundColor"),
                label: "Background Color",
                containerClassName: "w-36",
                className: "w-full rounded-xl px-3 py-2 text-gray-400"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 136,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              SelectBox,
              {
                options: colors,
                name: "textColor",
                value: formData.style.textColor,
                onChange: (e) => handleStyleChange(e, "textColor"),
                label: "Text Color",
                containerClassName: "w-36",
                className: "w-full rounded-xl px-3 py-2 text-gray-400"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 145,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              SelectBox,
              {
                options: emojis,
                label: "Emoji",
                name: "emoji",
                value: formData.style.emoji,
                onChange: (e) => handleStyleChange(e, "emoji"),
                containerClassName: "w-36",
                className: "w-full rounded-xl px-3 py-2 text-gray-400"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 154,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 135,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home/kudo.$userId.tsx",
          lineNumber: 127,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-blue-600 font-semibold mb-2", children: "Preview" }, void 0, !1, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 167,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col items-center md:flex-row gap-x-24 gap-y-2 md:gap-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Kudo, { profile: user.profile, kudo: formData }, void 0, !1, {
          fileName: "app/routes/home/kudo.$userId.tsx",
          lineNumber: 169,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
          fileName: "app/routes/home/kudo.$userId.tsx",
          lineNumber: 170,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { type: "submit", className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 w-80 h-12 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: "Send" }, void 0, !1, {
          fileName: "app/routes/home/kudo.$userId.tsx",
          lineNumber: 171,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/kudo.$userId.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/kudo.$userId.tsx",
    lineNumber: 109,
    columnNumber: 12
  }, this);
}

// app/routes/home/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  action: () => action5,
  default: () => ProfileSettings,
  loader: () => loader6
});
var import_react14 = require("@remix-run/react"), import_react15 = require("react");
var import_node9 = require("@remix-run/node");

// app/components/image-uploader.tsx
var import_react13 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), ImageUploader = ({ onChange, imageUrl }) => {
  let [draggingOver, setDraggingOver] = (0, import_react13.useState)(!1), fileInputRef = (0, import_react13.useRef)(null), dropRef = (0, import_react13.useRef)(null), preventDefaults = (e) => {
    e.preventDefault(), e.stopPropagation();
  }, handleDrop = (e) => {
    preventDefaults(e), e.dataTransfer.files && e.dataTransfer.files[0] && (onChange(e.dataTransfer.files[0]), e.dataTransfer.clearData());
  }, handleChange = (event) => {
    event.currentTarget.files && event.currentTarget.files[0] && onChange(event.currentTarget.files[0]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      ref: dropRef,
      className: `${draggingOver ? "border-4 border-dashed border-yellow-300 border-rounded" : ""} group rounded-full relative w-24 h-24 flex justify-center items-center bg-gray-400 transition duration-300 ease-in-out hover:bg-gray-500 cursor-pointer`,
      style: {
        backgroundSize: "cover",
        ...imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}
      },
      onDragEnter: () => setDraggingOver(!0),
      onDragLeave: () => setDraggingOver(!1),
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
        imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "absolute w-full h-full bg-blue-400 opacity-50 rounded-full transition duration-300 ease-in-out group-hover:opacity-0" }, void 0, !1, {
          fileName: "app/components/image-uploader.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "font-extrabold text-4xl text-gray-200 cursor-pointer select-none transition duration-300 ease-in-out group-hover:opacity-0 pointer-events-none z-10", children: "+" }, void 0, !1, {
          fileName: "app/components/image-uploader.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "file", ref: fileInputRef, onChange: handleChange, className: "hidden" }, void 0, !1, {
          fileName: "app/components/image-uploader.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/image-uploader.tsx",
      lineNumber: 37,
      columnNumber: 9
    },
    this
  );
};

// app/routes/home/profile.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  let userId = await requireUserId(request), form = await request.formData(), firstName = form.get("firstName"), lastName = form.get("lastName"), department = form.get("department");
  switch (form.get("_action")) {
    case "save":
      if (typeof firstName != "string" || typeof lastName != "string" || typeof department != "string")
        return (0, import_node9.json)({ error: "Invalid Form Data" }, { status: 400 });
      let errors = {
        firstName: validateName(firstName),
        lastName: validateName(lastName),
        department: validateName(department)
      };
      return Object.values(errors).some(Boolean) ? (0, import_node9.json)({ errors, fields: { department, firstName, lastName } }, { status: 400 }) : (await updateUser(userId, {
        firstName,
        lastName,
        department
      }), (0, import_node9.redirect)("/home"));
    case "delete":
      return await deleteUser(userId), logout(request);
    default:
      return (0, import_node9.json)({ error: "Invalid Form Data" }, { status: 400 });
  }
}, loader6 = async ({ request }) => {
  let user = await getUser(request);
  return (0, import_node9.json)({ user });
};
function ProfileSettings() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let { user } = (0, import_react14.useLoaderData)(), actionData = (0, import_react14.useActionData)(), [formError, setFormError] = (0, import_react15.useState)((actionData == null ? void 0 : actionData.error) || ""), firstLoad = (0, import_react15.useRef)(!0), [formData, setFormData] = (0, import_react15.useState)({
    firstName: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.firstName) || ((_b = user == null ? void 0 : user.profile) == null ? void 0 : _b.firstName),
    lastName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || ((_d = user == null ? void 0 : user.profile) == null ? void 0 : _d.lastName),
    department: ((_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.department) || ((_f = user == null ? void 0 : user.profile) == null ? void 0 : _f.department) || "MARKETING",
    profilePicture: ((_g = user == null ? void 0 : user.profile) == null ? void 0 : _g.profilePicture) || ""
  });
  (0, import_react15.useEffect)(() => {
    firstLoad.current || setFormError("");
  }, [formData]), (0, import_react15.useEffect)(() => {
    firstLoad.current = !1;
  }, []);
  let handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Modal, { isOpen: !0, className: "w-1/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "p-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "text-4xl font-semibold text-blue-600 text-center mb-4", children: "Your Profile" }, void 0, !1, {
      fileName: "app/routes/home/profile.tsx",
      lineNumber: 112,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2", children: formError }, void 0, !1, {
      fileName: "app/routes/home/profile.tsx",
      lineNumber: 113,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w-1/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ImageUploader, { onChange: async (file) => {
        let inputFormData = new FormData();
        inputFormData.append("profile-pic", file);
        let response = await fetch("/avatar", {
          method: "POST",
          body: inputFormData
        }), { imageUrl } = await response.json();
        setFormData({
          ...formData,
          profilePicture: imageUrl
        });
      }, imageUrl: formData.profilePicture || "" }, void 0, !1, {
        fileName: "app/routes/home/profile.tsx",
        lineNumber: 118,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/home/profile.tsx",
        lineNumber: 117,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("form", { method: "post", onSubmit: (e) => confirm("Are you sure?") ? !0 : e.preventDefault(), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          FormField,
          {
            htmlFor: "firstName",
            label: "First Name",
            value: formData.firstName,
            onChange: (e) => handleInputChange(e, "firstName"),
            error: (_h = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _h.firstName
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home/profile.tsx",
            lineNumber: 122,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          FormField,
          {
            htmlFor: "lastName",
            label: "Last Name",
            value: formData.lastName,
            onChange: (e) => handleInputChange(e, "lastName"),
            error: (_i = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _i.lastName
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home/profile.tsx",
            lineNumber: 129,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
          !1,
          {
            fileName: "app/routes/home/profile.tsx",
            lineNumber: 136,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { name: "_action", value: "delete", className: "rounded-xl w-full bg-red-300 font-semibold text-white mt-4 px-16 py-2 transition duration-300 ease-in-out hover:bg-red-400 hover:-translate-y-1", children: "Delete Account" }, void 0, !1, {
          fileName: "app/routes/home/profile.tsx",
          lineNumber: 145,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w-full text-right mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { name: "_action", value: "save", className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 px-16 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: "Save" }, void 0, !1, {
          fileName: "app/routes/home/profile.tsx",
          lineNumber: 149,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/home/profile.tsx",
          lineNumber: 148,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home/profile.tsx",
        lineNumber: 121,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/home/profile.tsx",
        lineNumber: 120,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/profile.tsx",
      lineNumber: 116,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/profile.tsx",
    lineNumber: 111,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/profile.tsx",
    lineNumber: 110,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1c129769", entry: { module: "/build/entry.client-KP72GFLA.js", imports: ["/build/_shared/chunk-CLQC6YQG.js", "/build/_shared/chunk-E4BGBYZL.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7HZTE3SQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/avatar": { id: "routes/avatar", parentId: "root", path: "avatar", index: void 0, caseSensitive: void 0, module: "/build/routes/avatar-73AO5PHN.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-5W3LQKAW.js", imports: ["/build/_shared/chunk-BNMJ7VGO.js", "/build/_shared/chunk-HSACKWZ3.js", "/build/_shared/chunk-IBDJ6IMC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/kudo.$userId": { id: "routes/home/kudo.$userId", parentId: "routes/home", path: "kudo/:userId", index: void 0, caseSensitive: void 0, module: "/build/routes/home/kudo.$userId-IZ7YPDFQ.js", imports: ["/build/_shared/chunk-SM2TYWE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profile": { id: "routes/home/profile", parentId: "routes/home", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profile-SS3VD5CQ.js", imports: ["/build/_shared/chunk-VGNREFO2.js", "/build/_shared/chunk-SM2TYWE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6NZLKEI5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-RWTSUKGZ.js", imports: ["/build/_shared/chunk-VGNREFO2.js", "/build/_shared/chunk-BNMJ7VGO.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-NVA4EOD7.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-1C129769.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/avatar": {
    id: "routes/avatar",
    parentId: "root",
    path: "avatar",
    index: void 0,
    caseSensitive: void 0,
    module: avatar_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/home/kudo.$userId": {
    id: "routes/home/kudo.$userId",
    parentId: "routes/home",
    path: "kudo/:userId",
    index: void 0,
    caseSensitive: void 0,
    module: kudo_userId_exports
  },
  "routes/home/profile": {
    id: "routes/home/profile",
    parentId: "routes/home",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
