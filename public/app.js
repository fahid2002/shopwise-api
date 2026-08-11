const imageAssets = {
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCR9SGHKzh1RTUP5JlC_V0VhXxFUyLwGpBjLUDzgcFyaDMLt-e3J_YgKQnjIRnvJrCnyb84szy5pJ9zpG3aqPBXlGoxvTrc0Z_tPvnNP5MC4UN0WAqxfe0cDZ_7YfKdFoHosEr8yIYZp3pYH5IdLtYzNp4qrsvFxDDJKRgjkYj4bsAx-pbggdW05IhzA1wXKrNbvMHJt7CI34w0qeOfUiTPVdqxe1rtUVIsVJkKbMnFDETAffFfDENdZQ",
  hero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDQTIMxuqs8Zff_N0W-4UvbwdP_AGO6VHFMJAzgBBnaK1svt2cPzNyXg-ckxabLz4DQ9X3VtySNTgEE0J8h9XGzWlcUDVxl1ahpYiDryvDll8TI94x3aK8YMx7XKrGs0TOaz2oNXTbpXV95X6Qw3OqEwJK5Cm9HZt0iZfgoR42e-y-hpPN2k2w-GqB2NcfT2MSNTBJjQWijMMS9yQ58hUvI-rcM3na3bcDX5Nam_W7PsTW3MA5LnPlDFA",
  categories: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpj-RwQxQ8zUXTpfduDQ7tY6yuW1afnLxqyiil-7e0oqO1i8dcD5CVbN3xxEbazFsDMo1vCA2BKC2Y4oTastD4aOjS-nZ4eWSzzn6f0T8NTGNqQiuBr6YdE9Q-dzLYVk5KJdNY7_t8s0l1-jRqhf22rBLSGfPz6GVuF9zh0xAr8oFekwch3HEuaUMxWsI62XkoUBcxF6rpBRGke0GTN7xHus1N4gdk8AAdzy8LYOilfAcgsxxuEatIDQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzIWWzkUmTe0a64qKxWlKVKg0Pe3hZTU04aTHnutfaw6FYN2R2g_P2DVDc0FE8NXt7TT6jardGZa2c2DBHnqSfuWsHJ3GP46iNduDT4hwHs1EFceELKs9NQZ9QCaRiYXF0acxkaa3bzVNkUsiIb1XZhMaxiFZoZfiQK4HssQxUkBFXpSYnavIfjCaRocOZZXJkvckgWo64TkQ-pZgozIo8IYM8q6c5h_j3BIYksduopMSAo29Bfh0aYg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCEWPcm3_vQaKBiX1VgzYkeDUE3rZBa-jy9iZBjQ38ZOAwfu-aMUetTCZnqiGLqVUjpLY5v53DMaN2mGbfzOblUwjPuB1NZsAy1nt9sZxTgU0gNyx7gD4y3A5_v5ITdATwPz9bzF4suq1devMytsuew9C5C3EeSVxLHabGrXZcbKl-R9gA9sMWdhlrQWg-chLmlU2B7BiZGLq5JGacfZ-i_gnz4HoNafeinvxAnw0g5aCyZ5b5OEMLrxg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBW5A0RcyQRyk1vUnuRRGIspYQsIonTqzjGNopJAJnb1KT-e_eXMe9JnTk4M-SF_kclZj31lZgzK9jUsA4yvAOc-iTZEuK-8pavoJzqQFkszscDyILU_MKCZ8Q5F5FRe0xc5pTTIGc6EtPpvsL7Fx7FddsA20hEiqZNpy1ApCJ40skhImVC1XDUtXjQKA0QICXU7xZ_gjdejnJ1tnI8x2uxL6_SnHzVXjIVKqjaMbn8S1VtY_qcs_yMnw"
  ],
  products: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBc7_0k9yGtLWm8gIxEN3hnCgzreukpGY-LXJBsrcXAkTjWj7Sqiqh8xusq3q39-SFOtyUmUuzecPB_LXblRlY3BkKIflAXJ5x0l9U2jOrN_pBPrGpettgMREEZirVUsfz6myTdr5hmAfrtSt-LC043Q-UrzbvNcrIlQqnnMlv0tX8Iwqbrubrz4e25SRrGtV03_nKpdUQQagsyJALiODXCUv_N0FbelIp_QWOOlmTOGGmRUXeVJJa0Xw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDAtR4d_Vq6mLEP6sR5urya2PT5g9wtlO3bdUcbr5lQNg0ZexbOOpyKsPlmgujz-MePdqO7srElzB6C5p7AZd2jTgWOpLfJ_L5v73kPU8-xFLgm28G0ACi8c3XcpO9CwPS-2DF-yo464jcIt9K__03YT7mUsRgTJG45r1S9qIwGBwQZAUY7XC0U6sL2ZDQ_4OFiBduK59UmA2S3Y5aeGBaophHEuXoN19eOgccD3JewH-PLfUYmWddYkA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAtuzrXQUpsGIPDIDaT-16t_w3FKrJ5gg0YSs5U4HN_-_9cm3ZjC3cZ8VUPNJV_7MpHFuHS2H8MBEcCPm0WNTGjgz2bUiYgANPoBvTotPDBZcT9xOuqEWJpYMsN457EwqPpveevhPnRJFKTRo8X8179HksrhDamHawcLIhiyV-cA8eiDhCbZmxX8FgHsA501wHsqaSjGahii-QOA1JLrtpZL92m-n21va4-_6g77GhXmxSH7jW6JtvfYQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBe-CIRjO2btN4mqRFGr2BgIxjRs0JKNSWdQlgp0H3NYpg3v4YUtlBUeaYpShe-RDwpbo7R4LVUC33m5oeznVyLYQQdTlxdZO80drXss7h__MKMzCI88ayIgufqRaOrdSZvHRTNNDUzqJ0EXS6cLeAU5c4sTQQjxAUURXgyXvEKLQYdUUM6ZhaKfmmLuFElSRfE-UFfVJZQ2rG0f-u9iW_1usIgOgzoCcRoa_nGVWGHcnKttvmE4aUGAQ"
  ],
  customers: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAeT06mCDkWhds2kNvdiKewWvzaIb-T67t2J-5CBLOaoFoQ9AnMNpTl0H2fbbpd20lmnMPKxYWcBUjgzYMtBDUZwuOBnTHvd6xMA0HawRu3HPxY7jOcjj9Jn_llJr3qp9A9W-Qv_Bn3FDSG_0GoK4-r14S1vEJYNKW6hN_AaHMij0kwLu3VY3DHYYujvxXBb39FH2XQ77pMiUgPdFu-06KLa5NM1T2elGYZGo9TBI9HBmgvlwBWGvVQyQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAuXEOMuLPGy26VOkRyH-Rh4qRjps782F3DbgGVImr1jbFVY-jmWJWe5jEF8zIUe5TOv5l7ahRZsZ3egALeX_FWVtRiBMDCssyn_wM7_gbYu-YONdXPK2g-5hfGXyn30pg9XoU3pJxGQmE_6zwra2xCFYavsI0irSvlMJyXPEOtJ_Umd20oS_lNJ_FJB0VlAQBp3PIgXwtn9ECWSwdwyXtfNMkj3AonSAizELZPnmuqKglB5R_DadN7ag",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCBp0zCehhkdDrDTeTgtY6yIN97AUdlINw858COmjbTyFH1_RHXproxvsJBOC3NeHOkMAe3r21MV5q6-WzRYOsmzLIemtXQS5BcZWkQi5Q2nX7wvNvBAIcOL6vAb4DIsj_Xru-yml9Itr5CiM3QeGqGVBLLtoGd0z98qd0zH0ECsArjLrDHfhlC8lZQixuCJ27xPpTtIPV_o4bt6jnTGlGSxCAPrNI8MMZvCJCmMerO0j_4_eehqUWOzg"
  ]
};

