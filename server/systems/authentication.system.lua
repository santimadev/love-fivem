-- Makes a request to API to gather player's data
RegisterNetEvent('love:auth', function ()
    local steamIdentifier = GetSteamIdentifier(source)
    -- Make source available locally
    local player = source
    Post('https://howtolove.me/player/in', { steamId = steamIdentifier, steamName = name }, function (errorCode, playerData)
        -- If API responds with errorCode, kick the player
        -- if errorCode ~= nil then
        --     print('-- Error Code is --', errorCode)
        --     DropPlayer(player, 'Sorry, you were kicked!')
        --     CancelEvent()
        -- end
        -- Trigger event with player data after authentication was successfull
        TriggerClientEvent('love:auth', player, playerData)
    end)
end)


function GetSteamIdentifier(id)
    local steamIdentifier
    local identifiers = GetPlayerIdentifiers(id)
    for _, v in pairs(identifiers) do
        if string.find(v, "steam") then
            steamIdentifier = v
            break
        end
    end
    return steamIdentifier
end

local function OnPlayerConnecting(name, setKickReason, deferrals)
    local player = source
    local steamIdentifier
    local identifiers = GetPlayerIdentifiers(player)
    deferrals.defer()

    -- mandatory wait!
    Wait(0)

    deferrals.update(string.format("Hello %s. Your Steam ID is being checked.", name))

    for _, v in pairs(identifiers) do
        if string.find(v, "steam") then
            steamIdentifier = v
            break
        end
    end

    -- mandatory wait!
    Wait(0)

    if not steamIdentifier then
        deferrals.done("You are not connected to Steam.")
    else
        Post('https://howtolove.me/player/in', { steamId = steamIdentifier, steamName = name }, function (errorCode, result)
            if errorCode ~= nil then
                setKickReason('Kiked')
                deferrals.done('Not allowed')
                return
            end
            deferrals.done()
        end)
    end
end

AddEventHandler("playerConnecting", OnPlayerConnecting)
