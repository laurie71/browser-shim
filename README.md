Overview
========
The browser-shim module provides cross-compatibility between Node
and the browser: in short, it allows you to run the same code on
Node and in the browser, without maintaining two parallel
implementations, pre-processing modules for delivery to the
browser, or otherwise jumping through hoops.

Installation
------------
You can install browser-shim via npm:

    npm install browser-shim

or bundle it into your project directly:

    curl http://github.com/laurie71/browser-shim/...??? \
        > lib/browser-shim.js

...

Usage: Server Side
------------------
Using browser-shim in your modules is trivial. In three steps:

  1. ``require('browser-shim');``
     Start your module by requiring browser-shim. This defines
     a global ``provides()`` function which handles all the
     magic for making your module cross-compatible accross
     client and server.

  2. ``var ns = provide('my.name.space');``
     Call ``provide()`` the the namespace you want to expose
     your module under on the client (see Usage: Client Side,
     below, for details).

  3. ``ns.Foo = function() { ... }``
     Now simply attach your exported symbols to ``ns`` instead
     of ``exports``. Or don't -- if you use``exports`` or
     ``module.exports`` that'll work too, on the client as well
     as on the server. It just wont be as clear to client-side
     developers reading your module's code.

Usage: Client Side
------------------
Once your module is written using browser-shim, there's nothing
to do for the client other than making the script available and
using the functions and properties it provides. Assuming you
have an HTML page that loads your module as a script, other
code on that page (and in other scripts the page loads) can use
your module via the namespace your passed to ``provide()``.

Here's a simple example:

    <script type="text/javascript" src="./browser-shim.js" />
    <script type="text/javascript">
        var myfoo = new my.name.space.Foo();
    </script>

Done.

Additional Features
-------------------
To make things as easy as possible, browser-shim includes a few
utility functions and services, including a one-line web-server
to make serving browser-shim.js to the client trivial from any
Node process; a Connect middeleware to do the same thing in
Connect or Express; and a few other goodies. See docs/extra.md
for the details.

Support
-------
Everything's on Github, so you can file issues there. Or post
to the Node mailing list (preferably with 'browser-shim' in
the subject somewhere) and I'll respond there.

Enjoy!
