interface WorkLogoHeadingProps {
  label: string;
}

const ANTR_LOGO_URL = "https://lh3.googleusercontent.com/d/1hPlbGPKpGz2siX9oWEY0kBZEbfu-Wxw7";

export default function WorkLogoHeading({ label }: WorkLogoHeadingProps) {
  return (
    <>
      <h1 className="sr-only">{label}</h1>
      <img
        src={ANTR_LOGO_URL}
        alt="ANTR Labs"
        referrerPolicy="no-referrer"
        className="h-16 sm:h-24 lg:h-28 w-auto mx-auto object-contain select-none"
      />
    </>
  );
}
