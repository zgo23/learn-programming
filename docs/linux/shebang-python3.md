The shebang line in any script determines the script's ability to be executed like a standalone executable without typing python beforehand in the terminal or when double clicking it in a file manager (when configured properly). It isn't necessary but generally put there so when someone sees the file opened in an editor, they immediately know what they're looking at. However, which shebang line you use IS important.

Correct usage for Python 3 scripts is:

#!/usr/bin/env python3
This defaults to version 3.latest. For Python 2.7.latest use python2 in place of python3.

The following should NOT be used (except for the rare case that you are writing code which is compatible with both Python 2.x and 3.x):

#!/usr/bin/env python
The reason for these recommendations, given in PEP 394, is that python can refer either to python2 or python3 on different systems. It currently refers to python2 on most distributions, but that is likely to change at some point.

Also, DO NOT Use:

#!/usr/local/bin/python
"python may be installed at /usr/bin/python or /bin/python in those cases, the above #! will fail."
