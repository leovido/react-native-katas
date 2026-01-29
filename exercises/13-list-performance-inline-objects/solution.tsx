import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";

type User = { id: string; name: string; avatar: string };

function UserRow({ user }: { user: User }) {
	return (
		<View>
			<Text>{user.name}</Text>
		</View>
	);
}

type UserListProps = {
	users: User[];
};

export function UserList({ users }: UserListProps) {
	return (
		<FlashList
			data={users}
			renderItem={({ item }) => <UserRow user={item} />}
			keyExtractor={(item) => item.id}
			estimatedItemSize={48}
		/>
	);
}
