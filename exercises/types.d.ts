// Type declarations for exercise files that use mock/demo modules

// Exercise 21: Navigation
declare module "@react-navigation/stack" {
	import type { createNativeStackNavigator } from "@react-navigation/native-stack";
	export const createStackNavigator: typeof createNativeStackNavigator;
	export * from "@react-navigation/native-stack";
}

// Exercise 32: Design system imports
declare module "@ui/button" {
	export const Button: React.ComponentType<{ children?: React.ReactNode }>;
}

declare module "@ui/text" {
	export const Text: React.ComponentType<{ children?: React.ReactNode }>;
}

declare module "@ui/view" {
	export const View: React.ComponentType<{ children?: React.ReactNode }>;
}

declare module "@/components/button" {
	export const Button: React.ComponentType<{ children?: React.ReactNode }>;
}

declare module "@/components/text" {
	export const Text: React.ComponentType<{ children?: React.ReactNode }>;
}

declare module "@/components/view" {
	export const View: React.ComponentType<{ children?: React.ReactNode }>;
}
