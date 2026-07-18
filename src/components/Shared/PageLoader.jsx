export default function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-label="Loading page"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-border border-t-brand-primary" />
    </div>
  );
}
