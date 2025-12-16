import React from "react";
import { SocialBlock } from "../types";
import { Share2 } from "lucide-react";

interface SocialBlockComponentProps {
  block: SocialBlock;
  isSelected: boolean;
}

export const SocialBlockComponent: React.FC<SocialBlockComponentProps> = ({
  block,
  isSelected,
}) => {
  const iconSize =
    block.size === "small" ? 20 : block.size === "medium" ? 32 : 48;

  return (
    <div
      className={`relative p-4 transition-all ${
        isSelected ? "ring-2 ring-valasys-orange" : ""
      }`}
    >
      <div style={{ textAlign: block.alignment as any }}>
        <div className="flex gap-4 justify-center">
          {block.platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              title={platform.name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: iconSize,
                height: iconSize,
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
                textDecoration: "none",
              }}
            >
              <Share2 className="w-4 h-4 text-valasys-orange" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
