import RegularButton from "@/ui/design-system/buttons/regular-button";

export default function Page() {
  return (
    <div className="p-4">
      <section className="m-4">
        <h1 className="font-bold text-5xl">Button</h1>
        <p className="py-2">
          Buttons express what action will occur when the user clicks or touches
          it. Buttons are used to initialize an action, either in the background
          or foreground of an experience.
        </p>
      </section>

      <section className="m-4">
        <h2 className="font-bold text-3xl">Usage</h2>
        <p className="mt-2">
          To use the RegularButton in your project, import it like this:
        </p>
        <pre className="bg-gray-100 p-4 mt-2 rounded-md">
          <code className="text-normal">{`import RegularButton from '@/ui/design-system/buttons/regular-button';`}</code>
        </pre>
        <p className="mt-2">
          After importing the button, you can use it in your JSX as shown below:
        </p>
        <div className="border-2 border-blue-400 h-24 flex items-center justify-center pl-4 mt-4">
          <RegularButton name={`Click me!`} />
        </div>
        <p className="mt-4">
          You can pass a custom label to the <code>name</code> prop to define
          the buttons text. For example, you can change the button text to
          anything you like:
        </p>
        <pre className="bg-gray-100 p-4 mt-4 rounded-md">
          <code>{`<RegularButton name="Click me!" />`}</code>
        </pre>
      </section>
    </div>
  );
}
