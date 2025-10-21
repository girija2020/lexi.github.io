#!/bin/sh
node db.js &
exec node server.js
