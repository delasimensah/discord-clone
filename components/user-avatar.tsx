import { FC } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  src?: string;
  className?: string;
};

const UserAvatar: FC<UserAvatarProps> = ({ src, className }) => {
  return (
    <Avatar className={cn("h-7 w-7 bg-black/30 md:h-10 md:w-10", className)}>
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default UserAvatar;
