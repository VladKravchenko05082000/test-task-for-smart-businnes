About development approaches

To write css styles, I chose the Styled-Components library, I implemented 2 approaches to using the capabilities of this library - through a context using a styled object, and a custom context for using a theme in jsx markup (I did not use this opportunity, but left the opportunity for potential expansion ). I had to choose the latest subversion of version 5 of the library, because on version 6, when transferring props inside components created using the library, an error appeared in the browser that there was no such property.

I chose Styled components for the reason that it minimizes the creation of CSS files, and is more focused on using javascript capabilities, styled-components also supports another library called styled-systems, which allows you to minimize the creation of unnecessary props for, for example, widths and heights, this is essential saves time on writing types.

As well as the developer tools, I chose eslint, which sets certain rules that must be followed when writing code, and also makes it easier to debug the system itself, and prettier, which formats the code according to certain rules and makes the code more readable

For store management, the Reduxtoolkit library was chosen, which is an extension of the standard redux library, and introduces a significant number of quality of life features. This is also the basis for writing applications in React.

To obtain data from the back-end, the axios library was chosen, simply for the very reason that I am used to working with it)

In general, that's all, I tried to minimize the number of uses of unnecessary libraries for the convenience of code checking, I also used several components from my standard template, which I use to develop personal projects. The only difficulty is that the recent new update of styled components caused a bug that I wrote about above, on that particular version there was no adequate way to fix it, so I spent some time solving this problem, it was simply as a result that a decision was made to downgrade the version of the library .