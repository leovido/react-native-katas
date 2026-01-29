import { memo } from "react";
import { Text } from "react-native";

type User = { id: string; name: string; email: string };

const UserRow = memo(function UserRow({ user }: { user: User }) {
	return <Text>{user.name}</Text>;
});

type UserListProps = {
	users: User[];
};

export function UserList({ users }: UserListProps) {
	return (
		<>
			{users.map((user) => (
				<UserRow key={user.id} user={user} />
			))}
		</>
	);
}
