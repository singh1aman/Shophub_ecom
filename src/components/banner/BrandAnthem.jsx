const BrandAnthem = () => {
  const text = "ALL YOUR ESSENTIALS, ELEVATED";

  return (
    <div className="anthem-wrapper w-full bg-white py-4">
      <style>
        {`
          .anthem-letter {
            display: inline-block;
            font-size: clamp(1rem, 2vw, 2rem);
            font-weight: 600;
            letter-spacing: 0.35em;
            color: #0f0f0f;
            opacity: 0;
            transform: translateY(8px);
            animation: anthem-reveal 0.15s ease-out forwards;
          }
          @keyframes anthem-reveal {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div
        className="mx-auto flex max-w-6xl flex-wrap justify-center px-6 text-center"
        aria-label={text}
        role="heading"
        aria-level={1}
      >
        {text.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="anthem-letter"
            style={{ animationDelay: `${index * 0.05}s` }}
            aria-hidden="true"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandAnthem;
