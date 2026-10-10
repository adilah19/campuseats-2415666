# AI usage log
## Week 1
- Tool(s):
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:

## Week 2
- Tool(s): Claude 
- What I asked for: hy the `MenuList` import in `App.jsx` was a different color from the other imports, and then a check of my `App.jsx`.
- What I kept, changed or rejected, and why:
    > Kept: the explanation that a dimmed import means it is unused (it was fixed once `<MenuList />` was rendered in the JSX).
    > Changed: moved `const [cart, setCart] = useState([])` and `handleAddToCart` from the top of the file into the `App` function, because hooks only work inside a component.
    > Rejected: -
- One thing the AI got wrong and how I fixed it: -