import "./Footer.css";

type Props = {
  text?: string;
  links?: { href: string; label: string }[];
};

export default function Footer({
  text = `© ${new Date().getFullYear()} Lakshmi's App`,
  links = [
    { href: "https://www.linkedin.com/in/lakshmi-girija-dhulipati/", label: "LinkedIn" },
    { href: "https://github.com/girija2020", label: "Github" },
  ],
}: Props) {
  return (
    <footer
      className="floating-footer"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="floating-footer__inner">
        <span className="floating-footer__text">{text}</span>

        <nav className="floating-footer__links" aria-label="Footer links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="floating-footer__link">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
