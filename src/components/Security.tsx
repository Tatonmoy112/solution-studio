"use client";

import { useEffect } from "react";

export function Security() {
  useEffect(() => {
    // Prevent right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent common developer tools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Ctrl+Shift+I, J, C (Windows/Linux)
      if (e.ctrlKey && e.shiftKey && (key === "i" || key === "j" || key === "c")) {
        e.preventDefault();
      }

      // Cmd+Option+I, J, C, U (Mac)
      if (e.metaKey && e.altKey && (key === "i" || key === "j" || key === "c" || key === "u")) {
        e.preventDefault();
      }

      // Ctrl+U (Windows/Linux) - View Source
      if (e.ctrlKey && key === "u") {
        e.preventDefault();
      }
      
      // Save As (Ctrl+S / Cmd+S)
      if ((e.ctrlKey || e.metaKey) && key === "s") {
        e.preventDefault();
      }
      
      // Print (Ctrl+P / Cmd+P)
      if ((e.ctrlKey || e.metaKey) && key === "p") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
