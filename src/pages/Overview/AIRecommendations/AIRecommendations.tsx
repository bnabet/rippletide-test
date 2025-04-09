import { useState } from "react";
import { Brain, Zap } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { AppPage } from "@/layouts/AppPage";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionActions,
  SectionContent,
} from "@/components/Section/Section";
import { AIRecommendationsStats } from "./components/AIRecommendationsStats";
import { AIRecommendationsOpportunities } from "./components/AIRecommendationsOpportunities";

import { opportunitiesData } from "./data/data";

const SCORE_OPTIONS = ["Highest Score First", "Lowest Score First"] as const;

export function AIRecommendations() {
  const [selectedScoreOption, setSelectedScoreOption] = useState<
    (typeof SCORE_OPTIONS)[number]
  >(SCORE_OPTIONS[0]);

  return (
    <AppPage
      title="AI Recommendations"
      description="Your AI recommendations for today"
    >
      <div className="grid grid-cols-1 space-y-10">
        <AIRecommendationsStats />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <Section className="flex-1 space-y-4 lg:col-span-3">
            <SectionHeader>
              <SectionTitle className="text-lg">
                High-Value Opportunities
              </SectionTitle>
              <SectionActions>
                <Select
                  value={selectedScoreOption}
                  onValueChange={(val) =>
                    setSelectedScoreOption(
                      val as (typeof SCORE_OPTIONS)[number],
                    )
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SCORE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </SectionActions>
            </SectionHeader>

            <SectionContent>
              <AIRecommendationsOpportunities
                opportunitiesData={opportunitiesData}
              />
            </SectionContent>
          </Section>

          {/* AI Assistant */}
          <div className="w-full flex-shrink-0 lg:col-span-1">
            <Card severity="warning">
              <CardHeader>
                <CardTitle>
                  <div className="bg-secondary rounded-md p-2">
                    <Brain className="size-4 text-white" />
                  </div>
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  Need help understanding these insights? Ask me anything about
                  your leads and opportunities.
                </p>
              </CardContent>
              <CardFooter>
                <div className="relative w-full">
                  <Input
                    className="bg-white pr-9 shadow-none"
                    type="text"
                    onChange={() => {}}
                    placeholder="Ask a question..."
                  />
                  <Zap className="text-muted-foreground absolute top-0 right-3 bottom-0 my-auto h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </AppPage>
  );
}