const pages = [
  { id: "overview", label: "Overview", icon: "grid_view" },
  { id: "products", label: "Products", icon: "inventory_2" },
  { id: "orders", label: "Orders", icon: "receipt_long" },
  { id: "categories", label: "Categories", icon: "category" },
  { id: "reviews", label: "Reviews", icon: "reviews" },
  { id: "customers", label: "Customers", icon: "group" }
];

const dataCacheTtl = 30000;

const state = {
  page: "overview",
  token: localStorage.getItem("shopwise_token") || "",
  user: readJson("shopwise_user", null),
  health: null,
  products: [],
  categories: [],
  reviews: [],
  orders: [],
  users: [],
  wishlist: [],
  query: "",
  filters: {
    products: "ALL",
    orders: "ALL",
    reviews: "ALL",
    customers: "ALL"
  },
  selectedOrderId: null,
  selectedReviewId: null,
  selectedCustomerId: null,
  lastLoaded: {},
  notifications: readJson("shopwise_notifications", [
    {
      id: crypto.randomUUID(),
      title: "Frontend connected",
      body: "Dashboard is ready to use with the Shopwise API.",
      read: false,
      createdAt: new Date().toISOString()
    }
  ])
};

const $ = (selector) => document.querySelector(selector);
const view = $("#view");
const modalRoot = $("#modalRoot");
const notificationPanel = $("#notificationPanel");
const profilePanel = $("#profilePanel");

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(Number(value || 0));
}

function shortDate(value) {
  if (!value) return "Today";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}

function statusClass(status) {
  if (["ACTIVE", "PUBLISHED", "CONFIRMED", "SHIPPED", "DELIVERED"].includes(status)) {
    return "good";
  }
  if (["DRAFT", "PENDING"].includes(status)) return "warn";
  if (["ARCHIVED", "HIDDEN", "BLOCKED", "CANCELLED", "REMOVED"].includes(status)) return "bad";
  return "";
}

function productImage(product, index = 0) {
  return product?.imageUrl || imageAssets.products[index % imageAssets.products.length];
}

function categoryImage(index = 0) {
  return imageAssets.categories[index % imageAssets.categories.length];
}

function avatar(index = 0) {
  return imageAssets.customers[index % imageAssets.customers.length];
}

async function api(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(state.token ? { Authorization: `Bearer ${state.token}` } : {}),
    ...(options.headers || {})
  };

  const response = await fetch(path, {
    ...options,
    headers,
    body: options.body && typeof options.body !== "string" ? JSON.stringify(options.body) : options.body
  });

  const payload = await response.json().catch(() => ({
    success: false,
    message: "The API returned an invalid response."
  }));

  if (!response.ok) {
    if (response.status === 401 && state.token) logout(false);
    throw new Error(payload.message || "Request failed");
  }

  return payload;
}

function toast(message, type = "info") {
  const node = document.createElement("div");
  node.className = `toast ${type === "error" ? "error" : ""}`;
  node.textContent = message;
  $("#toastStack").append(node);
  window.setTimeout(() => node.remove(), 3600);
}

function addNotification(title, body) {
  state.notifications.unshift({
    id: crypto.randomUUID(),
    title,
    body,
    read: false,
    createdAt: new Date().toISOString()
  });
  state.notifications = state.notifications.slice(0, 12);
  saveJson("shopwise_notifications", state.notifications);
  renderNotificationBadge();
}

function setSession(authResult) {
  state.token = authResult.token;
  state.user = authResult.user;
  localStorage.setItem("shopwise_token", state.token);
  saveJson("shopwise_user", state.user);
  $("#loginScreen").classList.add("hidden");
  $("#appShell").classList.remove("hidden");
  $("#avatarImage").src = imageAssets.avatar;
}

function logout(showMessage = true) {
  state.token = "";
  state.user = null;
  localStorage.removeItem("shopwise_token");
  localStorage.removeItem("shopwise_user");
  $("#appShell").classList.add("hidden");
  $("#loginScreen").classList.remove("hidden");
  closeModal();
  closePopovers();
  if (showMessage) toast("Logged out");
}

function currentHashPage() {
  return window.location.hash.replace("#/", "") || "overview";
}

function go(page, options = {}) {
  const id = page || "overview";
  const nextHash = `#/${id}`;

  if (window.location.hash !== nextHash) {
    history.pushState(null, "", nextHash);
  }

  setPage(id, options);
}

function renderNav() {
  const desktop = $("#mainNav");
  const mobile = $("#mobileNav");
  const html = pages
    .map(
      (page) => `
        <button class="nav-link ${state.page === page.id ? "active" : ""}" data-page="${page.id}" type="button">
          ${escapeHtml(page.label)}
        </button>`
    )
    .join("");

  desktop.innerHTML = html;
  mobile.innerHTML = html;
}

async function setPage(page, options = {}) {
  state.page = page || "overview";
  render();

  if (!state.token && state.page !== "login") return;

  await ensureDataForPage(state.page, options);

  if (state.page === page) {
    render();
  }
}

function bindStaticEvents() {
  $("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const result = await api("/api/auth/login", {
        method: "POST",
        body: {
          email: $("#loginEmail").value,
          password: $("#loginPassword").value
        }
      });
      setSession(result.data);
      addNotification("Login successful", `${result.data.user.name} signed in as ${result.data.user.role}.`);
      await loadAll();
      go("overview");
    } catch (error) {
      toast(error.message, "error");
    }
  });

  $("#googleLoginBtn").addEventListener("click", () => {
    toast("Google login is visible for future OAuth work, but it is not implemented now.");
    addNotification("Google login", "OAuth button clicked. Backend assignment currently uses JWT email/password auth.");
  });

  $("#togglePasswordBtn").addEventListener("click", () => {
    const passwordInput = $("#loginPassword");
    const icon = $("#togglePasswordBtn .material-symbols-outlined");
    const isHidden = passwordInput.type === "password";

    passwordInput.type = isHidden ? "text" : "password";
    icon.textContent = isHidden ? "visibility_off" : "visibility";
    $("#togglePasswordBtn").setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });

  $("#brandHomeBtn").addEventListener("click", async () => {
    state.query = "";
    $("#globalSearch").value = "";
    go("overview", { force: true });
    await loadAll();
    if (state.page === "overview") render();
    toast("Dashboard refreshed");
  });

  document.body.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");
    if (pageButton) {
      go(pageButton.dataset.page);
      closePopovers();
      return;
    }

    if (!event.target.closest(".popover") && !event.target.closest(".round-btn") && !event.target.closest(".avatar-btn")) {
      closePopovers();
    }
  });

  $("#globalSearch").addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    if (state.query) {
      state.page = "search";
      history.replaceState(null, "", "#/search");
      render();
    } else if (state.page === "search") {
      go("overview");
    }
  });

  $("#notificationsBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    profilePanel.classList.add("hidden");
    notificationPanel.classList.toggle("hidden");
    renderNotifications();
  });

  $("#profileBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    notificationPanel.classList.add("hidden");
    profilePanel.classList.toggle("hidden");
    renderProfilePopover();
  });

  window.addEventListener("popstate", () => setPage(currentHashPage()));
}

