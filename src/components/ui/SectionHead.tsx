interface SectionHeadProps {
  eyebrow: string;
  title: string;
  helper?: string;
  id?: string;
}

export default function SectionHead({ eyebrow, title, helper, id }: SectionHeadProps) {
  return (
    <header className="mb-10">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 id={id} className="display text-[2rem] sm:text-4xl">
        {title}
      </h2>
      {helper ? <p className="prose-soft mt-4 text-[0.9375rem]">{helper}</p> : null}
    </header>
  );
}
