---
author: Jordain Perreault-Joyce
pubDate: 2023-11-24T09:30:00Z
title: Stable Video Diffusion Install
postSlug: stable-video-diffusion-install
featured: true
draft: false
tags:
  - Stable Diffusion
  - ComfyUI
  - AI
heroImage: "/StableVideoDiffusionInstallThumbnail2.png"
description:
  Install for Stable Video Diffusion through ComfyUI or SVD.
---
## Info

Convert your images to videos with [Stable Video Diffusion](https://stability.ai/news/stable-video-diffusion-open-ai-video-model)

## How to install SVD through Stable Diffusions Tool

<iframe width="100%" height="414" src="https://www.youtube.com/embed/HMW9hVoQa0M?si=Ao8uQQXvjPQSI6Pr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Install 

Setup Instructions (Python 3.10.11, 4090, working on Windows): https://pastebin.com/YpqNSHFy

If you are still running into cuda issues after trying p13.txt take a read at this: https://pastebin.com/eSiVGGzA 

### Requirements

- 6Gb of VRAM
- Anaconda
- Git
- Generative-Models github
- SVD or SVD_XT

### Links

- [Anaconda](https://www.anaconda.com/download) 

- [Git](https://git-scm.com/downloads)

- [Generative-Models Github](https://github.com/Stability-AI/generative-models)

- [SVD](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid/tree/main)

- [SVD_XT](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt/tree/main)


## How to install SVD with ComfyUI

<iframe width="100%" height="414" src="https://www.youtube.com/embed/hoIobzZmNiM?si=9jFRbSDzUSiArP3u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

An easier way to generate videos using stable video diffusion models.

### Requirements:

- [ComfyUI](https://github.com/comfyanonymous/ComfyUI#installing)

- [ComfyUI-Manager](https://github.com/ltdrdata/ComfyUI-Manager)

- [SDXL](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/tree/main)

- You can use any safetensor file, I used the base SDXL model.

- [SVD Model](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid)

- [SVD_XT Model](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt)

- [SVD Jsons](https://comfyanonymous.github.io/ComfyUI_examples/video/)

- [Video Helper Suite](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

### Instructions

- Download the ComfyUI portable standalone build for Windows

- Install ComfyUI-Manager (optional)

- Install VHS - Video Helper Suite (optional)

- Download either of the .safetensors from to the "ComfyUI-checkpoints" -folder

- Load JSON file

- Best settings to use are:
 - 1024w x 576h
 - num frames for svd: 14
 - num frames for svd_xt: 25