#!/usr/bin/env python

import os

print "Content-Type: text/plain"
print "Set-Cookie: session=12345\n"

if "HTTP_COOKIE" in os.environ:
    print os.environ["HTTP_COOKIE"]
else:
    print "HTTP_COOKIE not set!"

