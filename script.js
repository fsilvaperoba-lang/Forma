"use strict";

// TEXTOS EM PORTUGUÊS E INGLÊS
const translations = {
  pt: {
    skip: "Ir para os produtos",
    announcement: "OBJETOS EXTRAORDINÁRIOS. DIAS COMUNS.",
    shop: "Loja",
    about: "A FORMA",
    bag: "Sacola",
    heroLabel: "DESIGN PARA A VIDA REAL",
    heroTitle: "Sua casa.<br>Mais você.",
    heroDescription: "Objetos que saem do óbvio e entram na sua rotina. Feitos para usar, misturar e chamar de seus.",
    explore: "Encontre sua próxima peça",
    heroNote: "Poucas peças. Muita personalidade.",
    collection: "A COLEÇÃO DO AGORA",
    value1: "DESIGN COM PRESENÇA",
    value2: "FEITO PARA FICAR",
    value3: "SEU JEITO DE MORAR",
    catalogLabel: "ESCOLHAS NADA ÓBVIAS",
    catalogTitle: "Bons encontros.",
    all: "Tudo",
    lighting: "Iluminação",
    objects: "Objetos",
    furniture: "Móveis",
    searchLabel: "Buscar produtos",
    searchPlaceholder: "Buscar uma peça...",
    sortLabel: "Ordenar produtos",
    featured: "Destaques",
    priceAsc: "Menor preço",
    priceDesc: "Maior preço",
    emptyTitle: "Nenhuma peça por aqui.",
    emptyDescription: "Tente outra busca ou limpe os filtros.",
    reset: "Limpar filtros",
    aboutLabel: "MENOS AUTOMÁTICO. MAIS AUTÊNTICO.",
    aboutTitle: "Morar também<br>é se expressar.",
    aboutDescription: "Uma luminária muda a luz. Uma cor muda o clima. Um objeto pode mudar o jeito como você sente um lugar. A FORMA nasce dessas pequenas mudanças.",
    aboutLink: "Encontre o seu jeito ↗",
    footerCopy: "Objetos para viver.<br>Do seu jeito.",
    demoNotice: "Marca fictícia · Projeto de portfólio · Sem compras reais",
    yourBag: "Sua sacola.",
    subtotal: "Subtotal",
    shipping: "Entrega demonstrativa",
    total: "Total",
    shippingNote: "Entrega demonstrativa grátis a partir de R$ 600.",
    checkout: "Continuar para o checkout",
    checkoutNotice: "Simulação de compra. Nenhum pagamento será solicitado.",
    demoCheckout: "CHECKOUT DEMONSTRATIVO",
    checkoutTitle: "Quase em casa.",
    checkoutIntro: "Use dados fictícios para testar. As informações não são enviadas nem salvas.",
    name: "Nome",
    email: "E-mail",
    address: "Endereço fictício",
    city: "Cidade",
    postalCode: "CEP",
    orderTotal: "Total demonstrativo",
    placeOrder: "Concluir simulação",
    successTitle: "Boa escolha.",
    successDescription: "Simulação concluída! Nenhum pedido real foi criado e nenhuma cobrança foi realizada.",
    keepExploring: "Continuar explorando",
    variant: "Acabamento",
    addToBag: "Adicionar à sacola",
    added: "Peça adicionada à sacola.",
    removed: "Peça removida da sacola.",
    free: "Grátis",
    cartEmpty: "Sua sacola está esperando um bom encontro.",
    remove: "Remover",
    decrease: "Diminuir quantidade",
    increase: "Aumentar quantidade",
    close: "Fechar",
    detailNote: "Produto conceitual. As fotos são ilustrativas e podem não representar o acabamento selecionado.",
    maxQuantity: "Limite de 10 unidades por acabamento.",
    item: "peça",
    items: "peças",
    new: "Novidade",
    favorite: "Queridinho",
    last: "Escolha FORMA",
    currencyNote: "Preços em reais brasileiros.",
    galleryAlt: "Foto ilustrativa",
    cream: "Creme",
    blue: "Azul",
    orange: "Laranja",
    natural: "Natural",
    black: "Preto",
    sand: "Areia"
  },

  en: {
    skip: "Skip to products",
    announcement: "EXTRAORDINARY OBJECTS. ORDINARY DAYS.",
    shop: "Shop",
    about: "About FORMA",
    bag: "Bag",
    heroLabel: "DESIGN FOR REAL LIFE",
    heroTitle: "Your space.<br>More you.",
    heroDescription: "Objects that step outside the ordinary and into your everyday. Made to use, mix and make your own.",
    explore: "Find your next piece",
    heroNote: "Fewer pieces. More personality.",
    collection: "THE RIGHT-NOW COLLECTION",
    value1: "DESIGN WITH PRESENCE",
    value2: "MADE TO STAY",
    value3: "YOUR WAY TO LIVE",
    catalogLabel: "ANYTHING BUT ORDINARY",
    catalogTitle: "Good encounters.",
    all: "All",
    lighting: "Lighting",
    objects: "Objects",
    furniture: "Furniture",
    searchLabel: "Search products",
    searchPlaceholder: "Find a piece...",
    sortLabel: "Sort products",
    featured: "Featured",
    priceAsc: "Price: low to high",
    priceDesc: "Price: high to low",
    emptyTitle: "No pieces here.",
    emptyDescription: "Try another search or reset your filters.",
    reset: "Reset filters",
    aboutLabel: "LESS AUTOMATIC. MORE AUTHENTIC.",
    aboutTitle: "Your home.<br>Your expression.",
    aboutDescription: "A lamp changes the light. A color changes the mood. An object can change how a place feels. FORMA begins with these little changes.",
    aboutLink: "Find your own way ↗",
    footerCopy: "Objects for living.<br>Your way.",
    demoNotice: "Fictional brand · Portfolio project · No real purchases",
    yourBag: "Your bag.",
    subtotal: "Subtotal",
    shipping: "Demo delivery",
    total: "Total",
    shippingNote: "Free demo delivery on orders of R$600 or more.",
    checkout: "Continue to checkout",
    checkoutNotice: "Demo checkout. No payment will be requested.",
    demoCheckout: "DEMO CHECKOUT",
    checkoutTitle: "Almost home.",
    checkoutIntro: "Use fictional details to test. Your information is not submitted or stored.",
    name: "Name",
    email: "Email",
    address: "Fictional address",
    city: "City",
    postalCode: "Brazilian postal code",
    orderTotal: "Demo total",
    placeOrder: "Complete demo",
    successTitle: "Good choice.",
    successDescription: "Demo completed! No real order was created and no payment was taken.",
    keepExploring: "Keep exploring",
    variant: "Finish",
    addToBag: "Add to bag",
    added: "Piece added to your bag.",
    removed: "Piece removed from your bag.",
    free: "Free",
    cartEmpty: "Your bag is waiting for a good encounter.",
    remove: "Remove",
    decrease: "Decrease quantity",
    increase: "Increase quantity",
    close: "Close",
    detailNote: "Concept product. Photos are illustrative and may not show the selected finish.",
    maxQuantity: "Limit of 10 units per finish.",
    item: "piece",
    items: "pieces",
    new: "New",
    favorite: "Best-loved",
    last: "FORMA pick",
    currencyNote: "Prices in Brazilian reais.",
    galleryAlt: "Illustrative photo",
    cream: "Cream",
    blue: "Blue",
    orange: "Orange",
    natural: "Natural",
    black: "Black",
    sand: "Sand"
  }
};

