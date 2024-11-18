export const layouts = [
  {
    name: "Centered Layout",
    className:
      "flex items-center justify-center h-40 border border-gray-300 rounded-lg",
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
