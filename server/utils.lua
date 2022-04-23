
function Post(url --[[string]], body --[[table]], cb--[[callback]])
    PerformHttpRequest(url, function (errorCode, resultData, resultHeaders)
        if tostring(errorCode) ~= '200' then
            cb(tostring(errorCode))
            return
        end
        cb(nil, resultData)
    end, "POST", json.encode(body), { ["Content-Type"] = 'application/json' })
end


function Get(url --[[string]], cb --[[callback]])
    PerformHttpRequest(url, function (errorCode, resultData, resultHeaders)
        if tostring(errorCode) ~= '200' then
            cb(tostring(errorCode))
            return
        end
        cb(nil, json.decode(resultData))
    end, "GET")
end