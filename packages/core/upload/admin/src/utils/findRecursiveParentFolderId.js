const findRecursiveParentFolderId = (node, searchedId, parentId = -1) => {
  if (node.value === Number(searchedId)) {
    return parentId;
  }

  for (let i = 0; i < node.children.length; i++) {
    const result = findRecursiveParentFolderId(node.children[i], searchedId, node.value);

    if (result !== -1) {
      return result;
    }
  }

  return -1;
};

export default findRecursiveParentFolderId;
