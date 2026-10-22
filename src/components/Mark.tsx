export function Mark({ className = "mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <path d="M6 9h6.2l7.8 17.4L27.8 9H34L22.6 33h-5.2z" />
      <ellipse cx="20" cy="36.5" rx="9" ry="1.6" opacity="0.25" />
    </svg>
  );
}
