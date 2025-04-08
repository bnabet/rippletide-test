import {
  Brain,
  ChartNoAxesColumnIncreasing,
  Mail,
  MessageSquare,
  Target,
  Users,
} from "lucide-react";

export const statsData = [
  {
    title: "AI Accuracy",
    value: 92,
    icon: <Brain className="size-6" />,
    isPercent: true,
  },
  {
    title: "Predictions Made",
    value: 1.284,
    icon: <Target className="size-6" />,
  },
  {
    title: "Success Rate",
    value: 78,
    icon: <ChartNoAxesColumnIncreasing className="size-6" />,
    isPercent: true,
  },
];

export const opportunitiesData = [
  {
    id: "1",
    name: "John Smith",
    match: 85,
    company: "Tech Solutions Inc",
    highlights: [
      {
        label: "Compare enterprise plans",
        datetime: "2023-10-01T12:00:00Z",
        icon: <Target className="size-4" />,
      },
      {
        label: "92% open rate",
        datetime: "2023-10-02T14:00:00Z",
        icon: <Mail className="size-4" />,
      },
    ],
  },
  {
    id: "2",
    name: "Emma Wilson",
    match: 78,
    company: "Global Industries",
    highlights: [
      {
        label: "Attended product demo",
        datetime: "2023-10-03T09:00:00Z",
        icon: <Users className="size-4" />,
      },
      {
        label: "Downloaded case study",
        datetime: "2023-10-04T11:30:00Z",
        icon: <Target className="size-4" />,
      },
    ],
  },
  {
    id: "3",
    name: "Michael Brown",
    match: 83,
    company: "Innovate Corp",
    highlights: [
      {
        label: "Visited pricing page",
        datetime: "2023-10-05T15:00:00Z",
        icon: <Target className="size-4" />,
      },
      {
        label: "Asked about features",
        datetime: "2023-10-06T10:15:00Z",
        icon: <MessageSquare className="size-4" />,
      },
    ],
  },
];
