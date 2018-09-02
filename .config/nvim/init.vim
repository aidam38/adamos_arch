set encoding=utf-8
set clipboard=unnamed
set number

execute pathogen#infect()
syntax on
filetype plugin on

map <space> <leader>
nnoremap ů :
inoremap <C-BS> <C-W>
map <C-a> <esc>ggVG<CR>
inoremap <C-v> <ESC>"+pa
vnoremap <C-c> "+y
nnoremap <ESC> :noh<CR>
