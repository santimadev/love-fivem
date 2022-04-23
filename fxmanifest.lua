fx_version 'cerulean'
game 'gta5'

name 'Love'
description 'Love Framework for FiveM'
author 'smaudd'

client_scripts {
    'client/authentication.lua',
    'client/keycontrol.lua',
    'client/vehicles.lua'
}
server_scripts {
    'server/utils.lua',
    'server/systems/authentication.system.lua'
}

ui_page 'ui/public/index.html'

files {
    'ui/public/index.html',
    'ui/public/build/bundle.css',
    'ui/public/build/bundle.js',
    'ui/public/global.css'
}