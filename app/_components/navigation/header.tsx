import DesktopHeaderBar from "./header/desktop-header-bar";
import MobileHeaderBar from "./header/mobile-header-bar";

interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
  return (
    <header
      className={`w-full sticky top-0  border-b-4 border-white drop-shadow-sm mb-12 z-20 tabletLarge:sticky tabletLarge:-top-[63px] bg-blue ${cssClasses}`}
    >
      <div className="max-w-[1400px] h-full bg-[url('/assets/roof-texture.webp')] bg-cover bg-center px-5 tabletLarge:px-10 desktop:mx-auto desktop:px-0">
        <MobileHeaderBar cssClasses="tabletLarge:hidden" />
        <DesktopHeaderBar cssClasses="hidden tabletLarge:flex" />
      </div>
    </header>
  );
};

export default Header;
