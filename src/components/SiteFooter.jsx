import React from 'react'

export default function SiteFooter() {
  return (
    <footer
      data-site-footer="1"
      className="border-t border-[var(--border-soft)] bg-[var(--bg)] py-[2.25rem]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/site-logo.png" alt="Redditera" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              Helping brands build authentic communities and drive sustainable growth through strategic Reddit marketing.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-wider mb-6">Product</p>
            <ul className="space-y-6 text-sm text-[var(--text-muted)]">
              <li>Services</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Case Studies</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-wider mb-6">Company</p>
            <ul className="space-y-6 text-sm text-[var(--text-muted)]">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-wider mb-6">Legal</p>
            <ul className="space-y-6 text-sm text-[var(--text-muted)]">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        <p className="font-mono text-xs text-[var(--text-dim)] mt-6">© 2026 Redditera. All rights reserved.</p>
      </div>
    </footer>
  )
}