async function loadAll() {
  const now = Date.now();
  const publicRequests = [
    api("/api/health").then((result) => {
      state.health = result.data;
      state.lastLoaded.health = now;
    }),
    api("/api/categories?limit=100").then((result) => {
      state.categories = result.data || [];
      state.lastLoaded.categories = now;
    }),
    api("/api/products?limit=100").then((result) => {
      state.products = result.data || [];
      state.lastLoaded.products = now;
    }),
    api("/api/reviews?limit=100").then((result) => {
      state.reviews = result.data || [];
      state.lastLoaded.reviews = now;
    })
  ];

  await Promise.allSettled(publicRequests);

  if (state.token) {
    const privateRequests = [
      api("/api/auth/me").then((result) => {
        state.user = result.data;
        saveJson("shopwise_user", state.user);
        state.lastLoaded.me = now;
      }),
      api("/api/orders?limit=100").then((result) => {
        state.orders = result.data || [];
        state.lastLoaded.orders = now;
      }),
      api("/api/users?limit=100").then((result) => {
        state.users = result.data || [];
        state.lastLoaded.users = now;
      }),
      api("/api/wishlists?limit=100").then((result) => {
        state.wishlist = result.data || [];
        state.lastLoaded.wishlist = now;
      })
    ];
    await Promise.allSettled(privateRequests);
  }

  state.selectedOrderId ||= state.orders[0]?.id || null;
  state.selectedReviewId ||= state.reviews[0]?.id || null;
  state.selectedCustomerId ||= state.users[0]?.id || null;
  renderNotificationBadge();
}

function shouldLoad(key, options = {}) {
  return options.force || !state.lastLoaded[key] || Date.now() - state.lastLoaded[key] > dataCacheTtl;
}

async function ensureDataForPage(page, options = {}) {
  try {
    if (["products", "overview", "search", "wishlist", "orders"].includes(page) && shouldLoad("products", options)) {
      const result = await api("/api/products?limit=100");
      state.products = result.data || [];
      state.lastLoaded.products = Date.now();
    }
    if (["categories", "overview", "search", "products"].includes(page) && shouldLoad("categories", options)) {
      const result = await api("/api/categories?limit=100");
      state.categories = result.data || [];
      state.lastLoaded.categories = Date.now();
    }
    if (["reviews", "categories", "overview", "search"].includes(page) && shouldLoad("reviews", options)) {
      const result = await api("/api/reviews?limit=100");
      state.reviews = result.data || [];
      state.lastLoaded.reviews = Date.now();
    }
    if (state.token && ["orders", "overview", "search"].includes(page) && shouldLoad("orders", options)) {
      const result = await api("/api/orders?limit=100");
      state.orders = result.data || [];
      state.lastLoaded.orders = Date.now();
    }
    if (state.token && ["customers", "overview", "search"].includes(page) && shouldLoad("users", options)) {
      const result = await api("/api/users?limit=100");
      state.users = result.data || [];
      state.lastLoaded.users = Date.now();
    }
    if (state.token && ["wishlist", "overview", "search"].includes(page) && shouldLoad("wishlist", options)) {
      const result = await api("/api/wishlists?limit=100");
      state.wishlist = result.data || [];
      state.lastLoaded.wishlist = Date.now();
    }
  } catch (error) {
    toast(error.message, "error");
  }
}

function render() {
  renderNav();
  renderNotificationBadge();

  const renderers = {
    overview: renderOverview,
    products: renderProducts,
    orders: renderOrders,
    categories: renderCategories,
    reviews: renderReviews,
    customers: renderCustomers,
    wishlist: renderWishlist,
    settings: renderSettings,
    search: renderSearch
  };

  const renderer = renderers[state.page] || renderOverview;
  view.innerHTML = renderer();
  view.focus({ preventScroll: true });
  bindViewEvents();
}

function pageHead(title, subtitle, actions = "") {
  return `
    <div class="page-head">
      <div>
        <p class="kicker">Shopwise</p>
        <h1>${title}</h1>
        <p class="subtle">${subtitle}</p>
      </div>
      <div class="toolbar-actions">${actions}</div>
    </div>
  `;
}

function statCard(label, value, note, icon = "monitoring") {
  return `
    <article class="stat-card">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small><span class="material-symbols-outlined">${icon}</span> ${escapeHtml(note)}</small>
    </article>
  `;
}

function renderOverview() {
  const activeProducts = state.products.filter((item) => item.status === "ACTIVE");
  const activeCategories = state.categories.filter((item) => item.status === "ACTIVE");
  const revenue = state.orders.reduce((sum, order) => sum + Number(order.totalAmount || 0), 0);
  const heroCopy = state.user ? `${state.user.name}'s admin workspace` : "Commerce workspace";

  return `
    <section class="hero">
      <img src="${imageAssets.hero}" alt="Premium commerce dashboard background" />
      <div class="hero-content">
        <p class="kicker">${escapeHtml(heroCopy)}</p>
        <h1>Discover the Future of Shopping</h1>
        <p class="subtle">Manage products, categories, orders, reviews, customers, and wishlist data from the same backend API.</p>
        <div class="hero-actions">
          <button class="btn primary" data-page="products" type="button">Shop Now</button>
          <button class="btn light" data-page="orders" type="button">Explore Trends</button>
        </div>
      </div>
    </section>

    <div class="grid stats" style="margin-top: 24px;">
      ${statCard("Products", String(state.products.length), `${activeProducts.length} active`, "inventory_2")}
      ${statCard("Categories", String(state.categories.length), `${activeCategories.length} visible`, "category")}
      ${statCard("Orders", String(state.orders.length), `${money(revenue)} revenue`, "receipt_long")}
      ${statCard("Reviews", String(state.reviews.length), `${averageRating()} average rating`, "star")}
    </div>

    <div class="section-row">
      <div>
        <h2>Top Categories</h2>
        <p class="subtle">Catalog sections styled from the supplied overview design.</p>
      </div>
      <button class="btn dark" data-page="categories" type="button">
        <span class="material-symbols-outlined">arrow_forward</span>
        View All
      </button>
    </div>

    <div class="grid cards-4">
      ${overviewCategories()
        .map(
          (category, index) => `
            <button class="image-card" data-page="categories" type="button">
              <img src="${categoryImage(index)}" alt="${escapeHtml(category.name)} category" />
              <span>${escapeHtml(category.name)}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function overviewCategories() {
  const fallback = [
    { name: "Electronics" },
    { name: "Fashion" },
    { name: "Home & Living" },
    { name: "Beauty" }
  ];
  return [...state.categories, ...fallback].slice(0, 4);
}

function averageRating() {
  if (!state.reviews.length) return "0.0";
  const total = state.reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0);
  return (total / state.reviews.length).toFixed(1);
}

