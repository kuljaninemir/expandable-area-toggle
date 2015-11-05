# expandable-area-toggle

expandable-area-toggle is a javascript solution for creating expandable html-elements controlled by a button or link. Each button can be connected to one or more html-elements. Buttons can also exist within expanded areas to open another area (nested expandable html-elements).

### Quick start
- Install with bower ("bower install expandable-area-toggle").
- Include dist/expandablearea.min.js after jQuery.
- Paste this: 
```html
<button data-gk-area-state="closed" data-gk-open-class="toggleDiv1">Toggle</button>
<div class="toggleDiv1">
    <p>Expandable area 1</p>
</div>
```

### Settings (as data-attributes)
- data-gk-area-state = "open" or "closed". This must be used on all buttons that control areas. It also determines the initial state of an expandable element.
- data-gk-open-class = "foobar". This value should be the class of the expandable div(s). 
- data-gk-close-text = "Close me". This determines what the close-button text should be. Optional.
- data-gk-open-text = "Open me". This determines what the open-button text should be. Optional.