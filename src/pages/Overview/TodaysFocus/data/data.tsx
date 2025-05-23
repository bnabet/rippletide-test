import {
  Binoculars,
  CalendarCheck2,
  Clock,
  DollarSign,
  Headset,
  Phone,
  User,
  Users,
} from "lucide-react";

export const meetingsData = [
  {
    icon: <Phone className="text-muted-foreground size-4" />,
    label: "Product Demo - InnoTech Solutions",
    members: ["John Smith", "Sarah Chen"],
    startTime: new Date("2025-04-09T11:00:00"),
    endTime: new Date("2025-04-09T11:45:00"),
  },
  {
    icon: <Headset className="text-muted-foreground size-4" />,
    label: "Demo with Global Solutions",
    members: ["John Smith", "Sarah Chen"],
    startTime: new Date("2025-04-09T14:30:00"),
    endTime: new Date("2025-04-09T15:30:00"),
  },
];

export const leadsData = [
  { month: "October", email: 186, calls: 80 },
  { month: "November", email: 305, calls: 200 },
  { month: "December", email: 237, calls: 120 },
  { month: "January", email: 73, calls: 190 },
  { month: "February", email: 209, calls: 130 },
  { month: "March", email: 214, calls: 140 },
];

export const salesData = [
  { month: "January", inbound: 186, outbound: 80 },
  { month: "February", inbound: 305, outbound: 200 },
  { month: "March", inbound: 237, outbound: 120 },
  { month: "April", inbound: 73, outbound: 190 },
  { month: "May", inbound: 209, outbound: 130 },
  { month: "June", inbound: 214, outbound: 140 },
];

export const teamActivitiesData = [
  {
    icon: <User className="size-4" />,
    text: "Jules updated 3 leads",
  },
  {
    icon: <Headset className="size-4" />,
    text: "Alice booked 2 demos",
  },
  {
    icon: <Binoculars className="size-4" />,
    text: "Marie added 1 new insight",
  },
  {
    icon: <CalendarCheck2 className="size-4" />,
    text: "Shared 1 new playbook",
  },
];

export const remindersData = [
  {
    icon: <Clock className="size-4" />,
    text: "Q4 forecast due in 2 days",
  },
  {
    icon: <DollarSign className="size-4" />,
    text: "Review pipeline updates",
  },
  {
    icon: <Users className="size-4" />,
    text: "Team meeting tomorrow",
  },
];
