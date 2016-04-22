#!/bin/bash
ABSOLUTE_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
exec 6<>/dev/tcp/127.0.0.1/80 && exit 1
echo "Port is available"
