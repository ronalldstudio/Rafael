import { clsx } from "clsx";
import { PHONE } from "@/lib/constants";

interface PhoneLinkProps {
  phone?: string;
  className?: string;
  showIcon?: boolean;
}

export default function PhoneLink({
  phone = PHONE,
  className,
  showIcon = true,
}: PhoneLinkProps) {
  const digits = phone.replace(/\D/g, "");
  return (
    <a
      href={`tel:+1${digits}`}
      className={clsx(
        "inline-flex items-center gap-2 font-display font-bold transition-colors hover:text-orange-light",
        className
      )}
      aria-label={`Call us at ${phone}`}
    >
      {showIcon && (
        <svg
          className="h-4 w-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      )}
      {phone}
    </a>
  );
}
