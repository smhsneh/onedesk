import GlassCard from "../../components/common/GlassCard";

import AlertRow from "./AlertRow";

import { AlertTriangle } from "lucide-react";

import { useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

import subjectService from "../subjects/subjectService";
import assignmentService from "../assignments/assignmentService";
import examService from "../exams/examService";
import attendanceService from "../attendance/attendanceService";

import applicationService from "../../services/applicationService";
import oaService from "../../services/oaService";

import {
  generateOverviewAlerts,
  generatePlacementAlerts,
} from "./overviewUtils";

const OverviewWidget = () => {
  const { user } = useAuth();

  const [alerts, setAlerts] =
    useState([]);

  useEffect(() => {
    if (user) {
      loadOverview();
    }
  }, [user]);

  const loadOverview =
    async () => {
      try {
        if (
          user?.mode ===
          "placement"
        ) {
          const [
            applications,
            oaDeadlines,
          ] =
            await Promise.all([
              applicationService.getApplications(),
              oaService.getOADeadlines(),
            ]);

          const generatedAlerts =
            generatePlacementAlerts(
              {
                applications,
                oaDeadlines,
              }
            );

          setAlerts(
            generatedAlerts
          );

          return;
        }

        const [
          assignments,
          exams,
          attendance,
          subjects,
        ] = await Promise.all([
          assignmentService.getAssignments(),
          examService.getExams(),
          attendanceService.getAll(),
          subjectService.getSubjects(),
        ]);

        const dashboardData = {
          assignments,
          exams,
          attendance,
          subjects,
        };

        const generatedAlerts =
          generateOverviewAlerts(
            dashboardData
          );

        setAlerts(
          generatedAlerts
        );
      } catch (error) {
        console.error(error);
      }
    };

  const highPriorityCount =
    alerts.filter(
      (alert) =>
        alert.priority ===
        "high"
    ).length;

  return (
    <GlassCard
      gradient="
      from-[#ffd6df]
      via-[#ffe5ec]
      to-[#fff1f4]
      "
      className="
        col-span-4
        row-span-2
      "
    >
      <div className="flex items-start justify-between mb-8 shrink-0">
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
            danger zone
          </p>

          <div className="flex items-end gap-3">
            <h2
              className="
                text-6xl
                font-black
                tracking-[-0.04em]
                leading-none
              "
            >
              {
                highPriorityCount
              }
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

          <p className="text-black/50 mt-3">
            {user?.mode ===
            "placement"
              ? "upcoming oa deadlines and application progress."
              : "upcoming submissions and exams requiring immediate attention."}
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
          "
        >
          <AlertTriangle
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
      >
        <div className="space-y-3">
          {alerts.map(
            (alert) => (
              <AlertRow
                key={alert.id}
                title={
                  alert.title
                }
                time={
                  alert.time
                }
                priority={
                  alert.priority
                }
              />
            )
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default OverviewWidget;