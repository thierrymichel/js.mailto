# js.mailto

## A little script to manage "mailto" links

VanillaJS version of my first jQuery plugin ([jquery.mailto](https://github.com/thierrymichel/jquery.mailto)).

## Usage

Create an HTML element for email addresses and replace "@" and "." with what you want (default is [at] and [dot])...

    <span class="email">john.doe[at]domain[dot]com<span>
    <span data-type="mailto">john.doe/foo/domain{bar}com<span>

... pass a DOM Elment or Collection to Mailto() function.

    Mailto(document.querySelector(".foo"));
    Mailto(document.querySelectorAll(".bar"), {at: "/chez/", dot: "{point}"});

That's it !

## Contact

If you have any questions or improvements : [hello@thierrymichel.net](mailto:hello@thierrymichel.net)