// PRODUTOS CONCEITUAIS
// Os preços são sempre em BRL. A troca de idioma não converte moeda.
const products = [
  {
    id: "arco",
    name: { pt: "Luminária Arco", en: "Arco Lamp" },
    category: "lighting",
    price: 289,
    badge: "favorite",
    variants: ["cream", "blue", "orange"],
    description: {
      pt: "Uma presença leve para a mesa de trabalho, a cabeceira ou aquele canto que merece outra luz. Linhas suaves e um desenho que conversa com o ambiente.",
      en: "A light presence for your desk, bedside or the corner that deserves a different glow. Soft lines and a shape that feels at home."
    },
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "terra",
    name: { pt: "Vaso Terra", en: "Terra Vase" },
    category: "objects",
    price: 149,
    badge: "new",
    variants: ["sand", "orange"],
    description: {
      pt: "Para flores, galhos ou simplesmente para estar ali. Um vaso de cerâmica conceitual com volume orgânico e personalidade sem pressa.",
      en: "For flowers, branches or simply being there. A concept ceramic vase with organic volume and an easygoing personality."
    },
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "curva",
    name: { pt: "Cadeira Curva", en: "Curva Chair" },
    category: "furniture",
    price: 890,
    badge: "last",
    variants: ["natural", "black"],
    description: {
      pt: "Uma cadeira para ficar um pouco mais. O desenho combina curvas, estrutura aparente e uma silhueta que funciona sozinha ou em conjunto.",
      en: "A chair that invites you to stay a little longer. Curves, an exposed structure and a silhouette that works alone or together."
    },
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "orbita",
    name: { pt: "Pendente Órbita", en: "Órbita Pendant" },
    category: "lighting",
    price: 359,
    badge: "new",
    variants: ["cream", "black"],
    description: {
      pt: "Luz que organiza o espaço sem dominar a conversa. Uma peça conceitual para mesas, encontros e pequenos rituais de todos os dias.",
      en: "Light that brings a space together without taking over. A concept piece for tables, gatherings and small everyday rituals."
    },
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85&crop=top"
  },
  {
    id: "pausa",
    name: { pt: "Poltrona Pausa", en: "Pausa Armchair" },
    category: "furniture",
    price: 1290,
    badge: "favorite",
    variants: ["cream", "sand"],
    description: {
      pt: "O lugar de abrir um livro e esquecer o horário. Uma poltrona conceitual pensada para trazer conforto e uma presença tranquila ao ambiente.",
      en: "A place to open a book and forget the time. A concept armchair designed to bring comfort and a calm presence to your space."
    },
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "linha",
    name: { pt: "Mesa Linha", en: "Linha Table" },
    category: "furniture",
    price: 459,
    badge: "",
    variants: ["natural", "black"],
    description: {
      pt: "Ao lado do sofá, perto da cama ou no meio de uma boa ideia. Uma mesa compacta conceitual para apoiar o que acompanha sua rotina.",
      en: "Beside the sofa, next to the bed or in the middle of a good idea. A compact concept table for the things that accompany your day."
    },
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "ritual",
    name: { pt: "Caneca Ritual", en: "Ritual Mug" },
    category: "objects",
    price: 79,
    badge: "",
    variants: ["cream", "blue"],
    description: {
      pt: "O primeiro café, o último chá e todas as pausas entre eles. Uma caneca conceitual com desenho simples para pequenos momentos.",
      en: "The first coffee, the last tea and every pause between them. A concept mug with a simple shape for small moments."
    },
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "verde",
    name: { pt: "Cachepô Verde", en: "Verde Planter" },
    category: "objects",
    price: 119,
    badge: "last",
    variants: ["sand", "cream"],
    description: {
      pt: "Um lugar para o verde fazer parte da casa. Um cachepô conceitual que valoriza a planta e acrescenta textura ao ambiente.",
      en: "A place for greenery to feel at home. A concept planter that lets the plant shine while adding texture to the room."
    },
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85"
  }
];

