const layouts = [
  {
    name: "Centered Layout",
    className: "flex items-center justify-center h-40 border border-gray-300 rounded-lg",
    description:
      "A layout that centers its content both horizontally and vertically. Typically used for single-component pages.",
    exampleContent: "This is a centered layout",
  },
  {
    name: "Two-Column Layout",
    className: "grid grid-cols-2 gap-4",
    description:
      "A two-column grid layout, used for pages where content is split into two main sections.",
    exampleContent: (
      <>
        <div className="bg-gray-200 p-4 rounded-md">Column 1</div>
        <div className="bg-gray-200 p-4 rounded-md">Column 2</div>
      </>
    ),
  },
  {
    name: "Full-Width Layout",
    className: "w-full bg-gray-100 p-4",
    description:
      "A layout that spans the full width of the viewport, often used for headers or footers.",
    exampleContent: "This is a full-width layout",
  },
  {
    name: "Card Layout",
    className: "p-4 border border-gray-300 rounded-lg shadow-md",
    description:
      "A layout for individual content cards, used to group related information.",
    exampleContent: "This is a card layout",
  },
];

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
