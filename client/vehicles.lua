RegisterNUICallback('spawnVehicle', function(data, cb)
    -- POST data gets parsed as JSON automatically
    SpawnVehicle(data.modelHash)
    cb({
        status = 'OK'
    })
end)

function SpawnVehicle(modelHash --[[Hash of vehicle to create]])
    local ModelHash = modelHash -- Use Compile-time hashes to get the hash of this model
    if not IsModelInCdimage(ModelHash) then
        return
    end
    RequestModel(ModelHash) -- Request the model
    while not HasModelLoaded(ModelHash) do -- Waits for the model to load with a check so it does not get stuck in an infinite loop
        Citizen.Wait(10)
    end
    local PlayerPed = PlayerPedId()
    local Vehicle = CreateVehicle(ModelHash, GetEntityCoords(PlayerPed), GetEntityHeading(PlayerPed), true, false) -- Spawns a networked vehicle on your current coords
    SetPedIntoVehicle(PlayerPed, Vehicle, -1)
    SetModelAsNoLongerNeeded(ModelHash) -- removes model from game memory as we no longer need it
end
