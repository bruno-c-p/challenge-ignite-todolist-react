import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-zinc-900 pt-16 pb-20 flex justify-center gap-3">
      <Logo />
      <h1 className="text-4xl font-black text-violet-500">todo</h1>
    </header>
  );
};

export default Header;
