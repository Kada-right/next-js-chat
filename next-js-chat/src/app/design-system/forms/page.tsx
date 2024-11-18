import { formElements } from "./forms-style";

export default function FormsPage() {
  return (
    <>
      <section className="m-4">
        <h1 className="font-bold text-5xl">Forms</h1>
        <p className="py-2">
          Forms are essential for user input and interactivity. Below is a
          showcase of the form elements used in this project, including examples
          and usage details.
        </p>
      </section>

      <section className="m-4">
        <h2 className="font-bold text-3xl">Form Elements</h2>
        <p className="mt-2">
          Here are the form elements defined in the project along with their
          descriptions and example usage:
        </p>

        {formElements.map((element) => (
          <div key={element.name} className="border-b border-gray-300 py-4">
            <div className="p-4 bg-gray-50 rounded-md mb-4">
              {element.exampleContent}
            </div>
            <h3 className="font-semibold text-lg">{element.name}</h3>
            <p className="text-gray-600">{element.description}</p>
            <pre className="bg-gray-100 p-4 mt-2 rounded-md">
              <code>{element.usageCode}</code>
            </pre>
          </div>
        ))}
      </section>
    </>
  );
}
