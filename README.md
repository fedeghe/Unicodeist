
![unicodeist](src/img/unicodeist.png?raw=true)




A unicode characters based visual editor
---

Sometimes creating temporary creative for a logo should be a matter of minutes, using _unicodeist_ it is!

I created the following in more or less 3 minutes, using 3 different symbols...  

<img width="322"  src="src/img/ss0.png?raw=true">

Clicking <a href="./src/img/fg.json?raw=true" download>here</a> you could download exactly that creative and import it in _unicodeist_ .... but I'm sure You can do way better than that. 


### [༺ TRY IT HERE ༻](https://fedeghe.github.io/unicodeist/)

---
- In the top right you can:<img align="right" width="322"  src="src/img/ss1.png?raw=true">
    - change the `background-color` (default is white)
    - switch 🌓 theme
    - set the size of the current _creative_
    - hover the speed dial button to:
         - get the content as `<div>` usable in a html page or a `<script>` that will automatically render the _creative_ exactly where you put the script.
        - export either:
            1) `.json` file of the current _creative_ (afterward importable)
            2) `.png` or `.jpeg` of the current _creative_
        - import one of the exported `.json` files
        
    ---

- Press the ➕ button on the **top** **left** (or press `ESC` button) to toggle the symbol selection panel  

- Add one or more symbols and close the panel (through ➖ button or pressing `ESC`)  

<img align="right" width="250"  src="src/img/ss2.png?raw=true">  

- Last symbol added is the current target one, thus on the right panel you will see a tuning card expanded allowing you to:  
    - set a label for it (only useful to search it among added symbols)
    - set the `z-index`
    - see a preview showing on its left some icons to:
        - thrash it 
        - isolate that from others (useful to be sure to change the right _symbol_)
        - clone it (when clicked, the clone will be found on the symbol list bottom)
        - bring it to the top (`z-index`)
        - move it to the bottom (`z-index`)
        - center it horizontally ...almost  
        - center it vertically ...almost  
            
    - change the `font-family`  
    - change the `font-weight`
    - change the `color`
    - tune `scale`, `scaleX`, `scaleY`, `rotationX`, `rotationY`, `rotationZ`, `skewX`, `skewY`, `blur` and `opacity`
    - move to a different location:  
        - using the range inputs
        - drag the symbol
        - when focused press `⇧ + arrow` (1px move each)


<img align="right" width="250"  src="src/img/ss3.png?raw=true">  

all range fields can be tuned either moving the range handle either just clicking on the value and scroll `up/down` or just type the exact value and blur or hit `esc` | `enter` buttons (if a range is focused then the scrolling on the symbols list is disabled).



### Move | scale all symbols  
To move all _symbols_ together just go to the _unicodeist_ logo in the right upper part and drag within the logo, on mouse release all symbols will move together in that direction for an amout proportional to the movement.  
If you do the same with the `shift` key down then all symbols will be up or down scaled depending on the movement direction. Notice that the relative position of all the elements will **not** change.



---
༺ ᚗᚌ ༻