interface Props {
  cssClasses?: string;
}

const Footer = ({ cssClasses }: Props) => {
  return <footer className={`${cssClasses}`}>Footer</footer>;
};

export default Footer;
