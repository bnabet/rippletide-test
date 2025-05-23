import { Button } from "@/components/ui/button";

import { TodaysFocusScheduleDialog } from "./TodaysFocusScheduleDialog";

import { meetingsData } from "../data/data";
import { getDuration } from "@/lib/utils";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionActions,
  SectionContent,
} from "@/components/Section/Section";

export function TodaysFocusSchedule() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Today's Schedule</SectionTitle>
        <SectionActions>
          <TodaysFocusScheduleDialog />
        </SectionActions>
      </SectionHeader>

      <SectionContent>
        <ul className="divide-muted divide-y">
          {meetingsData.map((meeting, idx) => (
            <li key={idx} className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-xs font-semibold">
                  <span>
                    {meeting.startTime.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                  <span className="text-muted-foreground">
                    {getDuration(meeting.startTime, meeting.endTime)}min
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-foreground text-sm font-semibold">
                    {meeting.label}
                  </p>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    {meeting.members.map((member, index) => (
                      <span key={index} className="flex items-center gap-1">
                        {member}
                        {index < meeting.members.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="link" className="text-muted-foreground">
                Join call
              </Button>
            </li>
          ))}
        </ul>
      </SectionContent>
    </Section>
  );
}
