import GlassCard from "../../components/common/GlassCard";
import SubjectRow from "./SubjectRow";
import subjectService from "./subjectService";

import {
  BookOpen,
  Plus,
} from "lucide-react";

import {
  useState,
  useEffect,
} from "react";

const SubjectsWidget = () => {
  const [subjects, setSubjects] =
    useState([]);

  const [name, setName] =
    useState("");

  const [credits, setCredits] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchSubjects =
      async () => {
        try {
          const data =
            await subjectService.getSubjects();

          setSubjects(data);
        } catch (error) {
          console.error(
            "Failed to fetch subjects",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    fetchSubjects();
  }, []);

  const handleAddSubject =
    async () => {
      if (!name.trim()) return;

      try {
        const newSubject =
          await subjectService.createSubject(
            {
              name,
              credits:
                Number(credits) || 4,

              attendedClasses: 0,

              totalClasses: 0,
            }
          );

        setSubjects((prev) => [
          newSubject,
          ...prev,
        ]);

        setName("");
        setCredits("");
      } catch (error) {
        console.error(
          "Failed to create subject",
          error
        );
      }
    };

  const handleDeleteSubject =
    async (id) => {
      try {
        await subjectService.deleteSubject(
          id
        );

        setSubjects((prev) =>
          prev.filter(
            (subject) =>
              subject._id !== id
          )
        );
      } catch (error) {
        console.error(
          "Failed to delete subject",
          error
        );
      }
    };

  return (
    <GlassCard
      gradient="
      from-[#fff1d6]
      via-[#ffe5b4]
      to-[#fff7e8]
      "
      className="
        col-span-3
        row-span-2
      "
    >
      <div className="flex items-center justify-between mb-6 shrink-0">
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
            subjects · sem 4
          </p>
        </div>

        <button
          className="
            h-10
            w-10

            rounded-2xl

            bg-white/25

            border border-white/30

            flex
            items-center
            justify-center

            transition-all
            duration-300

            hover:bg-white/40
            hover:scale-105

            active:scale-95
          "
        >
          <BookOpen
            size={18}
            className="text-black/40"
          />
        </button>
      </div>

      <div
        className="
          flex-1
          min-h-0

          overflow-y-auto

          pr-1
          pb-2
        "
        style={{
          scrollbarGutter: "stable",
        }}
      >
        {loading ? (
          <p className="text-sm text-black/40">
            Loading...
          </p>
        ) : (
          <div className="space-y-3">
            {subjects.map(
              (subject) => (
                <SubjectRow
                  key={subject._id}
                  id={subject._id}
                  subject={
                    subject.name
                  }
                  credits={
                    subject.credits
                  }
                  onDelete={
                    handleDeleteSubject
                  }
                />
              )
            )}
          </div>
        )}
      </div>

      <div
        className="
          mt-4
          shrink-0

          rounded-2xl

          border border-dashed
          border-[#f3d59a]

          bg-white/20

          p-2

          flex
          items-center
          gap-2
        "
      >
        <input
          type="text"
          placeholder="Subject name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="
            flex-1
            min-w-0

            h-11

            rounded-xl

            bg-white/45

            border border-white/30

            px-4

            outline-none

            text-sm
            font-medium

            placeholder:text-black/35
          "
        />

        <input
          type="number"
          placeholder="cr"
          value={credits}
          onChange={(e) =>
            setCredits(
              e.target.value
            )
          }
          className="
            w-[56px]

            h-11

            rounded-xl

            bg-white/45

            border border-white/30

            px-3

            outline-none

            text-sm
            font-semibold
          "
        />

        <button
          onClick={
            handleAddSubject
          }
          className="
            h-11
            w-11

            shrink-0

            rounded-xl

            bg-[#1c1c35]

            flex
            items-center
            justify-center

            text-white

            transition-all
            duration-300

            hover:scale-105

            active:scale-95
          "
        >
          <Plus size={18} />
        </button>
      </div>
    </GlassCard>
  );
};

export default SubjectsWidget;