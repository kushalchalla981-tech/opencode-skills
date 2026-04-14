#!/bin/bash

# Buddy Skill - Live ASCII Art Companion
# Usage: ./buddy.sh [action]

BUDDY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NODE_CMD="${NODE_CMD:-node}"

# Default action
ACTION="${1:-show}"

# Get user ID
USER_ID="${USER:-$(whoami)}"

# Run the buddy generator
case "$ACTION" in
  show)
    "$NODE_CMD" "$BUDDY_DIR/buddy-generator.js" show
    ;;
  generate)
    "$NODE_CMD" "$BUDDY_DIR/buddy-generator.js" generate
    ;;
  animate)
    "$NODE_CMD" "$BUDDY_DIR/buddy-generator.js" animate
    ;;
  stats)
    "$NODE_CMD" "$BUDDY_DIR/buddy-generator.js" stats
    ;;
  *)
    echo "Unknown action: $ACTION"
    echo "Available actions: show, generate, animate, stats"
    exit 1
    ;;
esac
