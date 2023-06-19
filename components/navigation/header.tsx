import DesktopHeaderBar from "./header/desktop-header-bar";
import MobileHeaderBar from "./header/mobile-header-bar";

interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
  return (
    <header
      className={`w-full relative bg-[url('/roof-texture.png')] bg-cover bg-center border-b-4 border-white drop-shadow-sm mb-12 z-20 tabletLarge:sticky tabletLarge:top-0 ${cssClasses}`}
    >
      <div className="max-w-[1400px] h-full px-5 tabletLarge:px-10 desktop:mx-auto desktop:px-0">
        <MobileHeaderBar cssClasses="tabletLarge:hidden" />
        <DesktopHeaderBar cssClasses="hidden tabletLarge:flex" />
      </div>
    </header>
  );
};

export default Header;
