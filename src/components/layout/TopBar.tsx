export function TopBar() {
  return (
    <div className="border-b border-flat-border bg-flat-bg text-[12px] text-flat-muted py-2 hidden md:block">
      <div className="max-w-[1500px] mx-auto px-8 flex justify-between items-center">
        <div className="flex gap-6">
          <a href="#" className="hover:text-flat-text transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-flat-text transition-colors">
            Store Locator
          </a>
          <a href="#" className="hover:text-flat-text transition-colors">
            Track Order
          </a>
          <a href="#" className="hover:text-flat-text transition-colors">
            Shipping
          </a>
        </div>
        <div className="flex gap-6 items-center">
          <span className="cursor-pointer hover:text-flat-text transition-colors">
            USD ▾
          </span>
          <span className="cursor-pointer hover:text-flat-text transition-colors">
            English ▾
          </span>
          <a href="#" className="hover:text-flat-text transition-colors">
            Need help? +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
}

