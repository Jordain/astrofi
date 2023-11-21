---
author: Jordain Perreault-Joyce
pubDate: 2023-09-20T09:30:00Z
title: Automatic1111 QR Code Monster Tutorial
postSlug: automatic1111-qr-code-monster-tutorial
featured: true
draft: false
tags:
  - Stable_Diffusion
  - Automatic1111
  - ControlNet
  - AI
heroImage: "/Auto1111BasicShapeMaskThumbnail3.png"
description:
  Learn how to create visual patterns using masks.
---
## Table of contents

## Masks

Download these masks and try them out 
<div class="grid grid-cols-4 gap-2">
<!-- ![Circle Mask](@assets/images/automatic1111-qr-code-monster-tutorial/CircleMask.jpg=200w300h "Circle Mask") -->
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/CircleMask.jpg" alt="Circle Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/SquareMask.jpg" alt="Square Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/DiamondMask.jpg" alt="Diamond Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/TrainglesMask.png" alt="Traingles Mask" width="300" height="200">
</div>
<div class="grid grid-cols-4 gap-2">
<!-- ![Circle Mask](@assets/images/automatic1111-qr-code-monster-tutorial/CircleMask.jpg=200w300h "Circle Mask") -->
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/SwirlMask.png" alt="Swirl Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/CheckerBoardMask.jpg" alt="Checker Board Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/TeethMask.png" alt="Teeth Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/ColumnsMask.png" alt="Columns Mask" width="300" height="200">
</div>

## Download Links
- [QR Code Monster SD V1.5](https://civitai.com/models/111006/qr-code-monster)
- [QR Code Monster SDXL](https://huggingface.co/monster-labs/control_v1p_sdxl_qrcode_monster)
- [SD V1.5 Model](https://huggingface.co/runwayml/stable-diffusion-v1-5/blob/main/v1-5-pruned-emaonly.safetensors)
- [SDXL Model](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
- [Realistic Vision V5.1](https://civitai.com/models/4201?modelVersionId=130072)
- [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [ControlNet](https://github.com/lllyasviel/ControlNet)

## Video Tutorial

<iframe width="100%" height="414" src="https://www.youtube.com/embed/CmIxW_VOo8U?si=JRoJMzrRa4B2huCb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Examples
<div class="grid grid-cols-2 gap-2">
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example1.png" alt="Original Image - Middle East Busy Market" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/Example11.png" alt="Hover Image - Triangle Dot Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse()">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content" class="collapsible-content" style="display: none;">

  ```
    [[[A bustling street market]]] in the middle east in the style of a crayon drawing
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 518053974, Size: 1024x1024, Model hash: 15012c538f, Model: realisticVisionV51_v51VAE, ControlNet 0: "Module: none, Model: qrCodeMonster_v20 [5e5778cb], Weight: 1.34, Resize Mode: Just Resize, Low Vram: False, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>


  </div>
</div>








Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer
malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas
pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse
platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada
fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus
vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea
dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst
quisque sagittis purus sit amet.

Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum
quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet.
Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus.
Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit
ullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt
dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc.
Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus
arcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed
tempus urna et pharetra pharetra massa massa ultricies mi.

Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam
sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec.
Egestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna
fermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et
egestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel
turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra
nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus
vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim
praesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus
egestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam
ac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor
purus non. Amet dictum sit amet justo donec enim.

Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut
consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra.
Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor
dignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor
dignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque
eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim
blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices
tincidunt arcu. Id cursus metus aliquam eleifend mi.

Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus
imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu
cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt
dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat
sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
Egestas integer eget aliquet nibh praesent tristique magna.
