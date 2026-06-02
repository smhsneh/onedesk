import {
  Trash2,
  ExternalLink,
} from "lucide-react";

const ResourceRow = ({
  id,
  title,
  url,
  category,
  onDelete,
}) => {
  const safeUrl =
    url?.startsWith("http")
      ? url
      : `https://${url}`;

  return (
    <div
      className="
        rounded-2xl
        bg-white/40
        border border-white/30
        p-4

        transition-all
        duration-300

        hover:bg-white/50
      "
    >
      <div className="flex items-center justify-between gap-3">
        {/* left */}
        <div className="min-w-0 flex-1">
          <h3
            className="
              font-semibold
              text-black/75
              truncate
            "
          >
            {title}
          </h3>

          <p
            className="
              text-xs
              text-black/45
            "
          >
            {category}
          </p>
        </div>

        {/* open link */}
        <a
          href={safeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            h-9
            w-9

            rounded-xl

            bg-white/30

            border border-white/30

            flex
            items-center
            justify-center

            shrink-0

            transition-all
            duration-300

            hover:bg-[#d6f6ff]
          "
        >
          <ExternalLink
            size={15}
            className="text-black/45"
          />
        </a>

        {/* delete */}
        <button
          onClick={() =>
            onDelete(id)
          }
          className="
            h-9
            w-9

            rounded-xl

            bg-white/30

            border border-white/30

            flex
            items-center
            justify-center

            shrink-0

            transition-all
            duration-300

            hover:bg-[#ffd6df]
          "
        >
          <Trash2
            size={15}
            className="text-black/45"
          />
        </button>
      </div>
    </div>
  );
};

export default ResourceRow;