const typographyStyles = [
  {
    name: "Heading 1 (h1)",
    className: "text-5xl font-bold",
    description: "The largest heading, typically used for page titles.",
    exampleText: "This is a Heading 1",
  },
  {
    name: "Heading 2 (h2)",
    className: "text-3xl font-bold",
    description: "A smaller heading, used for section titles.",
    exampleText: "This is a Heading 2",
  },
  {
    name: "Body Text",
    className: "text-base text-gray-700",
    description: "The standard body text style used for most paragraphs.",
    exampleText: "This is body text, styled for readability and simplicity.",
  },
  {
    name: "Small Text",
    className: "text-sm text-gray-500",
    description: "Smaller text, often used for captions or secondary information.",
    exampleText: "This is small text, subtle and less prominent.",
  },
];
export default function TypographyPage() {
  return (
    <>
      <section className="m-4">
        <h1 className="font-bold text-5xl">Typography</h1>
        <p className="py-2">
          Typography is a key aspect of design. Below is a showcase of the
          typography styles used in this project, including examples and usage
          details.
        </p>
      </section>

      <section className="m-4">
        <h2 className="font-bold text-3xl">Typography Styles</h2>
        <p className="mt-2">
          Here are the typography styles defined in the project along with their descriptions and example usage:
        </p>

        {typographyStyles.map((style) => (
          <div key={style.name} className="border-b border-gray-300 py-4">
            <div className={`p-4 bg-gray-50 rounded-md mb-4 ${style.className}`}>
              {style.exampleText}
            </div>
            <h3 className="font-semibold text-lg">{style.name}</h3>
            <p className="text-gray-600">{style.description}</p>
            <pre className="bg-gray-100 p-4 mt-2 rounded-md">
              <code>{`<div className="${style.className}">${style.exampleText}</div>`}</code>
            </pre>
          </div>
        ))}
      </section>
    </>
  );
}
