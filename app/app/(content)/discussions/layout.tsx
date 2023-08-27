export default function ContentLayout({
  children,
  createDiscussion,
}: {
  children: React.ReactNode;
  createDiscussion: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-end">{createDiscussion}</div>
      <div className="mt-4">{children}</div>
    </>
  );
}
