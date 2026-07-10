export type MetaSnapshot = {
  el: HTMLMetaElement;
  previous: string | null;
  created: boolean;
};

export function applyMeta(
  selector: string,
  attr: "name" | "property",
  key: string,
  content: string,
): MetaSnapshot {
  let el = document.querySelector<HTMLMetaElement>(selector);
  let created = false;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
    created = true;
  }
  const previous = created ? null : el.getAttribute("content");
  el.setAttribute("content", content);
  return { el, previous, created };
}

export function restoreMeta(snap: MetaSnapshot) {
  if (snap.created) {
    snap.el.remove();
    return;
  }
  if (snap.previous === null) {
    snap.el.removeAttribute("content");
  } else {
    snap.el.setAttribute("content", snap.previous);
  }
}

export type CanonicalSnapshot = { previous: string | null };

export function applyCanonical(href: string): CanonicalSnapshot {
  const el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) return { previous: null };
  const previous = el.getAttribute("href");
  el.setAttribute("href", href);
  return { previous };
}

export function restoreCanonical(snap: CanonicalSnapshot) {
  const el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) return;
  if (snap.previous === null) el.removeAttribute("href");
  else el.setAttribute("href", snap.previous);
}

export type JsonLdSnapshot = { el: HTMLScriptElement };

export function applyJsonLd(id: string, data: unknown): JsonLdSnapshot {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.setAttribute("data-jsonld", id);
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return { el };
}

export function restoreJsonLd(snap: JsonLdSnapshot) {
  snap.el.remove();
}
