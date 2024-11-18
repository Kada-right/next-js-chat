import { layouts } from "./layout-styles";

export default function LayoutsPage() {
  return (
    <>
      <section className="m-4">
        <h1 className="font-bold text-5xl">Layouts</h1>
        <p className="py-2">
          Layouts define the structure of a page or component. Below are examples
          of the layouts used in this project, along with descriptions and
          implementation details.
        </p>
      </section>

      <section className="m-4">
        <h2 className="font-bold text-3xl">Layout Examples</h2>
        <p className="mt-2">
          Here are the layout styles defined in the project along with their descriptions and example usage:
        </p>

        {layouts.map((layout) => (
          <div key={layout.name} className="border-b border-gray-300 py-4">
            <div
              className={`p-4 bg-gray-50 rounded-md mb-4 ${layout.className}`}
              style={{ height: layout.name === "Centered Layout" ? "160px" : "auto" }}
            >
              {layout.exampleContent}
            </div>
            <h3 className="font-semibold text-lg">{layout.name}</h3>
            <p className="text-gray-600">{layout.description}</p>
            <pre className="bg-gray-100 p-4 mt-2 rounded-md">
              <code>{`<div className="${layout.className}">...</div>`}</code>
            </pre>
          </div>
        ))}
      </section>
    </>
  );
}
