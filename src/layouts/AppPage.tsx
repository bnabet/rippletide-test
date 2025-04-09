type AppPageProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function AppPage({ title, description, children }: AppPageProps) {
  return (
    <div className="flex flex-col gap-4 p-10 xl:px-20 xl:py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="text-muted-foreground text-lg text-balance">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