// ESTADO DA APLICAÇÃO
let language = readStorage("formaLanguage", "pt");
if (!["pt", "en"].includes(language)) language = "pt";

let cart = restoreCart();
let category = "all";
let searchTerm = "";
let sortOrder = "featured";
let selectedProductId = null;
let selectedVariant = null;
let toastTimeout;

// ELEMENTOS
const $ = (selector) => document.querySelector(selector);
const grid = $("#productGrid");
const productDialog = $("#productDialog");
const cartDialog = $("#cartDialog");
const checkoutDialog = $("#checkoutDialog");
const toast = $("#toast");

function t(key) {
  return translations[language][key] || key;
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // O site continua funcionando se o navegador bloquear o armazenamento.
  }
}

function restoreCart() {
  const saved = readStorage("formaCart", []);
  if (!Array.isArray(saved)) return [];

  const restored = [];

  saved.forEach((item) => {
    if (!item || typeof item !== "object") return;

    const product = products.find((entry) => entry.id === item.id);
    if (!product || !product.variants.includes(item.variant)) return;

    const quantity = Number(item.quantity);
    if (!Number.isInteger(quantity) || quantity < 1) return;

    const existing = restored.find(
      (entry) => entry.id === item.id && entry.variant === item.variant
    );

    if (existing) {
      existing.quantity = Math.min(10, existing.quantity + quantity);
    } else {
      restored.push({
        id: item.id,
        variant: item.variant,
        quantity: Math.min(10, quantity)
      });
    }
  });

  return restored;
}