function renderProducts() {
  const filtered = filterProducts();
  const lowStock = state.products.filter((product) => Number(product.stock) > 0 && Number(product.stock) <= 5).length;
  const outStock = state.products.filter((product) => Number(product.stock) === 0).length;
  const archived = state.products.filter((product) => product.status === "ARCHIVED").length;

  return `
    ${pageHead(
      "Product Inventory",
      "Create, update, archive, and review every product stored through the backend API.",
      `<button class="btn light" id="refreshProductsBtn" type="button"><span class="material-symbols-outlined">refresh</span>Refresh</button>
       <button class="btn primary" id="addProductBtn" type="button"><span class="material-symbols-outlined">add</span>Add Product</button>`
    )}

    <div class="grid stats">
      ${statCard("Total Products", String(state.products.length), "Synced from API", "inventory_2")}
      ${statCard("Low Stock", String(lowStock), "Needs attention", "warning")}
      ${statCard("Out of Stock", String(outStock), "Restock queue", "remove_shopping_cart")}
      ${statCard("Archived", String(archived), "Hidden products", "archive")}
    </div>

    ${filterBar("products", "Search products...", ["ALL", "ACTIVE", "DRAFT", "ARCHIVED"])}

    <section class="table-panel">
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length ? filtered.map(productRow).join("") : emptyRow("No products match this view.", 6)}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function productRow(product, index) {
  return `
    <tr>
      <td>
        <div class="entity-cell">
          <div class="thumb"><img src="${productImage(product, index)}" alt="${escapeHtml(product.name)}" /></div>
          <div>
            <strong>${escapeHtml(product.name)}</strong>
            <div class="muted">${escapeHtml(product.slug || product.id)}</div>
          </div>
        </div>
      </td>
      <td>${escapeHtml(product.category?.name || "Unassigned")}</td>
      <td>${money(product.price)}</td>
      <td>${escapeHtml(product.stock)}</td>
      <td><span class="status ${statusClass(product.status)}">${escapeHtml(product.status)}</span></td>
      <td>
        <div class="row-actions">
          <button class="small-btn" data-action="edit-product" data-id="${product.id}" type="button">Edit</button>
          <button class="small-btn danger" data-action="delete-product" data-id="${product.id}" type="button">Delete</button>
        </div>
      </td>
    </tr>
  `;
}

function renderOrders() {
  const filtered = filterOrders();
  const selected = state.orders.find((order) => order.id === state.selectedOrderId) || state.orders[0];
  const pending = state.orders.filter((order) => order.status === "PENDING").length;
  const delivered = state.orders.filter((order) => order.status === "DELIVERED").length;
  const total = state.orders.reduce((sum, order) => sum + Number(order.totalAmount || 0), 0);

  return `
    ${pageHead(
      "Orders & Transactions",
      "Track order activity, create test orders, and update fulfillment status.",
      `<button class="btn light" id="refreshOrdersBtn" type="button"><span class="material-symbols-outlined">refresh</span>Refresh</button>
       <button class="btn primary" id="createOrderBtn" type="button"><span class="material-symbols-outlined">add</span>Create Order</button>`
    )}

    <div class="grid stats">
      ${statCard("Total Orders", String(state.orders.length), "Authenticated API", "receipt_long")}
      ${statCard("Pending", String(pending), "Awaiting action", "pending_actions")}
      ${statCard("Delivered", String(delivered), "Completed", "local_shipping")}
      ${statCard("Revenue", money(total), "All listed orders", "payments")}
    </div>

    <div class="grid two-col" style="margin-top: 22px;">
      <section class="dark-panel">
        <div class="section-row" style="margin-top: 0;">
          <div>
            <h2>Invoices</h2>
            <p class="subtle">Order list from the secured endpoint.</p>
          </div>
        </div>
        ${filterBar("orders", "Search invoice #", ["ALL", "PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"], true)}
        <div class="invoice-list">
          ${
            filtered.length
              ? filtered.map(orderListItem).join("")
              : `<div class="empty">No orders yet. Create one from an active product.</div>`
          }
        </div>
      </section>

      <aside class="dark-panel">
        ${selected ? orderDetail(selected) : `<div class="empty">Select or create an order to see details.</div>`}
      </aside>
    </div>
  `;
}

function orderListItem(order) {
  return `
    <button class="list-item split-item" data-action="select-order" data-id="${order.id}" type="button">
      <div>
        <div class="list-title">#${escapeHtml(order.id.slice(0, 8))}</div>
        <p class="subtle">${escapeHtml(order.user?.name || "Customer")} - ${shortDate(order.createdAt)}</p>
      </div>
      <div>
        <strong>${money(order.totalAmount)}</strong>
        <div><span class="status ${statusClass(order.status)}">${escapeHtml(order.status)}</span></div>
      </div>
    </button>
  `;
}

function orderDetail(order) {
  return `
    <div class="review-detail">
      <div class="split-item">
        <div>
          <p class="kicker">Invoice</p>
          <h2>#${escapeHtml(order.id.slice(0, 8))}</h2>
          <p class="subtle">${shortDate(order.createdAt)}</p>
        </div>
        <span class="status ${statusClass(order.status)}">${escapeHtml(order.status)}</span>
      </div>

      <div class="profile-card">
        <img src="${avatar(1)}" alt="${escapeHtml(order.user?.name || "Customer")}" />
        <div>
          <strong>${escapeHtml(order.user?.name || "Customer")}</strong>
          <p class="subtle">${escapeHtml(order.user?.email || "No email")}</p>
        </div>
      </div>

      <div class="list-item">
        ${(order.items || [])
          .map(
            (item) => `
              <div class="split-item">
                <span>${escapeHtml(item.product?.name || item.productId)} x ${item.quantity}</span>
                <strong>${money(Number(item.price) * Number(item.quantity))}</strong>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="split-item">
        <span>Total</span>
        <strong>${money(order.totalAmount)}</strong>
      </div>

      <label>
        Status
        <select data-action="order-status" data-id="${order.id}">
          ${["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"]
            .map((status) => `<option ${order.status === status ? "selected" : ""}>${status}</option>`)
            .join("")}
        </select>
      </label>

      <button class="btn danger" data-action="delete-order" data-id="${order.id}" type="button">
        <span class="material-symbols-outlined">delete</span>
        Delete Order
      </button>
    </div>
  `;
}

function renderCategories() {
  return `
    ${pageHead(
      "Categories",
      "Organize product categories and moderate recent customer reviews.",
      `<button class="btn primary" id="addCategoryBtn" type="button"><span class="material-symbols-outlined">add</span>New Category</button>`
    )}

    <div class="grid two-col">
      <section>
        <div class="grid cards-3">
          ${
            state.categories.length
              ? state.categories.map(categoryCard).join("")
              : `<div class="empty">No categories found.</div>`
          }
          <button class="card empty" id="emptyAddCategoryBtn" type="button">
            <span class="material-symbols-outlined">add_circle</span>
            Create new category
          </button>
        </div>
      </section>

      <aside class="dark-panel">
        <div class="section-row" style="margin-top: 0;">
          <div>
            <h2>Recent Reviews</h2>
            <p class="subtle">Approve or hide reviews from the category workspace.</p>
          </div>
        </div>
        <div class="review-list">
          ${
            state.reviews.length
              ? state.reviews.slice(0, 4).map(reviewCompact).join("")
              : `<div class="empty">No reviews submitted yet.</div>`
          }
        </div>
      </aside>
    </div>
  `;
}

function categoryCard(category, index) {
  return `
    <article class="card category-card">
      <div class="image-card">
        <img src="${categoryImage(index)}" alt="${escapeHtml(category.name)} category" />
        <span>${escapeHtml(category.status)}</span>
      </div>
      <div class="category-body">
        <div class="split-item">
          <div>
            <h3>${escapeHtml(category.name)}</h3>
            <p class="subtle">${escapeHtml(category.description || "No description added.")}</p>
          </div>
          <button class="toggle ${category.status === "ACTIVE" ? "on" : ""}" data-action="toggle-category" data-id="${category.id}" type="button" aria-label="Toggle category"></button>
        </div>
        <div class="row-actions">
          <button class="small-btn" data-action="edit-category" data-id="${category.id}" type="button">Edit</button>
          <button class="small-btn danger" data-action="delete-category" data-id="${category.id}" type="button">Delete</button>
        </div>
      </div>
    </article>
  `;
}

function reviewCompact(review) {
  return `
    <article class="list-item">
      <div class="split-item">
        <div>
          <div class="list-title">${escapeHtml(review.user?.name || "Customer")}</div>
          <p class="subtle">${escapeHtml(review.product?.name || "Product")} - ${stars(review.rating)}</p>
        </div>
        <span class="status ${statusClass(review.status)}">${escapeHtml(review.status)}</span>
      </div>
      <p>${escapeHtml(review.comment || "No comment.")}</p>
      <div class="row-actions">
        <button class="small-btn" data-action="review-status" data-id="${review.id}" data-status="PUBLISHED" type="button">Approve</button>
        <button class="small-btn danger" data-action="review-status" data-id="${review.id}" data-status="HIDDEN" type="button">Hide</button>
      </div>
    </article>
  `;
}

function renderReviews() {
  const filtered = filterReviews();
  const selected = state.reviews.find((review) => review.id === state.selectedReviewId) || state.reviews[0];

  return `
    ${pageHead(
      "Reviews & Feedback",
      "Moderate customer reviews, inspect product feedback, and create demo reviews.",
      `<button class="btn light" id="refreshReviewsBtn" type="button"><span class="material-symbols-outlined">refresh</span>Refresh</button>
       <button class="btn primary" id="createReviewBtn" type="button"><span class="material-symbols-outlined">rate_review</span>Add Review</button>`
    )}

    <div class="grid stats">
      ${statCard("Total Reviews", String(state.reviews.length), "All statuses", "reviews")}
      ${statCard("Published", String(state.reviews.filter((item) => item.status === "PUBLISHED").length), "Visible", "visibility")}
      ${statCard("Hidden", String(state.reviews.filter((item) => item.status === "HIDDEN").length), "Moderated", "visibility_off")}
      ${statCard("Average Rating", averageRating(), "Customer score", "star")}
    </div>

    ${filterBar("reviews", "Search reviews...", ["ALL", "PUBLISHED", "HIDDEN"])}

    <div class="grid two-col">
      <section>
        <div class="review-list">
          ${
            filtered.length
              ? filtered.map(reviewListItem).join("")
              : `<div class="empty">No reviews match the filter.</div>`
          }
        </div>
      </section>
      <aside class="dark-panel">
        ${selected ? reviewDetail(selected) : `<div class="empty">Select a review to inspect it.</div>`}
      </aside>
    </div>
  `;
}

function reviewListItem(review, index) {
  return `
    <button class="list-item split-item" data-action="select-review" data-id="${review.id}" type="button">
      <div class="entity-cell">
        <div class="thumb"><img src="${productImage(review.product, index)}" alt="${escapeHtml(review.product?.name || "Product")}" /></div>
        <div>
          <strong>${escapeHtml(review.product?.name || "Product")}</strong>
          <p class="subtle">${escapeHtml(review.comment || "No comment.")}</p>
          <span class="rating">${stars(review.rating)}</span>
        </div>
      </div>
      <span class="status ${statusClass(review.status)}">${escapeHtml(review.status)}</span>
    </button>
  `;
}

function reviewDetail(review) {
  const draft = localStorage.getItem(`reply_${review.id}`) || "";
  return `
    <div class="review-detail">
      <div class="split-item">
        <div>
          <p class="kicker">Review Details</p>
          <h2>${escapeHtml(review.product?.name || "Product")}</h2>
        </div>
        <span class="status ${statusClass(review.status)}">${escapeHtml(review.status)}</span>
      </div>
      <div class="profile-card">
        <img src="${avatar(0)}" alt="${escapeHtml(review.user?.name || "Customer")}" />
        <div>
          <strong>${escapeHtml(review.user?.name || "Customer")}</strong>
          <p class="subtle">${shortDate(review.createdAt)} - <span class="rating">${stars(review.rating)}</span></p>
        </div>
      </div>
      <div class="list-item">
        <p>${escapeHtml(review.comment || "No comment.")}</p>
      </div>
      <label>
        Reply draft
        <textarea id="replyDraft">${escapeHtml(draft)}</textarea>
      </label>
      <div class="row-actions">
        <button class="btn light" data-action="save-reply" data-id="${review.id}" type="button">Save Draft</button>
        <button class="btn primary" data-action="post-reply" data-id="${review.id}" type="button">Post Reply</button>
      </div>
      <div class="row-actions">
        <button class="small-btn" data-action="review-status" data-id="${review.id}" data-status="PUBLISHED" type="button">Approve</button>
        <button class="small-btn danger" data-action="review-status" data-id="${review.id}" data-status="HIDDEN" type="button">Hide</button>
      </div>
    </div>
  `;
}

function stars(rating) {
  return "★★★★★".slice(0, Number(rating || 0)).padEnd(5, "☆");
}

function renderCustomers() {
  const filtered = filterCustomers();
  const selected = state.users.find((user) => user.id === state.selectedCustomerId) || state.users[0];

  return `
    ${pageHead(
      "Customers",
      "Manage registered users and customer account status.",
      `<button class="btn light" id="refreshCustomersBtn" type="button"><span class="material-symbols-outlined">refresh</span>Refresh</button>
       <button class="btn primary" id="addCustomerBtn" type="button"><span class="material-symbols-outlined">person_add</span>Add Customer</button>`
    )}

    <div class="grid stats">
      ${statCard("Total Users", String(state.users.length), "Admin endpoint", "group")}
      ${statCard("Customers", String(state.users.filter((user) => user.role === "CUSTOMER").length), "Shopper accounts", "person")}
      ${statCard("Admins", String(state.users.filter((user) => user.role === "ADMIN").length), "Management users", "admin_panel_settings")}
      ${statCard("Blocked", String(state.users.filter((user) => user.status === "BLOCKED").length), "Restricted", "block")}
    </div>

    ${filterBar("customers", "Search customers...", ["ALL", "CUSTOMER", "ADMIN", "ACTIVE", "BLOCKED"])}

    <div class="grid two-col">
      <section class="table-panel">
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length ? filtered.map(customerRow).join("") : emptyRow("No customers match this view.", 5)}
            </tbody>
          </table>
        </div>
      </section>
      <aside class="dark-panel">
        ${selected ? customerDetail(selected) : `<div class="empty">Select a customer to view details.</div>`}
      </aside>
    </div>
  `;
}

function customerRow(user, index) {
  return `
    <tr>
      <td>
        <button class="entity-cell small-btn" data-action="select-customer" data-id="${user.id}" type="button">
          <div class="thumb"><img src="${avatar(index)}" alt="${escapeHtml(user.name)}" /></div>
          <div>
            <strong>${escapeHtml(user.name)}</strong>
            <div class="muted">${escapeHtml(user.email)}</div>
          </div>
        </button>
      </td>
      <td>${escapeHtml(user.role)}</td>
      <td><span class="status ${statusClass(user.status)}">${escapeHtml(user.status)}</span></td>
      <td>${shortDate(user.createdAt)}</td>
      <td>
        <div class="row-actions">
          <button class="small-btn" data-action="edit-customer" data-id="${user.id}" type="button">Edit</button>
          <button class="small-btn danger" data-action="delete-customer" data-id="${user.id}" type="button">Delete</button>
        </div>
      </td>
    </tr>
  `;
}

function customerDetail(user) {
  const index = Math.max(0, state.users.findIndex((item) => item.id === user.id));
  return `
    <div class="review-detail">
      <div class="profile-card">
        <img src="${avatar(index)}" alt="${escapeHtml(user.name)}" />
        <div>
          <h2>${escapeHtml(user.name)}</h2>
          <p class="subtle">${escapeHtml(user.email)}</p>
        </div>
      </div>
      <div class="list-item">
        <div class="split-item"><span>Role</span><strong>${escapeHtml(user.role)}</strong></div>
        <div class="split-item"><span>Status</span><strong>${escapeHtml(user.status)}</strong></div>
        <div class="split-item"><span>Joined</span><strong>${shortDate(user.createdAt)}</strong></div>
      </div>
      <button class="btn primary" data-action="edit-customer" data-id="${user.id}" type="button">Edit Profile</button>
      <button class="btn light" data-action="message-customer" data-id="${user.id}" type="button">Send Message</button>
    </div>
  `;
}

function renderWishlist() {
  return `
    ${pageHead(
      "Wishlist",
      "Use the assignment wishlist endpoints with the logged-in account.",
      `<button class="btn light" id="refreshWishlistBtn" type="button"><span class="material-symbols-outlined">refresh</span>Refresh</button>
       <button class="btn primary" id="addWishlistBtn" type="button"><span class="material-symbols-outlined">favorite</span>Add Item</button>`
    )}
    <div class="grid cards-3">
      ${
        state.wishlist.length
          ? state.wishlist.map(wishlistCard).join("")
          : `<div class="empty">No wishlist items yet. Add an active product.</div>`
      }
    </div>
  `;
}

function wishlistCard(item, index) {
  return `
    <article class="card category-card">
      <div class="image-card">
        <img src="${productImage(item.product, index)}" alt="${escapeHtml(item.product?.name || "Product")}" />
        <span>${escapeHtml(item.status)}</span>
      </div>
      <div class="category-body">
        <h3>${escapeHtml(item.product?.name || "Product")}</h3>
        <p class="subtle">Added ${shortDate(item.createdAt)}</p>
        <button class="btn danger" data-action="remove-wishlist" data-id="${item.id}" type="button">Remove</button>
      </div>
    </article>
  `;
}

function renderSettings() {
  return `
    ${pageHead(
      "Settings",
      "Control session, API status, documentation, and local dashboard preferences.",
      `<button class="btn danger" id="logoutBtn" type="button"><span class="material-symbols-outlined">logout</span>Logout</button>`
    )}
    <div class="grid two-col">
      <section class="card" style="padding: 22px;">
        <h2>API Status</h2>
        <div class="settings-list" style="margin-top: 18px;">
          <div class="list-item split-item"><span>Service</span><strong>${escapeHtml(state.health?.service || "shopwise-api")}</strong></div>
          <div class="list-item split-item"><span>Database</span><strong>${escapeHtml(state.health?.database || "checking")}</strong></div>
          <div class="list-item split-item"><span>Authenticated user</span><strong>${escapeHtml(state.user?.email || "None")}</strong></div>
          <div class="list-item split-item"><span>Google login</span><strong>Visible, not implemented</strong></div>
        </div>
      </section>
      <aside class="dark-panel docs-box">
        <h2>Submission Links</h2>
        <a href="/api/docs" target="_blank" rel="noreferrer">Open API Documentation</a>
        <a href="/api/health" target="_blank" rel="noreferrer">Open Health Check</a>
        <button class="btn light" id="markReadBtn" type="button">Mark Notifications Read</button>
        <button class="btn light" id="clearLocalBtn" type="button">Clear Local Drafts</button>
      </aside>
    </div>
  `;
}

function renderSearch() {
  const q = state.query.toLowerCase();
  const results = [
    ...state.products
      .filter((item) => [item.name, item.description, item.status, item.category?.name].some((value) => includes(value, q)))
      .map((item) => ({ type: "Product", title: item.name, detail: item.description, page: "products" })),
    ...state.categories
      .filter((item) => [item.name, item.description, item.status].some((value) => includes(value, q)))
      .map((item) => ({ type: "Category", title: item.name, detail: item.description || item.status, page: "categories" })),
    ...state.reviews
      .filter((item) => [item.comment, item.product?.name, item.user?.name, item.status].some((value) => includes(value, q)))
      .map((item) => ({ type: "Review", title: item.product?.name || "Review", detail: item.comment || item.status, page: "reviews" })),
    ...state.orders
      .filter((item) => [item.id, item.status, item.user?.name, item.user?.email].some((value) => includes(value, q)))
      .map((item) => ({ type: "Order", title: `Order #${item.id.slice(0, 8)}`, detail: item.status, page: "orders" })),
    ...state.users
      .filter((item) => [item.name, item.email, item.role, item.status].some((value) => includes(value, q)))
      .map((item) => ({ type: "Customer", title: item.name, detail: item.email, page: "customers" }))
  ];

  return `
    ${pageHead("Search", `Global results for "${escapeHtml(state.query || "all data")}".`)}
    <section class="card" style="padding: 18px;">
      <div class="notification-list">
        ${
          results.length
            ? results
                .map(
                  (result) => `
                    <button class="list-item search-result" data-page="${result.page}" type="button">
                      <span class="status">${escapeHtml(result.type)}</span>
                      <div>
                        <strong>${escapeHtml(result.title)}</strong>
                        <p class="subtle">${escapeHtml(result.detail || "No details")}</p>
                      </div>
                      <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                  `
                )
                .join("")
            : `<div class="empty">No matching products, orders, reviews, customers, or categories.</div>`
        }
      </div>
    </section>
  `;
}

function includes(value, query) {
  return String(value || "").toLowerCase().includes(query);
}

function filterBar(type, placeholder, statuses, dark = false) {
  return `
    <div class="filter-bar ${dark ? "dark-panel" : ""}" data-filter="${type}">
      <label class="local-search">
        <span class="material-symbols-outlined">search</span>
        <input data-action="local-search" data-type="${type}" type="search" placeholder="${placeholder}" value="${escapeHtml(state.query)}" />
      </label>
      <div class="chips">
        ${statuses
          .map(
            (status) => `
              <button class="chip ${state.filters[type] === status ? "active" : ""}" data-action="filter" data-type="${type}" data-value="${status}" type="button">
                ${status === "ALL" ? `All ${type[0].toUpperCase() + type.slice(1)}` : status}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function emptyRow(text, colspan) {
  return `<tr><td colspan="${colspan}"><div class="empty">${text}</div></td></tr>`;
}

function filterProducts() {
  return state.products.filter((product) => {
    const statusMatch = state.filters.products === "ALL" || product.status === state.filters.products;
    const queryMatch = [product.name, product.description, product.category?.name, product.status].some((value) =>
      includes(value, state.query.toLowerCase())
    );
    return statusMatch && queryMatch;
  });
}

function filterOrders() {
  return state.orders.filter((order) => {
    const statusMatch = state.filters.orders === "ALL" || order.status === state.filters.orders;
    const queryMatch = [order.id, order.status, order.user?.name, order.user?.email].some((value) =>
      includes(value, state.query.toLowerCase())
    );
    return statusMatch && queryMatch;
  });
}

function filterReviews() {
  return state.reviews.filter((review) => {
    const statusMatch = state.filters.reviews === "ALL" || review.status === state.filters.reviews;
    const queryMatch = [review.comment, review.status, review.product?.name, review.user?.name].some((value) =>
      includes(value, state.query.toLowerCase())
    );
    return statusMatch && queryMatch;
  });
}

function filterCustomers() {
  return state.users.filter((user) => {
    const filter = state.filters.customers;
    const typeMatch = filter === "ALL" || user.role === filter || user.status === filter;
    const queryMatch = [user.name, user.email, user.role, user.status].some((value) =>
      includes(value, state.query.toLowerCase())
    );
    return typeMatch && queryMatch;
  });
}

function bindViewEvents() {
  view.querySelectorAll("[data-action='filter']").forEach((button) => {
    button.addEventListener("click", () => {
      state.filters[button.dataset.type] = button.dataset.value;
      render();
    });
  });

  view.querySelectorAll("[data-action='local-search']").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.query = event.target.value.trim();
      $("#globalSearch").value = state.query;
      render();
    });
  });

  $("#refreshProductsBtn")?.addEventListener("click", () => refreshPage("products"));
  $("#refreshOrdersBtn")?.addEventListener("click", () => refreshPage("orders"));
  $("#refreshReviewsBtn")?.addEventListener("click", () => refreshPage("reviews"));
  $("#refreshCustomersBtn")?.addEventListener("click", () => refreshPage("customers"));
  $("#refreshWishlistBtn")?.addEventListener("click", () => refreshPage("wishlist"));
  $("#addProductBtn")?.addEventListener("click", () => openProductModal());
  $("#addCategoryBtn")?.addEventListener("click", () => openCategoryModal());
  $("#emptyAddCategoryBtn")?.addEventListener("click", () => openCategoryModal());
  $("#createOrderBtn")?.addEventListener("click", () => openOrderModal());
  $("#createReviewBtn")?.addEventListener("click", () => openReviewModal());
  $("#addCustomerBtn")?.addEventListener("click", () => openCustomerModal());
  $("#addWishlistBtn")?.addEventListener("click", () => openWishlistModal());
  $("#logoutBtn")?.addEventListener("click", () => logout());
  $("#markReadBtn")?.addEventListener("click", markNotificationsRead);
  $("#clearLocalBtn")?.addEventListener("click", clearLocalDrafts);

  view.querySelectorAll("[data-action]").forEach((element) => {
    const action = element.dataset.action;
    if (action === "edit-product") element.addEventListener("click", () => openProductModal(findById(state.products, element.dataset.id)));
    if (action === "delete-product") element.addEventListener("click", () => deleteItem("products", element.dataset.id));
    if (action === "edit-category") element.addEventListener("click", () => openCategoryModal(findById(state.categories, element.dataset.id)));
    if (action === "delete-category") element.addEventListener("click", () => deleteItem("categories", element.dataset.id));
    if (action === "toggle-category") element.addEventListener("click", () => toggleCategory(element.dataset.id));
    if (action === "review-status") {
      element.addEventListener("click", () => updateReviewStatus(element.dataset.id, element.dataset.status));
    }
    if (action === "select-review") {
      element.addEventListener("click", () => {
        state.selectedReviewId = element.dataset.id;
        render();
      });
    }
    if (action === "select-order") {
      element.addEventListener("click", () => {
        state.selectedOrderId = element.dataset.id;
        render();
      });
    }
    if (action === "order-status") {
      element.addEventListener("change", () => updateOrderStatus(element.dataset.id, element.value));
    }
    if (action === "delete-order") element.addEventListener("click", () => deleteItem("orders", element.dataset.id));
    if (action === "select-customer") {
      element.addEventListener("click", () => {
        state.selectedCustomerId = element.dataset.id;
        render();
      });
    }
    if (action === "edit-customer") element.addEventListener("click", () => openCustomerModal(findById(state.users, element.dataset.id)));
    if (action === "delete-customer") element.addEventListener("click", () => deleteItem("users", element.dataset.id));
    if (action === "message-customer") element.addEventListener("click", () => toast("Messaging is a UI action only; no messaging endpoint exists in the backend."));
    if (action === "save-reply") element.addEventListener("click", () => saveReplyDraft(element.dataset.id));
    if (action === "post-reply") element.addEventListener("click", () => postReply(element.dataset.id));
    if (action === "remove-wishlist") element.addEventListener("click", () => deleteItem("wishlists", element.dataset.id));
  });
}

