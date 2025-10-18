#!/bin/bash

# Simple build and publish script for Angular demo
# Pattern based on sindre-k8s demos namespace

set -e

# Configuration
IMAGE_NAME="learn-angular-1"
REGISTRY="registry.k8s.sindrema.com/images"
TAG="${1:-latest}"
FULL_IMAGE="${REGISTRY}/${IMAGE_NAME}:${TAG}"

echo "Building Docker image: ${FULL_IMAGE}"
docker build -t "${FULL_IMAGE}" .

echo "Pushing image to registry..."
docker push "${FULL_IMAGE}"

echo "Done! Image published: ${FULL_IMAGE}"
