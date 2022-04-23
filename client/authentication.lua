-- Trigger event for server auth.system
TriggerServerEvent('love:auth', '...')
RegisterNetEvent('love:auth', function(playerData --[[Player's object from Mongo]])
    -- AddEventHandler('onClientMapStart', function()
    --     -- exports.spawnmanager:setAutoSpawn(true)
    --     exports.spawnmanager:spawnPlayer({
    --         x = 466.8401,
    --         y = 197.7201,
    --         z = 111.5291,
    --         heading = 291.71,
    --         model = 'a_m_m_farmer_01',
    --         skipFade = false
    --     })
    --     exports.spawnmanager:forceRespawn()
    -- end)
    -- Get player's data with event, send it forward to NUI
    SendNUIMessage({
        action = 'love:auth',
        player = playerData
    })
    -- Spawn player on specific coords
    exports.spawnmanager:spawnPlayer({
        x = 466.8401,
        y = 197.7201,
        z = 111.5291,
        heading = 291.71,
        model = 'a_m_m_farmer_01',
        skipFade = false
    })
end)
