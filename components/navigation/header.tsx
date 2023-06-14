interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
  return <header className={`${cssClasses}`}>Header</header>;
};

export default Header;
