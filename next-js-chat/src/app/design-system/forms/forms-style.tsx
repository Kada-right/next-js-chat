export const formElements = [
    {
      name: "Text Input",
      description: "A standard text input field for user input.",
      exampleContent: (
        <input
          type="text"
          placeholder="Enter text"
          className="
            w-full px-4 py-2 
            border border-gray-300 
            rounded-md 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500
          "
        />
      ),
      usageCode: `<input
    type="text"
    placeholder="Enter text"
    className="
      w-full px-4 py-2 
      border border-gray-300 
      rounded-md 
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-500
    "
  />`,
    },
    {
      name: "Password Input",
      description: "An input field for entering secure password data.",
      exampleContent: (
        <input
          type="password"
          placeholder="Enter password"
          className="
            w-full px-4 py-2 
            border border-gray-300 
            rounded-md 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500
          "
        />
      ),
      usageCode: `<input
    type="password"
    placeholder="Enter password"
    className="
      w-full px-4 py-2 
      border border-gray-300 
      rounded-md 
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-500
    "
  />`,
    },
    {
      name: "Submit Button",
      description: "A button for submitting forms or triggering actions.",
      exampleContent: (
        <button
          className="
            bg-blue-500 
            hover:bg-blue-600 
            text-white 
            font-semibold 
            py-2 px-4 
            rounded-md 
            transition-transform 
            transform 
            hover:scale-105
          "
        >
          Submit
        </button>
      ),
      usageCode: `<button
    className="
      bg-blue-500 
      hover:bg-blue-600 
      text-white 
      font-semibold 
      py-2 px-4 
      rounded-md 
      transition-transform 
      transform 
      hover:scale-105
    "
  >
    Submit
  </button>`,
    },
  ];
  