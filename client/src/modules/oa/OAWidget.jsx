import { useState, useEffect } from "react";

import GlassCard from "../../components/common/GlassCard";

import OARow from "./OARow";
import oaService from "../../services/oaService";

import {
  Clock3,
  Plus,
  X,
} from "lucide-react";

const OAWidget = () => {
  const [oaDeadlines, setOADeadlines] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [open, setOpen] =
    useState(false);

  const [company, setCompany] =
    useState("");

  const [deadline, setDeadline] =
    useState("");

  useEffect(() => {
    const fetchDeadlines =
      async () => {
        try {
          const data =
            await oaService.getOADeadlines();

          setOADeadlines(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchDeadlines();
  }, []);

  const handleAddOA =
    async () => {
      if (!company.trim()) return;

      try {
        const oa =
          await oaService.createOADeadline(
            {
              company,
              deadline,
              status: "Pending",
            }
          );

        setOADeadlines((prev) => [
          oa,
          ...prev,
        ]);

        setCompany("");
        setDeadline("");

        setOpen(false);
      } catch (error) {
        console.error(error);
      }
    };

  const handleStatusChange =
    async (id, status) => {
      try {
        const updated =
          await oaService.updateOADeadline(
            id,
            status
          );

        setOADeadlines((prev) =>
          prev.map((oa) =>
            oa._id === id
              ? updated
              : oa
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

  const handleDeleteOA =
    async (id) => {
      try {
        await oaService.deleteOADeadline(
          id
        );

        setOADeadlines((prev) =>
          prev.filter(
            (oa) => oa._id !== id
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
        from-[#fff0e1]
        via-[#fff7ed]
        to-[#fffdf8]
        "
        className="
          col-span-4
          row-span-2
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
              oa deadlines
            </p>

            <div className="flex items-end gap-3">
              <h2
                className="
                  text-5xl
                  font-black
                  tracking-[-0.04em]
                "
              >
                {oaDeadlines.length}
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
                active
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
            oaDeadlines.map((oa) => (
              <OARow
                key={oa._id}
                id={oa._id}
                company={oa.company}
                deadline={oa.deadline}
                status={oa.status}
                onStatusChange={
                  handleStatusChange
                }
                onDelete={
                  handleDeleteOA
                }
              />
            ))
          )}

          {!loading &&
            oaDeadlines.length ===
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
                  <Clock3
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
                  no oa deadlines
                </h3>

                <p className="text-sm text-black/40">
                  add upcoming online
                  assessments here.
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
                new oa deadline
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
                placeholder="Company"
                value={company}
                onChange={(e) =>
                  setCompany(
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
                type="date"
                value={deadline}
                onChange={(e) =>
                  setDeadline(
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
            </div>

            <button
              onClick={handleAddOA}
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
              add deadline
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OAWidget;