/**
 * Dual-tone "WhatBroke" wordmark for body prose. "What" inherits
 * the surrounding text color (navy on light bg, white on dark);
 * "Broke" is the brand orange — matches the logo treatment.
 */
export function BrandMark() {
  return (
    <span className="brand">
      What<span className="brand-broke">Broke</span>
    </span>
  );
}
