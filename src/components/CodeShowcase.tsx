import { useRef, useState, type KeyboardEvent } from "react";

type TokenTone = "comment" | "keyword" | "string";

interface CodeToken {
  text: string;
  tone?: TokenTone;
}

interface CodeExample {
  id: string;
  label: string;
  lines: readonly (readonly CodeToken[])[];
}

const token = (text: string, tone?: TokenTone): CodeToken => ({ text, tone });

const examples = [
  {
    id: "typescript",
    label: "TypeScript",
    lines: [
      [token("// engineer. builder. problem solver.", "comment")],
      [token("type", "keyword"), token(" Focus = Readonly<{")],
      [token("  reliability: boolean;")],
      [token("  scalability: boolean;")],
      [token("  maintainability: boolean;")],
      [token("}>;")],
      [],
      [token("export const", "keyword"), token(" newImpact = (): string =>")],
      [token("  \"Systems people can depend on.\";", "string")],
    ],
  },
  {
    id: "go",
    label: "Go",
    lines: [
      [token("// engineer. builder. problem solver.", "comment")],
      [token("package", "keyword"), token(" renaldi")],
      [],
      [token("type", "keyword"), token(" Focus struct {")],
      [token("    Reliability     string")],
      [token("    Scalability     string")],
      [token("    Maintainability string")],
      [token("}")],
      [],
      [token("func", "keyword"), token(" NewImpact() string {")],
      [token("    return", "keyword"), token(" \"Systems people can depend on.\"", "string")],
      [token("}")],
    ],
  },
  {
    id: "kotlin",
    label: "Kotlin",
    lines: [
      [token("// engineer. builder. problem solver.", "comment")],
      [token("package", "keyword"), token(" dev.renaldi")],
      [],
      [token("data class", "keyword"), token(" Focus(")],
      [token("    val", "keyword"), token(" reliability: Boolean,")],
      [token("    val", "keyword"), token(" scalability: Boolean,")],
      [token("    val", "keyword"), token(" maintainability: Boolean,")],
      [token(")")],
      [],
      [token("fun", "keyword"), token(" newImpact(): String =")],
      [token("    \"Systems people can depend on.\"", "string")],
    ],
  },
  {
    id: "dart",
    label: "Dart / Flutter",
    lines: [
      [token("// engineer. builder. problem solver.", "comment")],
      [token("class", "keyword"), token(" Focus {")],
      [token("    const", "keyword"), token(" Focus({")],
      [token("        required", "keyword"), token(" this.reliability,")],
      [token("        required", "keyword"), token(" this.scalability,")],
      [token("        required", "keyword"), token(" this.maintainability,")],
      [token("    });")],
      [],
      [token("    final", "keyword"), token(" bool reliability;")],
      [token("    final", "keyword"), token(" bool scalability;")],
      [token("    final", "keyword"), token(" bool maintainability;")],
      [token("}")],
      [],
      [token("String", "keyword"), token(" newImpact() => ")],
      [token("    'Systems people can depend on.';", "string")],
    ],
  },
] as const satisfies readonly CodeExample[];

const defaultExample = examples[0];

export function CodeShowcase() {
  const [activeId, setActiveId] = useState<string>(defaultExample.id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeExample = examples.find(({ id }) => id === activeId) ?? defaultExample;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % examples.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + examples.length) % examples.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = examples.length - 1;
    if (nextIndex === undefined) return;

    const nextExample = examples[nextIndex];
    if (!nextExample) return;

    event.preventDefault();
    setActiveId(nextExample.id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="code-showcase" data-language={activeExample.id}>
      <div className="code-tabs" role="tablist" aria-label="Code examples by language">
        {examples.map((example, index) => {
          const isActive = example.id === activeExample.id;

          return (
            <button
              key={example.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              role="tab"
              id={`code-tab-${example.id}`}
              aria-controls="code-panel"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(example.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {example.label}
            </button>
          );
        })}
      </div>
      <div
        className="code-panel"
        role="tabpanel"
        id="code-panel"
        aria-labelledby={`code-tab-${activeExample.id}`}
      >
        {activeExample.lines.map((line, lineIndex) => (
          <div className={`code-line${line.length === 0 ? " blank" : ""}`} key={`${activeExample.id}-${lineIndex}`}>
            <span>{String(lineIndex + 1).padStart(2, "0")}</span>
            <code>
              {line.map((part, tokenIndex) => (
                <span className={part.tone ? `code-${part.tone}` : undefined} key={`${part.text}-${tokenIndex}`}>
                  {part.text}
                </span>
              ))}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
