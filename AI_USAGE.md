# AI usage log
## Week 1
- Tool(s): Claude
- What I asked for: Help fixing the errors I got when creating my Vite + reactdev project in Terminal. 
- What I kept, changed or rejected, and why: 
    > Kept: The command for creating vite @ reactdev.
    > Changed: The command Claude gave me (`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`).
    > Rejected: -
- One thing the AI got wrong and how I fixed it: -

## Week 2
- Tool(s): Claude 
- What I asked for: Why the `MenuList` import in `App.jsx` was a different color from the other imports, and then a check of my `App.jsx`.
- What I kept, changed or rejected, and why:
    > Kept: The explanation that a dimmed import means it is unused (it was fixed once `<MenuList />` was rendered in the JSX).
    > Changed: Moved `const [cart, setCart] = useState([])` and `handleAddToCart` from the top of the file into the `App` function, because hooks only work inside a component.
    > Rejected: -
- One thing the AI got wrong and how I fixed it: -

## Week 3
- Tool(s): ChatGPT
- What I asked for: I asked ChatGPT to explain the S4 menu view and order-placed view code because I did not understand how it worked.
- What I kept, changed or rejected, and why:
    > Kept: The explanation of how .find() identifies the selected vendor and how selectedVendor.menu passes menu items to the component.
    > Changed: Adjust the example component name and prop names to match my existing Week 2 code.
    > Rejected: I did not directly copy the suggested MenuList component because I need to use my own component instead of an example that may not match my code.
- One thing the AI got wrong and how I fixed it: The AI suggested using MenuList as an example component, but it might not match the component I created in Week 2. So, I need to check my existing code and replace it with my actual component name and the correct prop names.

## Week 4
- Tool(s): Claude
- What I asked for: How to undo or remove the reactdone tag that I had accidentally created after Lab 3 and return to the previous state.
- What I kept, changed or rejected, and why:
    > Kept: Claude's suggestion to remove/delete the reactdone tag.
    > Changed: Followed the suggested steps to delete the reactdone tag and make the necessary adjustments.
    > Rejected: -
- One thing the AI got wrong and how I fixed it: -

## Week 5
- Tool(s): Claude
- What I asked for: Explaination details of the Week 5 personal feature in the lab sheet because I did not understand it. I also to fix errors such as blank screen and missing imports.
- What I kept, changed or rejected, and why:
    > Kept: The auth code from the lab sheet (B2), same pattern as my Week 4 CartProvider/cart-context.
    > Changed: I added the missing imports in App.jsx. In VendorPage.jsx I changed my dietary tags from the URL to useLocalStorage with a key that ends in the user's id (ce-diet-<uid>), and guests do not save anything.
    > Rejected: The separate personal feature file that Claude suggested, because my personal feature from Week 1 to Week 4 is already in VendorPage.jsx.
- One thing the AI got wrong and how I fixed it: Claude suggested creating a new file for my personal feature, but the feature already existed in VendorPage.jsx and only needed to be changed.