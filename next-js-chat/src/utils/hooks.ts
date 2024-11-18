import { useState } from "react";

export type FolderSection = "foundations" | "components" | "patterns";

export function useToggleSections() {
  const [hiddenStates, setHiddenStates] = useState({
    foundations: true,
    components: true,
    patterns: true,
  });

  const toggleSection = (section: FolderSection) => {
    setHiddenStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return {
    hiddenStates,
    toggleSection,
  };
}
