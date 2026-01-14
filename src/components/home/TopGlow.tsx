interface TopGlowProp {
  children: React.ReactNode;
}
const TopGlow = ({ children }: TopGlowProp) => {
  return (
    <div className="w-full h-screen relative font-sans">
      <div className="z-20 hidden md:flex h-[200vh] w-[150vw]  rounded-t-full absolute  left-[50%] translate-x-[-50%] shadow-[0px_-5px_200.5px_-1px_rgba(248,2,2,0.7),inset_0px_-5px_150.5px_-1px_rgba(248,2,2,0.7)]"></div>
      {children}
    </div>
  );
};

export default TopGlow;
