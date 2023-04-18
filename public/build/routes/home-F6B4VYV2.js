import {
  Layout
} from "/build/_shared/chunk-UNAGJXL7.js";
import {
  Kudo,
  UserCircle,
  require_auth,
  require_kudos,
  require_user
} from "/build/_shared/chunk-KAP5FXLP.js";
import {
  SelectBox,
  emojiMap,
  sortOptions
} from "/build/_shared/chunk-R3VDDOO2.js";
import {
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData,
  useNavigate,
  useSearchParams
} from "/build/_shared/chunk-DSQI4GSY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/home.tsx
var import_user = __toESM(require_user());
var import_auth = __toESM(require_auth());

// app/components/user-panel.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserPanel({ users }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/6 bg-green-200 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center bg-blue-700 h-20 flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-white font-semibold", children: "My Team" }, void 0, false, {
        fileName: "app/components/user-panel.tsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          className: "h-16 w-16 m-2 ml-4 cursor-pointer",
          src: "https://img.icons8.com/plasticine/512/homer-simpson.png",
          alt: "Sonic Youth On Stage"
        },
        void 0,
        false,
        {
          fileName: "app/components/user-panel.tsx",
          lineNumber: 18,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10", children: users.map(
      (user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserCircle,
        {
          profile: user.profile,
          className: "h-24 w-24 mx-auto flex-shrink-0",
          onClick: () => navigate(`kudo/${user.id}`)
        },
        user.id,
        false,
        {
          fileName: "app/components/user-panel.tsx",
          lineNumber: 24,
          columnNumber: 21
        },
        this
      )
    ) }, void 0, false, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center p-6 bg-blue-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: "Sign Out" }, void 0, false, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 34,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/user-panel.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user-panel.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/search-bar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SearchBar({ profile }) {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const clearFilters = () => {
    searchParams.delete("filter");
    searchParams.delete("sort");
    navigate("/home");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "w-full px-6 flex items-center gap-x-4 border-b-4 border-b-blue-900 border-opacity-30 h-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `flex items-center w-2/5`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", name: "filter", className: "w-full rounded-xl px-3 py-2", placeholder: "Search a message or name" }, void 0, false, {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-gray-400 -ml-8", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M0 0h24v24H0V0z", fill: "none" }, void 0, false, {
          fileName: "app/components/search-bar.tsx",
          lineNumber: 26,
          columnNumber: 130
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }, void 0, false, {
          fileName: "app/components/search-bar.tsx",
          lineNumber: 26,
          columnNumber: 170
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      SelectBox,
      {
        className: "w-full rounded-xl px-3 py-2 text-gray-400",
        containerClassName: "w-40",
        name: "sort",
        options: sortOptions
      },
      void 0,
      false,
      {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 28,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: "Search" }, void 0, false, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    searchParams.get("filter") && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: clearFilters, className: "rounded-xl bg-red-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: "Clear Filters" }, void 0, false, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 38,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1" }, void 0, false, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      UserCircle,
      {
        className: "h-14 w-14 transition duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-yellow-300",
        profile,
        onClick: () => navigate("profile")
      },
      void 0,
      false,
      {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 43,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/search-bar.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/routes/home.tsx
var import_kudos = __toESM(require_kudos());

// app/components/recent-bar.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function RecentBar({ kudos }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-1/5 border-l-4 border-l-yellow-300 flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-xl text-yellow-300 font-semibold my-6", children: "Recent Posts" }, void 0, false, {
      fileName: "app/components/recent-bar.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full flex flex-col gap-y-10 mt-10", children: kudos.map(
      (kudo) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-24 w-24 relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserCircle, { profile: kudo.recipient.profile, className: "w-20 h-20" }, void 0, false, {
            fileName: "app/components/recent-bar.tsx",
            lineNumber: 16,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-8 w-8 text-3xl bottom-2 right-4 rounded-full absolute flex justify-center items-center", children: emojiMap[((_a = kudo == null ? void 0 : kudo.style) == null ? void 0 : _a.emoji) || "THUMBSUP"] }, void 0, false, {
            fileName: "app/components/recent-bar.tsx",
            lineNumber: 17,
            columnNumber: 25
          }, this)
        ] }, kudo.recipient.id, true, {
          fileName: "app/components/recent-bar.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this);
      }
    ) }, void 0, false, {
      fileName: "app/components/recent-bar.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/recent-bar.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/routes/home.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Home() {
  const { users, kudos, recentKudos, user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/home.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-full flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserPanel, { users }, void 0, false, {
        fileName: "app/routes/home.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-1 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SearchBar, { profile: user.profile }, void 0, false, {
          fileName: "app/routes/home.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-1 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full p-10 flex flex-col gap-y-4", children: kudos.map(
            (kudo) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Kudo, { kudo, profile: kudo.author.profile }, kudo.id, false, {
              fileName: "app/routes/home.tsx",
              lineNumber: 92,
              columnNumber: 33
            }, this)
          ) }, void 0, false, {
            fileName: "app/routes/home.tsx",
            lineNumber: 89,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RecentBar, { kudos: recentKudos }, void 0, false, {
            fileName: "app/routes/home.tsx",
            lineNumber: 96,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home.tsx",
    lineNumber: 82,
    columnNumber: 12
  }, this);
}
export {
  Home as default
};
//# sourceMappingURL=/build/routes/home-F6B4VYV2.js.map
