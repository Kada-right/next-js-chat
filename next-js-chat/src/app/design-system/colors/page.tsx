import { colors } from "./color-styles";

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