function findById(items, id) {
  return items.find((item) => item.id === id);
}

async function refreshPage(page = state.page) {
  await ensureDataForPage(page);
  render();
  toast("Latest data loaded");
}

function closePopovers() {
  notificationPanel.classList.add("hidden");
  profilePanel.classList.add("hidden");
}

function renderNotificationBadge() {
  const unread = state.notifications.filter((item) => !item.read).length;
  $("#notificationBadge").textContent = unread;
  $("#notificationBadge").classList.toggle("hidden", unread === 0);
}

function renderNotifications() {
  notificationPanel.innerHTML = `
    <div class="split-item">
      <h3>Notifications</h3>
      <button class="small-btn" id="panelMarkReadBtn" type="button">Mark all read</button>
    </div>
    <div class="notification-list" style="margin-top: 14px;">
      ${
        state.notifications.length
          ? state.notifications
              .map(
                (item) => `
                  <article class="list-item">
                    <strong>${escapeHtml(item.title)}</strong>
                    <p class="subtle">${escapeHtml(item.body)}</p>
                    <small>${shortDate(item.createdAt)} ${item.read ? "" : "- unread"}</small>
                  </article>
                `
              )
              .join("")
          : `<div class="empty">No notifications.</div>`
      }
    </div>
  `;
  $("#panelMarkReadBtn").addEventListener("click", markNotificationsRead);
}

