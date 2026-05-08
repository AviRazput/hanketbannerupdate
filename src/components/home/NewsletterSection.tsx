export function NewsletterSection() {
  return (
    <section className="relative py-24 px-8 border-t border-flat-border overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105"
        style={{
          backgroundImage:
            "url('https://woodmart.xtemos.com/wp-content/uploads/2024/02/fashion-flat-slide-1.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-2xl mx-auto text-center z-10 py-12">
        <h2 className="mb-4 text-white text-[2.5rem] leading-tight">
          Hi there, sign up and connect to HANKET!
        </h2>
        <p className="text-white/80 mb-8 text-[15px]">
          Be the first to learn about our latest trends and get exclusive offers.
        </p>

        <form className="flex flex-col sm:flex-row gap-0 bg-white">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 text-sm outline-none text-flat-text bg-transparent"
            required
          />
          <button type="submit" className="btn-flat border-none">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

