export default function DashboardLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section className="flex px-[4%] pt-28 pb-[50px] min-h-[calc(100vh_-_51px)]">
      <div className="md:container md:mx-auto px-5">
        {children}
      </div>
    </section>
  );
}