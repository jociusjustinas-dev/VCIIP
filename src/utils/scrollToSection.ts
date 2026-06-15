const NAV_OFFSET = 96;

export function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(id);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

  if (window.lenis) {
    window.lenis.scrollTo(top, { immediate: behavior === "auto" });
    return true;
  }

  window.scrollTo({ top: Math.max(top, 0), behavior });
  return true;
}

export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  return scrollToSection(id, behavior);
}
