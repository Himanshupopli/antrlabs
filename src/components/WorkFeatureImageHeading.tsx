interface WorkFeatureImageHeadingProps {
  label: string;
  imageUrl: string;
}

export default function WorkFeatureImageHeading({ label, imageUrl }: WorkFeatureImageHeadingProps) {
  return (
    <>
      <h1 className="sr-only">{label}</h1>
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-950 shadow-2xl">
        <img
          src={imageUrl}
          alt={label}
          loading="eager"
          referrerPolicy="no-referrer"
          className="w-full aspect-[16/10] object-cover"
        />
      </div>
    </>
  );
}
