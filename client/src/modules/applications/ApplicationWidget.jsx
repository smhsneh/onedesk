import { useState, useEffect } from "react";

import GlassCard from "../../components/common/GlassCard";

import ApplicationRow from "./ApplicationRow";
import applicationService from "../../services/applicationService";
import {
  Briefcase,
  Plus,
  X,
} from "lucide-react";

const ApplicationWidget = () => {
  const [applications, setApplications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [open, setOpen] =
    useState(false);

  const [company, setCompany] =
    useState("");

  const [role, setRole] =
    useState("");

  useEffect(() => {
    const fetchApplications =
      async () => {
        try {
          const data =
            await applicationService.getApplications();

          setApplications(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchApplications();
  }, []);

  const handleAddApplication =
    async () => {
      if (!company.trim()) return;

      try {
        const application =
          await applicationService.createApplication(
            {
              company,
              role,
              status: "Applied",
            }
          );

        setApplications((prev) => [
          application,
          ...prev,
        ]);

        setCompany("");
        setRole("");

        setOpen(false);
      } catch (error) {
        console.error(error);
      }
    };

  const handleStatusChange =
    async (id, status) => {
      try {
        const updated =
          await applicationService.updateApplication(
            id,
            status
          );

        setApplications((prev) =>
          prev.map((app) =>
            app._id === id
              ? updated
              : app
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

  const handleDeleteApplication =
    async (id) => {
      try {
        await applicationService.deleteApplication(
          id
        );

        setApplications((prev) =>
          prev.filter(
            (app) =>
              app._id !== id
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
        from-[#d6f6ff]
        via-[#e8fbff]
        to-[#f5fdff]
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
              applications
            </p>

            <div className="flex items-end gap-3">
              <h2
                className="
                  text-5xl
                  font-black
                  tracking-[-0.04em]
                "
              >
                {applications.length}
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

        <div className="flex-1 overflow-y-auto space-y-3">
          {loading ? (
            <p className="text-sm text-black/40">
              Loading...
            </p>
          ) : (
            applications.map(
              (application) => (
                <ApplicationRow
                  key={
                    application._id
                  }
                  id={
                    application._id
                  }
                  company={
                    application.company
                  }
                  role={
                    application.role
                  }
                  status={
                    application.status
                  }
                  onStatusChange={
                    handleStatusChange
                  }
                  onDelete={
                    handleDeleteApplication
                  }
                />
              )
            )
          )}

          {!loading &&
            applications.length ===
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
                  <Briefcase
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
                  no applications
                </h3>

                <p className="text-sm text-black/40">
                  start tracking
                  companies you're
                  applying to.
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
                new application
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
                placeholder="Role"
                value={role}
                onChange={(e) =>
                  setRole(
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
              onClick={
                handleAddApplication
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
              add application
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicationWidget;