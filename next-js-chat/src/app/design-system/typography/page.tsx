import { typographyStyles } from "./typography-styles";

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
