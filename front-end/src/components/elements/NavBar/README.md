# NavBar Class
This is navbar component that implements Material-UI's AppBar. this component consist of :

---

## Styles
object that controls the styles of all ```tag```. Requires ```theme```, which is Material-UI's css-in-js module.

```js
const styles = theme => ({
    // the classname here
)}
```

## Responsive NavBar
this Navbar is responsive due to the function bellow

```js
const renderMobileMenu = (
    // stuff here
)
```

and use it inside the return function

```jsx
return(

    <AppBar>
        <ToolBar>
            //some stuff here
            { renderMobileMenu }
        </ToolBar>
    </AppBar>
        
)
```