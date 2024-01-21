---
author: Jordain Perreault-Joyce
pubDate: 2024-01-13T09:30:00Z
title: ThreeStudio Stable Zero123 Install
postSlug: threestudio-stable-zero123-install
featured: true
draft: false
tags:
  - ThreeStudio
  - Stable Zero123
  - AI
heroImage: "/ThreeStudioStableZero123InstallThumbnail.png"
description:
  Install ThreeStudio and Stable Zero123, Use an image to generate a 3d model.
---
<!-- ## Table of contents -->
## Table of contents

## Requirements

[Threestudio Repo](https://github.com/threestudio-project/threestudio)

[Stable Zero123 Model Download](https://huggingface.co/stabilityai/stable-zero123/resolve/main/stable_zero123.ckpt?download=true)

[Photoshop](https://www.adobe.com/ca/products/photoshop.html)
or
[GIMP](https://www.gimp.org/)

[Anaconda Download](https://repo.anaconda.com/archive/Anaconda3-2023.09-0-Linux-x86_64.sh)

## Images

![Black Hoodie](https://cdn.discordapp.com/attachments/1154440279244423188/1195944237594836992/CuteMiniLogo.png?ex=65b5d4dd&is=65a35fdd&hm=a68c4ed480a9d2def73c12a5428c550f54a13209b2db464cdae05e739804bcb3&=&format=webp&width=512&height=512)
![White Hoodie](https://cdn.discordapp.com/attachments/1154440279244423188/1195944207462973542/WhiteHoodie2ReferenceW.png?ex=65b5d4d6&is=65a35fd6&hm=07d6818f81cdb6a705dd643cfd07f7e7413dcd595dc70e8d65696e334ef6edaa&=&format=webp&width=512&height=512)
![Snow Dude](https://cdn.discordapp.com/attachments/1154440279244423188/1195935973373116477/SnowMan.jpg?ex=65b5cd2b&is=65a3582b&hm=e100683f7043c147b148c2b14d1bfade60284fb46eeabca455e561ecabc8add9&=&format=webp&width=512&height=512)
![Robo Kid](https://cdn.discordapp.com/attachments/1154440279244423188/1195935911595233340/Robo.jpg?ex=65b5cd1c&is=65a3581c&hm=28b9ed1e66d420856e247e7999ec4667f56ecbacde3795c2592c411601f3f699&=&format=webp&width=512&height=512)


## Video

<iframe width="100%" height="414" src="https://www.youtube.com/embed/jaRr5W80N8E?si=G6soWi5mcBxpBSlj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Instructions

### WSL Setup

Press the Windows key and type in 'Turn Windows features on and off'

It will ask for you to restart your computer

Restart your computer

Press the Windows key and type in 'powershell' and run as administrator

```
wsl --install
```

Then fill in the username and password.

### Python and Environment Setup

```
sudo apt-get update
sudo apt install python3-pip python3-dev libgomp1 libegl1-mesa-dev
sudo apt update
```

### CUDA toolkit 12.1 Setup

```
sudo apt-key del 7fa2af80
wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin
sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/12.1.0/local_installers/cuda-repo-wsl-ubuntu-12-1-local_12.1.0-1_amd64.deb
sudo dpkg -i cuda-repo-wsl-ubuntu-12-1-local_12.1.0-1_amd64.deb
```
It will tell you to install key run this command: copy and paste it
```
sudo cp /var/cuda-repo-wsl-ubuntu-12-1-local/cuda-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install cuda
export PATH=/usr/local/cuda-12.1/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-12.1/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```
Then to check your version, make sure it’s 12.1
```
nvcc --version 
```
### Anaconda Setup

```
cd /mnt/c/Users/jorda/Downloads/
bash Anaconda3-2023.09-0-Linux-x86_64.sh -b -u -p ~/anaconda3
cd ~
~/anaconda3/bin/conda init bash
~/anaconda3/bin/conda init zsh
```
To check bash profile:
```
nano .bashrc
```
Check bottom of .bashrc for >>> conda initialize >>>

Open a new terminal ubuntu tab

Run conda to check if it works:
```
conda
```

### ThreeStudio StableZero123 Setup

Download the ThreeStudio repo:
```
git clone https://github.com/threestudio-project/threestudio.git
```
We will change directory to copy Stable Zero123 ckpt file from windows to WSL:
```
cd ~/threestudio/load/zero123
cp /mnt/c/Users/jorda/Downloads/stable_zero123.ckpt .
```
Speed up 3d Generation times by configuring stable-zero123.yaml file:
```
cd ~/threestudio/configs
nano stable-zero123.yaml
```
Change batch_size = [12, 8, 4] ~ 5 hours, [8, 4, 2] ~50 mins, [4, 2, 1] ~5mins, [1, 1, 1] ~3mins

press down arrow until at batch_size and change it to [4, 2, 1]

press ctrl+x to quit

Y to save

press enter to keep same file name

### Creating Conda Environment
```
cd ~/threestudio
conda create --name threestudio python=3.10.13
conda activate threestudio 
```
### Install ThreeStudio Dependencies
```
pip install torch==2.1.2+cu121 torchvision torchaudio -f https://download.pytorch.org/whl/cu121/torch_stable.html
export PATH="/usr/local/cuda/bin:$PATH"
export LD_LIBRARY_PATH="/usr/local/cuda/lib64:$LD_LIBRARY_PATH"
export LIBRARY_PATH="/usr/local/cuda/lib64/stubs:$LIBRARY_PATH"
pip install ninja
pip install -r requirements.txt
```
### Version Check
```
nvcc --version
python3 --version
conda list
```

### Image to 3D Model Workflow

Create a new dir in C:\Users\jorda called threestudio_exports

Create a new dir in C:\Users\jorda\threestudio_exports called export

Go to either my website to get some samples or go to bing image generator and generate a front and back view

Use something similar to this prompt but keep it simple: T pose of a simple character design front and back solid background

Move your 512x512 png file in your downloads folder

initiate the WSL transfer:
```
cd ~/threestudio/load/images
cp /mnt/c/Users/jorda/Downloads/CuteMiniFront.png .
```

change back to main dir:
```
cd ~/threestudio
```

3d Training:
```
python launch.py --config configs/stable-zero123.yaml --train --gpu 0 data.image_path=load/images/CuteMiniFront.png system.prompt_processor.prompt="T pose of a 3d adventure character"
```

Export the 3d Object:
```
TRIAL_DIR='outputs/zero123-sai/[64, 128, 256]_CuteMiniFront.png@20240111-181839'
CONFIG_FILE="${TRIAL_DIR}/configs/parsed.yaml"
CHECKPOINT_FILE="${TRIAL_DIR}/ckpts/last.ckpt"
python launch.py --config "${CONFIG_FILE}" --export --gpu 0 resume="${CHECKPOINT_FILE}" system.exporter_type=mesh-exporter system.exporter.context_type=cuda
```

Change dir to saved export file:
```
cd ~/threestudio/outputs/zero123-sai
cd [64 (press tab to keep autofilling until you need to type) This will be a lot easier to try and open the dir. The name of it will be in the last output in the CLI
cd save
```

Copy from WSL to windows:
```
cp -r * /mnt/c/Users/jorda/threestudio_exports/export
```

Go back to windows and go to the C:\Users\jorda\threestudio_exports dir and rename export to StableZero123_NameOfObject_BS_4-2-1

Repeat Image to 3D Model Workflow to generate more models.