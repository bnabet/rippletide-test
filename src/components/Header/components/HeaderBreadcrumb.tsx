import { Fragment, useMemo } from "react";
import { useLocation } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { sidebarItems } from "@/components/Sidebar/sidebarItems";

type BreadcrumbItemType = {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
};

const createPathLabelMap = () => {
  const pathMap: Record<string, string> = {};

  sidebarItems.workspace.forEach((group) => {
    if (group.url && group.url !== "#") {
      pathMap[group.url] = group.label;
    }

    if (group.items) {
      const parentSegment = group.label.toLowerCase();
      pathMap[`/${parentSegment}`] = group.label;

      group.items.forEach((item) => {
        pathMap[item.url] = item.label;
      });
    }
  });

  sidebarItems.team.forEach((item) => {
    pathMap[item.url] = item.label;
  });

  sidebarItems.navSecondary.forEach((item) => {
    pathMap[item.url] = item.label;
  });

  return pathMap;
};

const pathLabelMap = createPathLabelMap();

export function HeaderBreadcrumb() {
  const location = useLocation();

  const breadcrumbItems = useMemo((): BreadcrumbItemType[] => {
    const items: BreadcrumbItemType[] = [
      {
        label: "Home",
        href: "/",
      },
    ];

    const pathname =
      location.pathname.endsWith("/") && location.pathname !== "/"
        ? location.pathname.slice(0, -1)
        : location.pathname;

    if (pathname === "/") {
      return items;
    }

    const segments = pathname.split("/").filter(Boolean);

    let currentPath = "";

    if (segments.length > 0) {
      currentPath = `/${segments[0]}`;
      items.push({
        label: pathLabelMap[currentPath] || segments[0],
        href: segments.length > 1 ? currentPath : undefined,
        isCurrentPage: segments.length === 1,
      });
    }

    if (segments.length > 1) {
      const fullPath = `/${segments.join("/")}`;

      items.push({
        label: pathLabelMap[fullPath] || segments[segments.length - 1],
        href: undefined,
        isCurrentPage: true,
      });
    }

    return items;
  }, [location.pathname]);

  return (
    <Breadcrumb className="hidden sm:block">
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {item.isCurrentPage ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href || "#"}>
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
