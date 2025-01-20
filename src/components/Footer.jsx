import React from 'react';

export function Footer() {
  return (
    <footer className="bg-primary bg-black text-white text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div>
            <a href="/about" className="hover:underline">About Us</a>
          </div>
          <div>
            <a href="/socials" className="hover:underline">Socials</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
