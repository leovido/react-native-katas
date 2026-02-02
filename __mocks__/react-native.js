const React = require("react");

// Minimal mock of react-native for Jest component tests.
// Uses DOM elements so we don't need to transform react-native's ESM.
const Text = (props) =>
	React.createElement("span", {
		...props,
		testID: props.testID ?? "rn-text",
		"data-testid": props.testID ?? "rn-text",
	});
const View = (props) =>
	React.createElement("div", {
		...props,
		testID: props.testID ?? "rn-view",
		"data-testid": props.testID ?? "rn-view",
	});
const Pressable = (props) => {
	const { onPress, children, testID, ...rest } = props;
	return React.createElement(
		"div",
		{
			...rest,
			testID: testID ?? "rn-pressable",
			"data-testid": testID ?? "rn-pressable",
			onClick: (e) => {
				e?.preventDefault?.();
				onPress?.(e);
			},
			onPress,
		},
		children,
	);
};
const ScrollView = (props) =>
	React.createElement("div", {
		...props,
		testID: props.testID ?? "rn-scrollview",
		"data-testid": props.testID ?? "rn-scrollview",
	});

const Button = (props) => {
	const { title, onPress, testID, ...rest } = props;
	return React.createElement(
		"button",
		{
			...rest,
			testID: testID ?? "rn-button",
			"data-testid": testID ?? "rn-button",
			onClick: onPress,
			onPress,
		},
		title,
	);
};

const Modal = (props) => {
	const { visible, children, testID, ...rest } = props;
	if (!visible) return null;
	return React.createElement(
		"div",
		{ ...rest, testID: testID ?? "rn-modal", "data-testid": testID ?? "rn-modal" },
		children,
	);
};

const Switch = (props) => {
	const { value, onValueChange, testID, ...rest } = props;
	return React.createElement("input", {
		...rest,
		type: "checkbox",
		checked: value,
		testID: testID ?? "rn-switch",
		"data-testid": testID ?? "rn-switch",
		onChange: (e) => onValueChange?.(e?.target?.checked ?? false),
	});
};

module.exports = {
	Text,
	View,
	Pressable,
	ScrollView,
	Button,
	Modal,
	Switch,
	Platform: { OS: "ios" },
	useColorScheme: () => "light",
	StyleSheet: {
		create: (styles) => styles,
		flatten: (style) => (Array.isArray(style) ? Object.assign({}, ...style) : style),
	},
};
