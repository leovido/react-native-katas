import { Pressable, Text } from "react-native";
import * as DropdownMenu from "zeego/dropdown-menu";

export function MyMenu() {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Pressable>
					<Text>Open Menu</Text>
				</Pressable>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item key="edit" onSelect={() => console.log("edit")}>
					<DropdownMenu.ItemTitle>Edit</DropdownMenu.ItemTitle>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
