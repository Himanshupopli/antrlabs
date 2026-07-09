interface WorkLogoHeadingProps {
  label: string;
  logoUrl: string;
}

export default function WorkLogoHeading({ label, logoUrl }: WorkLogoHeadingProps) {
  return (
    <>
      <h1 className="sr-only">{label}</h1>
      <img
        src={logoUrl}
        alt={`${label} logo`}
        loading="eager"
        className="h-20 sm:h-28 lg:h-32 w-auto max-w-full mx-auto object-contain select-none"
      />
    </>
  );
}
