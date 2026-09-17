#!/usr/bin/env bash
# Post-create: what only this repository knows about itself.
#
# The container is category-meta's, not this repository's. It mounts the
# parent, so every repo in the horde opens inside one container, and the
# horde Feature fans each repository's own create hook out after cloning.
# The toolchain, the Claude CLI, the credential fan-out and the egress
# firewall all arrive from the Surface and must not be repeated here.
set -euo pipefail

# Without this the checkout has no node_modules and the Astro dev server
# fails at the first import — the failure mode that follows a rebuild.
pnpm install
