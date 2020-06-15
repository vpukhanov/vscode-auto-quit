import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let windowCount = vscode.window ? 1 : 0;

	const newWindowSubscription = vscode.commands.registerCommand(
		'autoQuit.keybindings.newWindow',
		() => {
			++windowCount;
			vscode.commands.executeCommand('workbench.action.newWindow');
		}
	);

	const closeWindowSubscription = vscode.commands.registerCommand(
		'autoQuit.keybindings.closeWindow',
		() => {
			--windowCount;
			vscode.commands.executeCommand(
				windowCount > 0
					? 'workbench.action.closeWindow'
					: 'workbench.action.quit'
			);
		}
	);

	context.subscriptions.push(newWindowSubscription);
	context.subscriptions.push(closeWindowSubscription);
}

export function deactivate() {}
