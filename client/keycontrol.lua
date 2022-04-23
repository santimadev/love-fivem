controls = {
    ARROW_DOWN = 187,
    ARROW_UP = 188,
    ARROW_LEFT = 189,
    ARROW_RIGHT = 190,
    ENTER = 18
}

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        -- Loop thru every listenable key
        for key, value in pairs(controls) do
            -- Check if it was released
            if IsControlJustReleased(0, value) then
                print('Key released', key)
                -- Send NUI message with KEY 
                SendNUIMessage({
                    action = 'love:keyReleased',
                    key = key
                })
            end
        end
    end
end)