function money(value) {
  return new Intl.NumberFormat(language === "pt" ? "pt-BR" : "en-US", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// IDIOMA
function applyLanguage() {
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title = language === "pt"
    ? "FORMA — Objetos para viver"
    : "FORMA — Objects for living";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    // Os textos vêm exclusivamente do dicionário fixo acima.
    element.innerHTML = t(element.dataset.i18n);
  });

  $("#languageButton").textContent = language === "pt" ? "EN" : "PT";
  $("#languageButton").setAttribute(
    "aria-label",
    language === "pt" ? "Switch to English" : "Mudar para português"
  );

  $("#searchInput").placeholder = t("searchPlaceholder");

  document.querySelectorAll("[data-close]").forEach((button) => {
    if (button.classList.contains("close-button")) {
      button.setAttribute("aria-label", t("close"));
    }
  });

  $(".filters").setAttribute(
    "aria-label",
    language === "pt" ? "Categorias" : "Categories"
  );

  renderProducts();
  renderCart();

  if (selectedProductId && productDialog.open) {
    renderProductDetails();
  }
}

$("#languageButton").addEventListener("click", () => {
  language = language === "pt" ? "en" : "pt";
  writeStorage("formaLanguage", language);
  applyLanguage();
});

// CATÁLOGO
function renderProducts() {
  const query = normalize(searchTerm);

  const filtered = products.filter((product) => {
    const categoryMatches =
      category === "all" || product.category === category;

    const searchableText = [
      product.name.pt,
      product.name.en,
      translations.pt[product.category],
      translations.en[product.category]
    ].join(" ");

    return categoryMatches && normalize(searchableText).includes(query);
  });

  if (sortOrder === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sortOrder === "price-desc") filtered.sort((a, b) => b.price - a.price);

  grid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <button
          class="product-open"
          data-product="${product.id}"
          aria-label="${product.name[language]}"
          aria-haspopup="dialog"
        >
          <img
            src="${product.image}"
            alt="${t("galleryAlt")}: ${product.name[language]}"
            loading="lazy"
          >
        </button>

        ${product.badge ? `
          <span class="product-badge">${t(product.badge)}</span>
        ` : ""}

        <button
          class="quick-add"
          data-product="${product.id}"
          aria-label="${t("variant")}: ${product.name[language]}"
          aria-haspopup="dialog"
        >+</button>
      </div>

      <div class="product-meta">
        <h3>
          <button
            class="product-name"
            data-product="${product.id}"
            aria-haspopup="dialog"
          >${product.name[language]}</button>
        </h3>
        <span class="product-price">${money(product.price)}</span>
      </div>

      <p class="product-category">${t(product.category)}</p>
    </article>
  `).join("");

  $("#emptyState").hidden = filtered.length > 0;
  $("#resultsCount").textContent =
    `${filtered.length} ${t(filtered.length === 1 ? "item" : "items")}`;
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (!button) return;

  selectedProductId = button.dataset.product;
  const product = products.find((entry) => entry.id === selectedProductId);
  if (!product) return;

  selectedVariant = product.variants[0];
  renderProductDetails();
  openDialog(productDialog);
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    category = button.dataset.category;

    document.querySelectorAll(".filter").forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });

    renderProducts();
  });
});

$("#searchInput").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  renderProducts();
});

$("#sortSelect").addEventListener("change", (event) => {
  sortOrder = event.target.value;
  renderProducts();
});

$("#resetFilters").addEventListener("click", () => {
  category = "all";
  searchTerm = "";
  sortOrder = "featured";

  $("#searchInput").value = "";
  $("#sortSelect").value = "featured";

  document.querySelectorAll(".filter").forEach((button) => {
    const active = button.dataset.category === "all";
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderProducts();
});

// DETALHES DO PRODUTO
function renderProductDetails() {
  const product = products.find((entry) => entry.id === selectedProductId);
  if (!product) return;

  $("#productDetails").innerHTML = `
    <div class="product-detail-grid">
      <img
        class="detail-image"
        src="${product.image}"
        alt="${t("galleryAlt")}: ${product.name[language]}"
      >

      <div class="detail-copy">
        <p class="eyebrow">${t(product.category)}</p>
        <h2 id="productDialogTitle">${product.name[language]}</h2>
        <p class="detail-price">${money(product.price)}</p>
        <p class="detail-description">${product.description[language]}</p>

        <label for="variantSelect">
          <span>${t("variant")}</span>
          <select id="variantSelect">
            ${product.variants.map((variant) => `
              <option
                value="${variant}"
                ${selectedVariant === variant ? "selected" : ""}
              >${t(variant)}</option>
            `).join("")}
          </select>
        </label>

        <button class="button button-blue" id="addToCart">
          ${t("addToBag")} +
        </button>

        <p class="detail-note">
          ${t("detailNote")} ${t("currencyNote")}
        </p>
      </div>
    </div>
  `;

  $("#variantSelect").addEventListener("change", (event) => {
    selectedVariant = event.target.value;
  });

  $("#addToCart").addEventListener("click", () => {
    addToCart(product.id, selectedVariant);
  });
}

// CARRINHO
function addToCart(id, variant) {
  const product = products.find((entry) => entry.id === id);
  if (!product || !product.variants.includes(variant)) return;

  const item = cart.find(
    (entry) => entry.id === id && entry.variant === variant
  );

  if (item && item.quantity >= 10) {
    showToast(t("maxQuantity"));
    return;
  }

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id, variant, quantity: 1 });
  }

  saveCart();
  showToast(t("added"));
}

function saveCart() {
  writeStorage("formaCart", cart);
  renderCart();
}

function cartTotals() {
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  const shipping = subtotal === 0 || subtotal >= 600 ? 0 : 25;

  return { subtotal, shipping, total: subtotal + shipping };
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartCount").textContent = count;

  $("#cartButton").setAttribute(
    "aria-label",
    `${t("bag")}: ${count} ${t(count === 1 ? "item" : "items")}`
  );

  $("#cartSummary").hidden = cart.length === 0;

  if (!cart.length) {
    $("#cartItems").innerHTML = `
      <div class="cart-empty">
        <p>${t("cartEmpty")}</p>
        <button class="button button-dark" data-close="cartDialog">
          ${t("keepExploring")}
        </button>
      </div>
    `;
  } else {
    $("#cartItems").innerHTML = cart.map((item) => {
      const product = products.find((entry) => entry.id === item.id);

      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.name[language]}">
          <div>
            <h3>${product.name[language]}</h3>
            <p class="cart-item-variant">${t(item.variant)}</p>
            <p class="cart-item-price">${money(product.price * item.quantity)}</p>

            <div class="cart-item-controls">
              <div class="quantity-control">
                <button
                  data-action="decrease"
                  data-id="${item.id}"
                  data-variant="${item.variant}"
                  aria-label="${t("decrease")}: ${product.name[language]}"
                >−</button>

                <span>${item.quantity}</span>

                <button
                  data-action="increase"
                  data-id="${item.id}"
                  data-variant="${item.variant}"
                  aria-label="${t("increase")}: ${product.name[language]}"
                >+</button>
              </div>

              <button
                class="remove-button"
                data-action="remove"
                data-id="${item.id}"
                data-variant="${item.variant}"
                aria-label="${t("remove")}: ${product.name[language]}, ${t(item.variant)}"
              >${t("remove")}</button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  const totals = cartTotals();
  $("#subtotal").textContent = money(totals.subtotal);
  $("#shipping").textContent = totals.shipping ? money(totals.shipping) : t("free");
  $("#total").textContent = money(totals.total);
  $("#checkoutTotal").textContent = money(totals.total);
}

$("#cartItems").addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const { id, variant, action } = button.dataset;
  const item = cart.find(
    (entry) => entry.id === id && entry.variant === variant
  );

  if (!item) return;

  if (action === "increase") {
    if (item.quantity >= 10) {
      showToast(t("maxQuantity"));
      return;
    }
    item.quantity += 1;
  }

  if (action === "decrease") item.quantity -= 1;

  if (action === "remove" || item.quantity === 0) {
    cart = cart.filter((entry) => entry !== item);
    showToast(t("removed"));
  }

  saveCart();

  // Recupera o foco após recriar os controles do carrinho.
  const replacement = [...$("#cartItems").querySelectorAll("[data-action]")]
    .find((control) =>
      control.dataset.id === id &&
      control.dataset.variant === variant &&
      control.dataset.action === action
    );

  if (replacement) replacement.focus();
  else cartDialog.querySelector(".close-button").focus();
});

$("#cartButton").addEventListener("click", () => {
  renderCart();
  openDialog(cartDialog);
});

// MODAIS: dialog oferece foco contido e fechamento com Escape.
function openDialog(dialog) {
  dialog.showModal();
  document.body.classList.add("modal-open");
}

function closeDialog(dialog) {
  dialog.close();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-close]");
  if (!button) return;

  const dialog = document.getElementById(button.dataset.close);
  if (dialog instanceof HTMLDialogElement) closeDialog(dialog);
});

[productDialog, cartDialog, checkoutDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;

    const bounds = dialog.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (outside) closeDialog(dialog);
  });

  dialog.addEventListener("close", () => {
    const anyOpen = document.querySelector("dialog[open]");
    document.body.classList.toggle("modal-open", Boolean(anyOpen));

    if (dialog.contains(toast)) {
      document.body.appendChild(toast);
      toast.classList.remove("visible");
    }
  });
});

// CHECKOUT LOCAL: SEM API, SEM PAGAMENTO, SEM SALVAR DADOS PESSOAIS.
$("#checkoutButton").addEventListener("click", () => {
  if (!cart.length) return;

  $("#checkoutContent").hidden = false;
  $("#successContent").hidden = true;
  checkoutDialog.setAttribute("aria-labelledby", "checkoutTitle");
  $("#checkoutForm").reset();
  $("#checkoutTotal").textContent = money(cartTotals().total);

  closeDialog(cartDialog);
  openDialog(checkoutDialog);
});

$("#checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!cart.length || !event.currentTarget.reportValidity()) return;

  // Os valores do formulário não são enviados ou persistidos.
  event.currentTarget.reset();
  cart = [];
  saveCart();

  $("#checkoutContent").hidden = true;
  $("#successContent").hidden = false;
  checkoutDialog.setAttribute("aria-labelledby", "successTitle");

  $("#successContent button").focus();
});

// AVISOS
function showToast(message) {
  clearTimeout(toastTimeout);

  // Um elemento dentro do dialog fica na mesma camada visual do modal.
  const openModal = document.querySelector("dialog[open]");
  (openModal || document.body).appendChild(toast);

  toast.textContent = message;
  toast.classList.add("visible");

  toastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2400);
}

// INICIALIZAÇÃO
$("#year").textContent = new Date().getFullYear();
applyLanguage();