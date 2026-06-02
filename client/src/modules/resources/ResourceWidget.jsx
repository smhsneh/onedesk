import { useState, useEffect } from "react";

import GlassCard from "../../components/common/GlassCard";

import ResourceRow from "./ResourceRow";
import resourceService from "../../services/resourceService";

import {
  Library,
  Plus,
  X,
} from "lucide-react";

const categories = [
  "DSA",
  "Aptitude",
  "CS Fundamentals",
  "Projects",
  "Interview Prep",
  "Other",
];

const ResourceWidget = () => {
  const [resources, setResources] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [open, setOpen] =
    useState(false);

  const [title, setTitle] =
    useState("");

  const [url, setUrl] =
    useState("");

  const [category, setCategory] =
    useState("DSA");

  useEffect(() => {
    const fetchResources =
      async () => {
        try {
          const data =
            await resourceService.getResources();

          setResources(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchResources();
  }, []);

  const handleAddResource =
    async () => {
      if (
        !title.trim() ||
        !url.trim()
      )
        return;

      try {
        const resource =
          await resourceService.createResource(
            {
              title,
              url,
              category,
            }
          );

        setResources((prev) => [
          resource,
          ...prev,
        ]);

        setTitle("");
        setUrl("");
        setCategory("DSA");

        setOpen(false);
      } catch (error) {
        console.error(error);
      }
    };

  const handleDeleteResource =
    async (id) => {
      try {
        await resourceService.deleteResource(
          id
        );

        setResources((prev) =>
          prev.filter(
            (resource) =>
              resource._id !== id
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <GlassCard
        gradient="
        from-[#f0e8ff]
        via-[#f8f3ff]
        to-[#fdfaff]
        "
        className="
          col-span-8
          row-span-3
        "
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <p
              className="
                text-[13px]
                uppercase
                tracking-[0.28em]
                text-black/45
                mb-3
                font-semibold
              "
            >
              resources
            </p>

            <div className="flex items-end gap-3">
              <h2
                className="
                  text-5xl
                  font-black
                  tracking-[-0.04em]
                "
              >
                {resources.length}
              </h2>

              <span
                className="
                  mb-2
                  px-3
                  py-1
                  rounded-full
                  bg-white/40
                  text-xs
                  font-semibold
                  text-black/50
                "
              >
                saved
              </span>
            </div>
          </div>

          <button
            onClick={() =>
              setOpen(true)
            }
            className="
              h-10
              w-10

              rounded-2xl

              bg-white/25

              border border-white/30

              flex
              items-center
              justify-center

              hover:bg-white/40
              hover:scale-105

              transition-all
            "
          >
            <Plus size={18} />
          </button>
        </div>

        <div
          className="
            flex-1
            overflow-y-auto
            space-y-3
          "
        >
          {loading ? (
            <p className="text-sm text-black/40">
              Loading...
            </p>
          ) : (
            resources.map(
              (resource) => (
                <ResourceRow
                  key={
                    resource._id
                  }
                  id={
                    resource._id
                  }
                  title={
                    resource.title
                  }
                  url={
                    resource.url
                  }
                  category={
                    resource.category
                  }
                  onDelete={
                    handleDeleteResource
                  }
                />
              )
            )
          )}

          {!loading &&
            resources.length ===
              0 && (
              <div
                className="
                  h-full

                  flex
                  flex-col

                  items-center
                  justify-center

                  text-center

                  py-10
                "
              >
                <div
                  className="
                    h-16
                    w-16

                    rounded-3xl

                    bg-white/35

                    border border-white/30

                    flex
                    items-center
                    justify-center

                    mb-4
                  "
                >
                  <Library
                    size={28}
                    className="text-black/30"
                  />
                </div>

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-black/55
                    mb-2
                  "
                >
                  no resources
                </h3>

                <p className="text-sm text-black/40">
                  save useful links
                  for placement prep.
                </p>
              </div>
            )}
        </div>
      </GlassCard>

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-black/20
            backdrop-blur-md

            p-5
          "
        >
          <div
            className="
              w-full
              max-w-md

              rounded-[32px]

              bg-white/70

              border border-white/40

              backdrop-blur-3xl

              p-6
            "
          >
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-black">
                new resource
              </h2>

              <button
                onClick={() =>
                  setOpen(false)
                }
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                placeholder="Title"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-2xl
                  bg-white/40
                  border border-white/30
                  px-4
                  py-4
                "
              />

              <input
                placeholder="URL"
                value={url}
                onChange={(e) =>
                  setUrl(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-2xl
                  bg-white/40
                  border border-white/30
                  px-4
                  py-4
                "
              />

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-2xl
                  bg-white/40
                  border border-white/30
                  px-4
                  py-4
                "
              >
                {categories.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>

            <button
              onClick={
                handleAddResource
              }
              className="
                mt-6
                w-full
                rounded-2xl
                bg-black
                text-white
                py-4
                font-semibold
              "
            >
              save resource
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResourceWidget;