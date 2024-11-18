const colors = [
  {
    name: "Gray 100",
    className: "bg-gray-100",
    description: "A light gray background color often used for soft backgrounds.",
  },
  {
    name: "Slate 500",
    className: "bg-slate-500",
    description: "A medium slate color often used in gradients or subtle highlights.",
  },
  {
    name: "Blue 500",
    className: "bg-blue-500",
    description: "A vibrant blue color frequently used for primary actions or focus highlights.",
  },
  {
    name: "Slate 400",
    className: "bg-slate-400",
    description: "A muted slate color ideal for secondary elements or subtle borders.",
  },
];

export default function ColorsPage() {
  return (
    <>
      <section className="m-4">
        <h1 className="font-bold text-5xl">Colors</h1>
        <p className="py-2">
          Below is a collection of the colors used in the project. Each color is described by its name, usage, and appearance.
        </p>
      </section>

      <section className="m-4">
        <h2 className="font-bold text-3xl">Color Palette</h2>
        <p className="mt-2">
          Here are the colors defined in the project along with their descriptions and example usage:
        </p>

        {colors.map((color) => (
          <div
            key={color.name}
            className="flex items-center border-b border-gray-300 py-4"
          >
            <div
              className={`w-12 h-12 rounded-full ${color.className} mr-4`}
              title={color.name}
            ></div>
            <div>
              <h3 className="font-semibold text-lg">{color.name}</h3>
              <p className="text-gray-600">{color.description}</p>
              <pre className="bg-gray-100 p-2 mt-2 rounded-md">
                <code>{`<div className="${color.className}"></div>`}</code>
              </pre>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
