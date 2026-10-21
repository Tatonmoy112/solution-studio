"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomSelectProps {
  id: string;
  label?: string;
  placeholder?: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
  error?: string;
  disabled?: boolean;
}

export default function CustomSelect({
  id,
  label,
  placeholder = "Select an option",
  options,
  value,
  onChange,
  icon,
  error,
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      if (!isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
    }
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
  };

  return (
    <div className="space-y-1.5 relative" ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-semibold text-[#181a18]"
        >
          {label}
        </label>
      )}

      {/* Select Trigger Box */}
      <div className="relative">
        <button
          id={id}
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen((prev) => !prev)}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className={cn(
            "w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-base sm:text-sm text-left flex items-center justify-between gap-2 transition-all duration-200 cursor-pointer outline-none",
            "bg-neutral-50/50 hover:bg-neutral-50",
            isOpen
              ? "border-[#013AFF] ring-2 ring-[#013AFF]/20 bg-white shadow-xs"
              : error
              ? "border-red-500 bg-red-50/20"
              : "border-black/10 hover:border-black/20 focus-visible:border-[#013AFF] focus-visible:ring-2 focus-visible:ring-[#013AFF]/20",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            {icon && (
              <span className="text-[#013AFF] shrink-0 opacity-80">{icon}</span>
            )}
            <span
              className={cn(
                "block truncate",
                value ? "font-medium text-[#111311]" : "text-[#889088]"
              )}
            >
              {value || placeholder}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 text-[#6e766e]">
            {value && !disabled && (
              <span
                role="button"
                tabIndex={0}
                onClick={handleClear}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onChange("");
                  }
                }}
                title="Clear selection"
                className="w-5 h-5 rounded-full hover:bg-black/8 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={13} />
              </span>
            )}
            <span
              className={cn(
                "w-5 h-5 flex items-center justify-center transition-transform duration-200",
                isOpen && "rotate-180 text-[#013AFF]"
              )}
            >
              <ChevronDown size={16} />
            </span>
          </div>
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-white/95 backdrop-blur-xl border border-black/10 rounded-2xl shadow-xl shadow-black/10 overflow-hidden p-1.5 max-h-64 overflow-y-auto"
              role="listbox"
              aria-label={label || placeholder}
            >
              <div className="space-y-0.5">
                {options.map((option) => {
                  const isSelected = value === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(option)}
                      className={cn(
                        "w-full px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm flex items-center justify-between gap-3 cursor-pointer transition-all duration-150",
                        isSelected
                          ? "bg-[#013AFF] text-white font-semibold shadow-xs"
                          : "text-[#222622] hover:bg-[#013AFF]/10 hover:text-[#013AFF]"
                      )}
                    >
                      <span className="truncate">{option}</span>
                      {isSelected && (
                        <Check size={15} className="shrink-0 text-white" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
}