function markNotificationsRead() {
  state.notifications = state.notifications.map((item) => ({ ...item, read: true }));
  saveJson("shopwise_notifications", state.notifications);
  renderNotificationBadge();
  renderNotifications();
}

function renderProfilePopover() {
  profilePanel.innerHTML = `
    <div class="profile-card">
      <img src="${imageAssets.avatar}" alt="${escapeHtml(state.user?.name || "User")}" />
      <div>
        <strong>${escapeHtml(state.user?.name || "Not signed in")}</strong>
        <p class="subtle">${escapeHtml(state.user?.email || "")}</p>
      </div>
    </div>
    <div class="settings-list" style="margin-top: 16px;">
      <button class="list-item split-item" data-page="settings" type="button"><span>Settings</span><span class="material-symbols-outlined">arrow_forward</span></button>
      <button class="list-item split-item" data-page="wishlist" type="button"><span>Wishlist</span><span class="material-symbols-outlined">arrow_forward</span></button>
      <button class="btn danger" id="profileLogoutBtn" type="button">Logout</button>
    </div>
  `;
  $("#profileLogoutBtn").addEventListener("click", () => logout());
}

function openModal(title, body, onSubmit) {
  modalRoot.innerHTML = `
    <section class="modal">
      <div class="modal-head">
        <h2>${escapeHtml(title)}</h2>
        <button class="icon-btn" id="modalCloseBtn" type="button" aria-label="Close">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <form class="modal-body" id="modalForm">${body}</form>
    </section>
  `;
  modalRoot.classList.remove("hidden");
  $("#modalCloseBtn").addEventListener("click", closeModal);
  $("#modalForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await onSubmit(new FormData(event.currentTarget));
      closeModal();
    } catch (error) {
      toast(error.message, "error");
    }
  });
}

