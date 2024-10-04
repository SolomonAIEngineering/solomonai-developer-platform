"use client";

import { createClient } from "@v1/db/client";
import { getCurrentUserTeamQuery, getTeamMembersQuery } from "@v1/db/queries";
import { Spinner } from "@v1/ui/spinner";
import { useEffect, useState } from "react";
import { AssignedUser } from "./assigned-user";

type User = {
  id: string;
  avatar_url?: string | null;
  full_name: string | null;
};

type Props = {
  selectedId?: string;
  onSelect: (selected: User) => void;
};

export function SelectUser({ selectedId, onSelect }: Props) {
  const [value, setValue] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const supabase = createClient();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setValue(selectedId);
  }, [selectedId]);

  useEffect(() => {
    async function getUsers() {
      const { data: userData } = await getCurrentUserTeamQuery(supabase);

      if (userData?.team_id) {
        const { data: membersData } = await getTeamMembersQuery(
          supabase,
          userData.team_id,
        );

        setUsers(membersData?.map(({ user }) => user));
        setIsLoading(false);
      }
    }

    setIsLoading(true);
    getUsers();
  }, [supabase]);

  if (!selectedId && isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return users.map((user) => {
    return (
      <button
        type="button"
        key={user.id}
        className="flex items-center text-sm cursor-default"
        onClick={() => onSelect(user)}
      >
        <AssignedUser avatarUrl={user.avatar_url} fullName={user.full_name} />
      </button>
    );
  });
}