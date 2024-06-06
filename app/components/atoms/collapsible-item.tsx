import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "@remix-run/react";
import { ChevronsUpDown, Pencil } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { ReactChildren, ReactNode } from "react";

interface CollapsibleItemProps {
  label: string;
  icon: LucideIcon;
  children: ReactNode[];
}

export const CollapsibleItem = ({
  label,
  icon: Icon,
  children,
}: CollapsibleItemProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 text-muted-foreground transition-all hover:text-primary">
        <Icon className="size-4" />
        {label}
        <ChevronsUpDown className="size-4" />
      </CollapsibleTrigger>
      <div className="flex flex-col ml-6 my-2 gap-4">
        {children &&
          children.map((child, index) => (
            <CollapsibleContent key={index}>{child}</CollapsibleContent>
          ))}
      </div>
    </Collapsible>
  );
};

interface CollapsibleChildProps {
  childLabel: string;
  href: string;
}

export const CollapsibleChild: React.FC<CollapsibleChildProps> = ({
  childLabel,
  href,
}) => {
  return (
    <Link
      to={href}
      className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      {childLabel}
    </Link>
  );
};