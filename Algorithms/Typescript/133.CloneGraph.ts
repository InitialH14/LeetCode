function cloneGraph(node: _Node | null): _Node | null {
	if(!node){
        return null;
    }

    const visited = new Map<_Node, _Node>();

    function dfs(oldnode: _Node): _Node {
        if(visited.has(oldnode)){
            return visited.get(oldnode);
        }

        let copy = new _Node(oldnode.val);
        visited.set(oldnode, copy);
        for(const node of oldnode.neighbors){
            copy.neighbors.push(dfs(node));
        }

        return copy;
    }

    return dfs(node);
};