function closeModal() {
  modalRoot.classList.add("hidden");
  modalRoot.innerHTML = "";
}

function categoryOptions(selectedId = "") {
  return state.categories
    .map((category) => `<option value="${category.id}" ${category.id === selectedId ? "selected" : ""}>${escapeHtml(category.name)}</option>`)
    .join("");
}

function productOptions(selectedId = "") {
  return state.products
    .filter((product) => product.status === "ACTIVE")
    .map((product) => `<option value="${product.id}" ${product.id === selectedId ? "selected" : ""}>${escapeHtml(product.name)} - ${money(product.price)}</option>`)
    .join("");
}

function openProductModal(product = null) {
  openModal(
    product ? "Edit Product" : "Add Product",
    `
      <div class="form-grid">
        <label>Name<input name="name" required minlength="2" value="${escapeHtml(product?.name || "")}" /></label>
        <label>Price<input name="price" required type="number" min="1" step="0.01" value="${escapeHtml(product?.price || "49.99")}" /></label>
        <label>Stock<input name="stock" required type="number" min="0" value="${escapeHtml(product?.stock || "10")}" /></label>
        <label>Status
          <select name="status">
            ${["ACTIVE", "DRAFT", "ARCHIVED"].map((status) => `<option ${product?.status === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
        <label class="full">Category<select name="categoryId" required>${categoryOptions(product?.categoryId)}</select></label>
        <label class="full">Image URL<input name="imageUrl" type="url" value="${escapeHtml(product?.imageUrl || imageAssets.products[0])}" /></label>
        <label class="full">Description<textarea name="description" required minlength="10">${escapeHtml(product?.description || "Premium product created from the Shopwise dashboard.")}</textarea></label>
      </div>
      <button class="btn primary" type="submit">${product ? "Save Product" : "Create Product"}</button>
    `,
    async (form) => {
      const body = Object.fromEntries(form.entries());
      body.price = Number(body.price);
      body.stock = Number(body.stock);
      if (!body.imageUrl) delete body.imageUrl;
      const result = await api(product ? `/api/products/${product.id}` : "/api/products", {
        method: product ? "PATCH" : "POST",
        body
      });
      addNotification("Product saved", result.data.name);
      await refreshPage("products");
    }
  );
}

function openCategoryModal(category = null) {
  openModal(
    category ? "Edit Category" : "New Category",
    `
      <label>Name<input name="name" required minlength="2" value="${escapeHtml(category?.name || "")}" /></label>
      <label>Status
        <select name="status">
          ${["ACTIVE", "INACTIVE"].map((status) => `<option ${category?.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <label>Description<textarea name="description">${escapeHtml(category?.description || "Curated products for Shopwise customers.")}</textarea></label>
      <button class="btn primary" type="submit">${category ? "Save Category" : "Create Category"}</button>
    `,
    async (form) => {
      const body = Object.fromEntries(form.entries());
      const result = await api(category ? `/api/categories/${category.id}` : "/api/categories", {
        method: category ? "PATCH" : "POST",
        body
      });
      addNotification("Category saved", result.data.name);
      await refreshPage("categories");
    }
  );
}

function openOrderModal() {
  if (!state.products.some((product) => product.status === "ACTIVE")) {
    toast("Create or activate a product before placing an order.", "error");
    return;
  }
  openModal(
    "Create Order",
    `
      <label>Product<select name="productId" required>${productOptions()}</select></label>
      <label>Quantity<input name="quantity" required type="number" min="1" value="1" /></label>
      <label>Phone<input name="phone" required minlength="6" value="+8801700000000" /></label>
      <label>Shipping Address<input name="shippingAddress" required minlength="8" value="House 12, Dhaka" /></label>
      <label>Notes<textarea name="notes">Demo order from the responsive dashboard.</textarea></label>
      <button class="btn primary" type="submit">Create Order</button>
    `,
    async (form) => {
      const body = Object.fromEntries(form.entries());
      const result = await api("/api/orders", {
        method: "POST",
        body: {
          shippingAddress: body.shippingAddress,
          phone: body.phone,
          notes: body.notes,
          items: [{ productId: body.productId, quantity: Number(body.quantity) }]
        }
      });
      state.selectedOrderId = result.data.id;
      addNotification("Order created", `Invoice #${result.data.id.slice(0, 8)} was created.`);
      await refreshPage("orders");
    }
  );
}

function openReviewModal() {
  if (!state.products.some((product) => product.status === "ACTIVE")) {
    toast("Create or activate a product before adding a review.", "error");
    return;
  }
  openModal(
    "Add Review",
    `
      <label>Product<select name="productId" required>${productOptions()}</select></label>
      <label>Rating<input name="rating" required type="number" min="1" max="5" value="5" /></label>
      <label>Comment<textarea name="comment" required minlength="3">Excellent value and fast delivery.</textarea></label>
      <button class="btn primary" type="submit">Create Review</button>
    `,
    async (form) => {
      const body = Object.fromEntries(form.entries());
      const result = await api("/api/reviews", {
        method: "POST",
        body: {
          productId: body.productId,
          rating: Number(body.rating),
          comment: body.comment
        }
      });
      state.selectedReviewId = result.data.id;
      addNotification("Review created", `${result.data.rating}/5 review added.`);
      await refreshPage("reviews");
    }
  );
}

function openCustomerModal(user = null) {
  openModal(
    user ? "Edit Customer" : "Add Customer",
    `
      <label>Name<input name="name" required minlength="2" value="${escapeHtml(user?.name || "")}" /></label>
      <label>Email<input name="email" required type="email" ${user ? "readonly" : ""} value="${escapeHtml(user?.email || "")}" /></label>
      ${user ? "" : `<label>Password<input name="password" required minlength="6" value="customer123" /></label>`}
      <label>Role
        <select name="role">
          ${["CUSTOMER", "ADMIN"].map((role) => `<option ${user?.role === role ? "selected" : ""}>${role}</option>`).join("")}
        </select>
      </label>
      <label>Status
        <select name="status">
          ${["ACTIVE", "BLOCKED"].map((status) => `<option ${user?.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <button class="btn primary" type="submit">${user ? "Save Customer" : "Create Customer"}</button>
    `,
    async (form) => {
      const body = Object.fromEntries(form.entries());
      let result;
      if (user) {
        delete body.email;
        result = await api(`/api/users/${user.id}`, { method: "PATCH", body });
      } else {
        result = await api("/api/auth/register", {
          method: "POST",
          body: { name: body.name, email: body.email, password: body.password }
        });
        if (body.role !== "CUSTOMER" || body.status !== "ACTIVE") {
          await api(`/api/users/${result.data.user.id}`, {
            method: "PATCH",
            body: { role: body.role, status: body.status }
          });
        }
      }
      addNotification("Customer saved", user ? body.name : result.data.user.email);
      await refreshPage("customers");
    }
  );
}

function openWishlistModal() {
  if (!state.products.some((product) => product.status === "ACTIVE")) {
    toast("Create or activate a product before using wishlist.", "error");
    return;
  }
  openModal(
    "Add Wishlist Item",
    `
      <label>Product<select name="productId" required>${productOptions()}</select></label>
      <button class="btn primary" type="submit">Add to Wishlist</button>
    `,
    async (form) => {
      const body = Object.fromEntries(form.entries());
      const result = await api("/api/wishlists", {
        method: "POST",
        body: { productId: body.productId }
      });
      addNotification("Wishlist updated", result.message);
      await refreshPage("wishlist");
    }
  );
}

async function toggleCategory(id) {
  const category = findById(state.categories, id);
  if (!category) return;
  const next = category.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
  try {
    await api(`/api/categories/${id}`, {
      method: "PATCH",
      body: { status: next }
    });
    addNotification("Category status updated", `${category.name} is now ${next}.`);
    await refreshPage("categories");
  } catch (error) {
    toast(error.message, "error");
  }
}

async function updateReviewStatus(id, status) {
  try {
    await api(`/api/reviews/${id}`, {
      method: "PATCH",
      body: { status }
    });
    addNotification("Review moderated", `Review status set to ${status}.`);
    await refreshPage("reviews");
  } catch (error) {
    toast(error.message, "error");
  }
}

async function updateOrderStatus(id, status) {
  try {
    await api(`/api/orders/${id}/status`, {
      method: "PATCH",
      body: { status }
    });
    addNotification("Order updated", `Order #${id.slice(0, 8)} is now ${status}.`);
    await refreshPage("orders");
  } catch (error) {
    toast(error.message, "error");
  }
}

async function deleteItem(resource, id) {
  if (!id || !confirm(`Delete this ${resource.slice(0, -1)}?`)) return;
  try {
    await api(`/api/${resource}/${id}`, { method: "DELETE" });
    addNotification("Item deleted", `${resource.slice(0, -1)} was removed.`);
    const pageByResource = {
      users: "customers",
      wishlists: "wishlist"
    };
    await refreshPage(pageByResource[resource] || resource);
  } catch (error) {
    toast(error.message, "error");
  }
}

function saveReplyDraft(id) {
  const value = $("#replyDraft")?.value || "";
  localStorage.setItem(`reply_${id}`, value);
  toast("Reply draft saved locally");
}

function postReply(id) {
  saveReplyDraft(id);
  toast("Reply UI is ready, but the backend assignment does not include a reply endpoint.");
  addNotification("Reply queued", `Reply draft for review #${id.slice(0, 8)} saved locally.`);
}

function clearLocalDrafts() {
  Object.keys(localStorage)
    .filter((key) => key.startsWith("reply_"))
    .forEach((key) => localStorage.removeItem(key));
  toast("Local drafts cleared");
}

async function init() {
  bindStaticEvents();
  $("#avatarImage").src = imageAssets.avatar;

  if (!state.token) {
    $("#loginScreen").classList.remove("hidden");
    $("#appShell").classList.add("hidden");
    return;
  }

  $("#loginScreen").classList.add("hidden");
  $("#appShell").classList.remove("hidden");
  state.page = currentHashPage();
  render();
  await loadAll();
  render();
}

init().catch((error) => {
  toast(error.message, "error");
});
