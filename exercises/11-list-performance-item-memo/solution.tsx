import { memo } from "react";
import { Text } from "react-native";

type UserRowProps = {
	id: string;
	name: string;
	email: string;
};

const UserRow = memo(function UserRow({ name }: UserRowProps) {
	return <Text>{name}</Text>;
});

type User = { id: string; name: string; email: string };

type UserListProps = {
	users: User[];
};

export function UserList({ users }: UserListProps) {
	return (
		<>
			{users.map((user) => (
				<UserRow
					key={user.id}
					id={user.id}
					name={user.name}
					email={user.email}
				/>
			))}
		</>
	);
}
