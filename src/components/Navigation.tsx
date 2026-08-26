import { useEffect, useState } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { navigation } from "../data/portfolio";
import { Brand } from "./Brand";

const menuId = "primary-navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className="topbar">
      <Brand onNavigate={close} />
      <button
        className="menu-button"
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
      </button>
      <nav id={menuId} className={isOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {navigation.map((item) => <a href={item.href} onClick={close} key={item.href}>{item.label}</a>)}
        <a className="nav-contact" href="#contact" onClick={close} data-goatcounter-click="nav-contact">Contact <ArrowUpRight size={16} weight="bold" aria-hidden="true" /></a>
      </nav>
    </header>
  );
}
