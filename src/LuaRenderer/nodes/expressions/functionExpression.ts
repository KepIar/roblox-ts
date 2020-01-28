import * as lua from "LuaAST";
import { RenderState } from "LuaRenderer";
import { renderParameters } from "LuaRenderer/util/parameters";
import { renderStatements } from "LuaRenderer/util/statements";

export function renderFunctionExpression(state: RenderState, node: lua.FunctionExpression) {
	if (!node.statements.head) {
		return `function(${renderParameters(state, node)}) end`;
	}

	let result = "";
	result += `function(${renderParameters(state, node)})\n`;
	result += state.block(() => renderStatements(state, node.statements));
	result += state.indent + `end`;
	return result;
}
