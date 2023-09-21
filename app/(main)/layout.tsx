type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-30 hidden h-full w-[72px] flex-col md:flex">
        {/* sidebar */}
      </div>

      <main className="h-full md:pl-[72px]">{children}</main>
    </div>
  );
};

export default MainLayout;
