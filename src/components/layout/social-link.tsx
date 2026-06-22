import {
  SocialIcon,
  type SocialPlatform,
} from "@/components/icons/social-icons";
import { cn } from "@/lib/utils";

type SocialLinkProps = {
  href: string;
  label: string;
  platform: SocialPlatform;
  showLabel?: boolean;
  className?: string;
  iconClassName?: string;
};

export function SocialLink({
  href,
  label,
  platform,
  showLabel = true,
  className,
  iconClassName,
}: SocialLinkProps) {
  const isMailto = href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(isMailto
        ? {}
        : { target: "_blank", rel: "noreferrer noopener" })}
      aria-label={showLabel ? undefined : label}
      className={cn(
        "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary",
        className,
      )}
    >
      <SocialIcon platform={platform} className={iconClassName} />
      {showLabel ? <span>{label}</span> : null}
    </a>
  );
}
