# .bashrc of Adam Krivka (aidam38)

set -o vi
stty -ixon

export VISUAL="nvim"
export EDITOR="nvim"
export PATH="/home/adam/.scripts:/home/adam/.config/nvim/bundle/vim-live-latex-preview/bin:/usr/lib/w3m:$PATH"

export PS1=" \[\033[38;5;202m\]\u\[$(tput sgr0)\]\[\033[38;5;14m\]@\[$(tput sgr0)\]\[\033[38;5;12m\]\h\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput sgr0)\]\[\033[38;5;160m\]\[$(tput bold)\]\W\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput sgr0)\]\[\033[38;5;14m\]\\$ \[$(tput sgr0)\]"

eval $(dircolors -b $HOME/.dircolors)

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'

# program aliases
alias v='nvim'
alias sv='sudo nvim'
alias r='ranger'
alias sr='sudo ranger'
alias p='pacman'
alias sudop='sudo pacman'
alias y='yaourt'
alias au='pulsemixer'
alias bl='bluetoothctl'
alias mke='sudo make clean install'
alias !!='sudo !!'
alias tr='transmission-remote -w /home/adam/torrents -a'
alias trl='transmission-remote -l'
alias sc='scanimage >'

alias gdwm='cd ~/builds/dwm'
alias cdwm='cd ~/builds/dwm && nvim /home/adam/builds/dwm/config.h'
alias gst='cd ~/builds/st'
alias cst='cd ~/builds/st && nvim /home/adam/builds/st/config.h'
alias gv='cd ~/.config/nvim'
alias cv='cd ~/.config/nvim && v init.vim'
alias cb='v ~/.bashrc'
alias gq='cd ~/.config/qutebrowser'
alias cq='cd ~/.config/qutebrowser && v config.py'
alias gr='cd ~/.config/ranger'
alias cr='cd ~/.config/ranger && v rc.conf'

# directories aliases
alias gr='cd /'
alias ge='cd /etc'
alias gM='cd /mnt'
alias gu='cd /mnt/usb1'
alias gh='cd ~'
alias gd='cd ~/downloads'
alias gD='cd ~/drive'
alias gs='cd ~/drive/School'
alias gS='cd ~/drive/School/soc'
alias gm='cd ~/drive/School/Matika'
alias gk='cd ~/drive/School/Matika/Krouzek/2018-2019/'
alias gst='cd ~/builds/st-git'
alias cst='cd ~/builds/st-git && v config.h'
