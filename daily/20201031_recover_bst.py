# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def recoverTree(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        if not root:
            return None

        box = {}

        def check(node: TreeNode):
            if "prev" in box and node.val < box["prev"].val:
                if "big" not in box:
                    box["big"] = box["prev"]
                    box["prev"] = node
                    box["small_cand"] = node
                else:
                    box["small"] = node
            else:
                box["prev"] = node
                

        def preorder(node: TreeNode):
            if not node or "small" in box:
                return
            preorder(node.left)
            check(node)
            preorder(node.right)

        preorder(root)
        if "small" not in box:
            if "big" not in box:
                raise Exception("invalid input")
            else:
                box["small"] = box["small_cand"]

        box["big"].val ^= box["small"].val
        box["small"].val ^= box["big"].val
        box["big"].val ^= box["small"].val

        return root

fn = Solution().recoverTree
