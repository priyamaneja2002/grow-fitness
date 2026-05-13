type FlipTextProps = {
  text: string;
  className?: string;
};

const FlipText = ({ text, className = "" }: FlipTextProps) => {
  return (
    <span className={`relative inline-grid h-[1.2em] place-items-center overflow-hidden align-middle leading-none ${className}`}>
      <span
        aria-hidden="true"
        className="flex flex-col items-center transition-transform duration-300 ease-out will-change-transform group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2"
      >
        <span className="flex h-[1.2em] items-center leading-none">{text}</span>
        <span className="flex h-[1.2em] items-center leading-none">{text}</span>
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
};

export default FlipText;
