
const vehicles = {
  "Adder": 3078201489,
  "Airbus": 1283517198,
  "Airtug": 1560980623,
  "Akuma": 1672195559,
  "Alpha": 767087018,
  "Ambulance": 1171614426,
  "Annihilator": 837858166,
  "Apc": 562680400,
  "Ardent": 159274291,
  "ArmyTanker": 3087536137,
  "ArmyTrailer": 2818520053,
  "ArmyTrailer2": 2657817814,
  "Asea": 2485144969,
  "Asea2": 2487343317,
  "Asterope": 2391954683,
  "Avarus": 2179174271,
  "Bagger": 2154536131,
  "BaleTrailer": 3895125590,
  "Baller": 3486135912,
  "Baller2": 142944341,
  "Baller3": 1878062887,
  "Baller4": 634118882,
  "Baller5": 470404958,
  "Baller6": 666166960,
  "Banshee": 3253274834,
  "Banshee2": 633712403,
  "Barracks": 3471458123,
  "Barracks2": 1074326203,
  "Barracks3": 630371791,
  "Bati": 4180675781,
  "Bati2": 3403504941,
  "Benson": 2053223216,
  "Besra": 1824333165,
  "BestiaGTS": 1274868363,
  "BF400": 86520421,
  "BfInjection": 1126868326,
  "Biff": 850991848,
  "Bifta": 3945366167,
  "Bison": 4278019151,
  "Bison2": 2072156101,
  "Bison3": 1739845664,
  "BJXL": 850565707,
  "Blade": 3089165662,
  "Blazer": 2166734073,
  "Blazer2": 4246935337,
  "Blazer3": 3025077634,
  "Blazer4": 3854198872,
  "Blazer5": 2704629607,
  "Blimp": 4143991942,
  "Blimp2": 3681241380,
  "Blista": 3950024287,
  "Blista2": 1039032026,
  "Blista3": 3703315515,
  "Bmx": 1131912276,
  "BoatTrailer": 524108981,
  "BobcatXL": 1069929536,
  "Bodhi2": 2859047862,
  "Boxville": 2307837162,
  "Boxville2": 4061868990,
  "Boxville3": 121658888,
  "Boxville4": 444171386,
  "Boxville5": 682434785,
  "Brawler": 2815302597,
  "Brickade": 3989239879,
  "Brioso": 1549126457,
  "BType": 117401876,
  "BType2": 3463132580,
  "BType3": 3692679425,
  "Buccaneer": 3612755468,
  "Buccaneer2": 3281516360,
  "Buffalo": 3990165190,
  "Buffalo2": 736902334,
  "Buffalo3": 237764926,
  "Bulldozer": 1886712733,
  "Bullet": 2598821281,
  "Burrito": 2948279460,
  "Burrito2": 3387490166,
  "Burrito3": 2551651283,
  "Burrito4": 893081117,
  "Burrito5": 1132262048,
  "Bus": 3581397346,
  "Buzzard": 788747387,
  "Buzzard2": 745926877,
  "CableCar": 3334677549,
  "Caddy": 1147287684,
  "Caddy2": 3757070668,
  "Caddy3": 3525819835,
  "Camper": 1876516712,
  "Carbonizzare": 2072687711,
  "CarbonRS": 11251904,
  "Cargobob": 4244420235,
  "Cargobob2": 1621617168,
  "Cargobob3": 1394036463,
  "Cargobob4": 2025593404,
  "CargoPlane": 368211810,
  "Casco": 941800958,
  "Cavalcade": 2006918058,
  "Cavalcade2": 3505073125,
  "Cheetah": 2983812512,
  "Cheetah2": 223240013,
  "Chimera": 6774487,
  "Chino": 349605904,
  "Chino2": 2933279331,
  "Cliffhanger": 390201602,
  "Coach": 2222034228,
  "Cog55": 906642318,
  "Cog552": 704435172,
  "CogCabrio": 330661258,
  "Cognoscenti": 2264796000,
  "Cognoscenti2": 3690124666,
  "Comet2": 3249425686,
  "Comet3": 2272483501,
  "Contender": 683047626,
  "Coquette": 108773431,
  "Coquette2": 1011753235,
  "Coquette3": 784565758,
  "Cruiser": 448402357,
  "Crusader": 321739290,
  "Cuban800": 3650256867,
  "Cutter": 3288047904,
  "Daemon": 2006142190,
  "Daemon2": 2890830793,
  "Defiler": 822018448,
  "Diablous": 4055125828,
  "Diablous2": 1790834270,
  "Dilettante": 3164157193,
  "Dilettante2": 1682114128,
  "Dinghy": 1033245328,
  "Dinghy2": 276773164,
  "Dinghy3": 509498602,
  "Dinghy4": 867467158,
  "DLoader": 1770332643,
  "DockTrailer": 2154757102,
  "Docktug": 3410276810,
  "Dodo": 3393804037,
  "Dominator": 80636076,
  "Dominator2": 3379262425,
  "Double": 2623969160,
  "Dubsta": 1177543287,
  "Dubsta2": 3900892662,
  "Dubsta3": 3057713523,
  "Dukes": 723973206,
  "Dukes2": 3968823444,
  "Dump": 2164484578,
  "Dune": 2633113103,
  "Dune2": 534258863,
  "Dune3": 1897744184,
  "Dune4": 3467805257,
  "Dune5": 3982671785,
  "Duster": 970356638,
  "Elegy": 196747873,
  "Elegy2": 3728579874,
  "Emperor": 3609690755,
  "Emperor2": 2411965148,
  "Emperor3": 3053254478,
  "Enduro": 1753414259,
  "EntityXF": 3003014393,
  "Esskey": 2035069708,
  "Exemplar": 4289813342,
  "F620": 3703357000,
  "Faction": 2175389151,
  "Faction2": 2504420315,
  "Faction3": 2255212070,
  "Faggio": 2452219115,
  "Faggio2": 55628203,
  "Faggio3": 3005788552,
  "FBI": 1127131465,
  "FBI2": 2647026068,
  "FCR": 627535535,
  "FCR2": 3537231886,
  "Felon": 3903372712,
  "Felon2": 4205676014,
  "Feltzer2": 2299640309,
  "Feltzer3": 2728226064,
  "FireTruk": 1938952078,
  "Fixter": 3458454463,
  "Flatbed": 1353720154,
  "Forklift": 1491375716,
  "FMJ": 1426219628,
  "FQ2": 3157435195,
  "Freight": 1030400667,
  "FreightCar": 184361638,
  "FreightCont1": 920453016,
  "FreightCont2": 240201337,
  "FreightGrain": 642617954,
  "FreightTrailer": 3517691494,
  "Frogger": 744705981,
  "Frogger2": 1949211328,
  "Fugitive": 1909141499,
  "Furoregt": 3205927392,
  "Fusilade": 499169875,
  "Futo": 2016857647,
  "Gargoyle": 741090084,
  "Gauntlet": 2494797253,
  "Gauntlet2": 349315417,
  "GBurrito": 2549763894,
  "GBurrito2": 296357396,
  "Glendale": 75131841,
  "GP1": 1234311532,
  "GrainTrailer": 1019737494,
  "Granger": 2519238556,
  "Gresley": 2751205197,
  "Guardian": 2186977100,
  "Habanero": 884422927,
  "Hakuchou": 1265391242,
  "Hakuchou2": 4039289119,
  "HalfTrack": 4262731174,
  "Handler": 444583674,
  "Hauler": 1518533038,
  "Hauler2": 387748548,
  "Hexer": 301427732,
  "Hotknife": 37348240,
  "Huntley": 486987393,
  "Hydra": 970385471,
  "Infernus": 418536135,
  "Infernus2": 2889029532,
  "Ingot": 3005245074,
  "Innovation": 4135840458,
  "Insurgent": 2434067162,
  "Insurgent2": 2071877360,
  "Insurgent3": 2370534026,
  "Intruder": 886934177,
  "Issi2": 3117103977,
  "ItaliGTB": 2246633323,
  "ItaliGTB2": 3812247419,
  "Jackal": 3670438162,
  "JB700": 1051415893,
  "Jester": 2997294755,
  "Jester2": 3188613414,
  "Jet": 1058115860,
  "Jetmax": 861409633,
  "Journey": 4174679674,
  "Kalahari": 92612664,
  "Khamelion": 544021352,
  "Kuruma": 2922118804,
  "Kuruma2": 410882957,
  "Landstalker": 1269098716,
  "Lazer": 3013282534,
  "LE7B": 3062131285,
  "Lectro": 640818791,
  "Lguard": 469291905,
  "Limo2": 4180339789,
  "Lurcher": 2068293287,
  "Luxor": 621481054,
  "Luxor2": 3080673438,
  "Lynx": 482197771,
  "Mamba": 2634021974,
  "Mammatus": 2548391185,
  "Manana": 2170765704,
  "Manchez": 2771538552,
  "Marquis": 3251507587,
  "Marshall": 1233534620,
  "Massacro": 4152024626,
  "Massacro2": 3663206819,
  "Maverick": 2634305738,
  "Mesa": 914654722,
  "Mesa2": 3546958660,
  "Mesa3": 2230595153,
  "MetroTrain": 868868440,
  "Miljet": 165154707,
  "Minivan": 3984502180,
  "Minivan2": 3168702960,
  "Mixer": 3510150843,
  "Mixer2": 475220373,
  "Monroe": 3861591579,
  "Monster": 3449006043,
  "Moonbeam": 525509695,
  "Moonbeam2": 1896491931,
  "Mower": 1783355638,
  "Mule": 904750859,
  "Mule2": 3244501995,
  "Mule3": 2242229361,
  "Nemesis": 3660088182,
  "Nero": 1034187331,
  "Nero2": 1093792632,
  "Nightblade": 2688780135,
  "Nightshade": 2351681756,
  "NightShark": 433954513,
  "Nimbus": 2999939664,
  "Ninef": 1032823388,
  "Ninef2": 2833484545,
  "Omnis": 3517794615,
  "Oppressor": 884483972,
  "Oracle": 1348744438,
  "Oracle2": 3783366066,
  "Osiris": 1987142870,
  "Packer": 569305213,
  "Panto": 3863274624,
  "Paradise": 1488164764,
  "Patriot": 3486509883,
  "PBus": 2287941233,
  "PCJ": 3385765638,
  "Penetrator": 2536829930,
  "Penumbra": 3917501776,
  "Peyote": 1830407356,
  "Pfister811": 2465164804,
  "Phantom": 2157618379,
  "Phantom2": 2645431192,
  "Phantom3": 177270108,
  "Phoenix": 2199527893,
  "Picador": 1507916787,
  "Pigalle": 1078682497,
  "Police": 2046537925,
  "Police2": 2667966721,
  "Police3": 1912215274,
  "Police4": 2321795001,
  "Policeb": 4260343491,
  "PoliceOld1": 2758042359,
  "PoliceOld2": 2515846680,
  "PoliceT": 456714581,
  "Polmav": 353883353,
  "Pony": 4175309224,
  "Pony2": 943752001,
  "Pounder": 2112052861,
  "Prairie": 2844316578,
  "Pranger": 741586030,
  "Predator": 3806844075,
  "Premier": 2411098011,
  "Primo": 3144368207,
  "Primo2": 2254540506,
  "PropTrailer": 356391690,
  "Prototipo": 2123327359,
  "Radi": 2643899483,
  "RakeTrailer": 390902130,
  "RancherXL": 1645267888,
  "RancherXL2": 1933662059,
  "RallyTruck": 2191146052,
  "RapidGT": 2360515092,
  "RapidGT2": 1737773231,
  "Raptor": 3620039993,
  "RatBike": 1873600305,
  "RatLoader": 3627815886,
  "RatLoader2": 3705788919,
  "Reaper": 234062309,
  "Rebel": 3087195462,
  "Rebel2": 2249373259,
  "Regina": 4280472072,
  "RentalBus": 3196165219,
  "Rhapsody": 841808271,
  "Rhino": 782665360,
  "Riot": 3089277354,
  "Ripley": 3448987385,
  "Rocoto": 2136773105,
  "Romero": 627094268,
  "Rubble": 2589662668,
  "Ruffian": 3401388520,
  "Ruiner": 4067225593,
  "Ruiner2": 941494461,
  "Ruiner3": 777714999,
  "Rumpo": 1162065741,
  "Rumpo2": 2518351607,
  "Rumpo3": 1475773103,
  "Ruston": 719660200,
  "SabreGT": 2609945748,
  "SabreGT2": 223258115,
  "Sadler": 3695398481,
  "Sadler2": 734217681,
  "Sanchez": 788045382,
  "Sanchez2": 2841686334,
  "Sanctus": 1491277511,
  "Sandking": 3105951696,
  "Sandking2": 989381445,
  "Savage": 4212341271,
  "Schafter2": 3039514899,
  "Schafter3": 2809443750,
  "Schafter4": 1489967196,
  "Schafter5": 3406724313,
  "Schafter6": 1922255844,
  "Schwarzer": 3548084598,
  "Scorcher": 4108429845,
  "Scrap": 2594165727,
  "Seashark": 3264692260,
  "Seashark2": 3678636260,
  "Seashark3": 3983945033,
  "Seminole": 1221512915,
  "Sentinel": 1349725314,
  "Sentinel2": 873639469,
  "Serrano": 1337041428,
  "Seven70": 2537130571,
  "Shamal": 3080461301,
  "Sheava": 819197656,
  "Sheriff": 2611638396,
  "Sheriff2": 1922257928,
  "Shotaro": 3889340782,
  "Skylift": 1044954915,
  "SlamVan": 729783779,
  "SlamVan2": 833469436,
  "SlamVan3": 1119641113,
  "Sovereign": 743478836,
  "Specter": 1886268224,
  "Specter2": 1074745671,
  "Speeder": 231083307,
  "Speeder2": 437538602,
  "Speedo": 3484649228,
  "Speedo2": 728614474,
  "Squalo": 400514754,
  "Stalion": 1923400478,
  "Stalion2": 3893323758,
  "Stanier": 2817386317,
  "Stinger": 1545842587,
  "StingerGT": 2196019706,
  "Stockade": 1747439474,
  "Stockade3": 4080511798,
  "Stratum": 1723137093,
  "Stretch": 2333339779,
  "Stunt": 2172210288,
  "Submersible": 771711535,
  "Submersible2": 3228633070,
  "Sultan": 970598228,
  "SultanRS": 3999278268,
  "Suntrap": 4012021193,
  "Superd": 1123216662,
  "Supervolito": 710198397,
  "Supervolito2": 2623428164,
  "Surano": 384071873,
  "Surfer": 699456151,
  "Surfer2": 2983726598,
  "Surge": 2400073108,
  "Swift2": 1075432268,
  "Swift": 3955379698,
  "T20": 1663218586,
  "Taco": 1951180813,
  "Tailgater": 3286105550,
  "Tampa": 972671128,
  "Tampa2": 3223586949,
  "Tampa3": 3084515313,
  "Tanker": 3564062519,
  "Tanker2": 1956216962,
  "TankerCar": 586013744,
  "Taxi": 3338918751,
  "Technical": 2198148358,
  "Technical2": 1180875963,
  "Technical3": 1356124575,
  "Tempesta": 272929391,
  "Thrust": 1836027715,
  "TipTruck": 48339065,
  "TipTruck2": 3347205726,
  "Titan": 1981688531,
  "Torero": 1504306544,
  "Tornado": 464687292,
  "Tornado2": 1531094468,
  "Tornado3": 1762279763,
  "Tornado4": 2261744861,
  "Tornado5": 2497353967,
  "Tornado6": 2736567667,
  "Toro": 1070967343,
  "Toro2": 908897389,
  "Tourbus": 1941029835,
  "TowTruck": 2971866336,
  "TowTruck2": 3852654278,
  "TR2": 2078290630,
  "TR3": 1784254509,
  "TR4": 2091594960,
  "Tractor": 1641462412,
  "Tractor2": 2218488798,
  "Tractor3": 1445631933,
  "TrailerLogs": 2016027501,
  "TrailerLarge": 1502869817,
  "Trailers": 3417488910,
  "Trailers2": 2715434129,
  "Trailers3": 2236089197,
  "Trailers4": 3194418602,
  "TrailerSmall": 712162987,
  "TrailerSmall2": 2413121211,
  "Trash": 1917016601,
  "Trash2": 3039269212,
  "TRFlat": 2942498482,
  "TriBike": 1127861609,
  "TriBike2": 3061159916,
  "TriBike3": 3894672200,
  "TrophyTruck": 101905590,
  "TrophyTruck2": 3631668194,
  "Tropic": 290013743,
  "Tropic2": 1448677353,
  "Tropos": 1887331236,
  "Tug": 2194326579,
  "Turismor": 408192225,
  "Turismo2": 3312836369,
  "TVTrailer": 2524324030,
  "Tyrus": 2067820283,
  "UtilliTruck": 516990260,
  "UtilliTruck2": 887537515,
  "UtilliTruck3": 2132890591,
  "Vacca": 338562499,
  "Vader": 4154065143,
  "Vagner": 1939284556,
  "Valkyrie": 2694714877,
  "Valkyrie2": 1543134283,
  "Velum": 2621610858,
  "Velum2": 1077420264,
  "Verlierer2": 1102544804,
  "Vestra": 1341619767,
  "Vigero": 3469130167,
  "Vindicator": 2941886209,
  "Virgo": 3796912450,
  "Virgo2": 3395457658,
  "Virgo3": 16646064,
  "Volatus": 2449479409,
  "Voltic": 2672523198,
  "Voltic2": 989294410,
  "Voodoo": 2006667053,
  "Voodoo2": 523724515,
  "Vortex": 3685342204,
  "Warrener": 1373123368,
  "Washington": 1777363799,
  "Wastelander": 2382949506,
  "Windsor": 1581459400,
  "Windsor2": 2364918497,
  "Wolfsbane": 3676349299,
  "XA21": 917809321,
  "XLS": 1203490606,
  "XLS2": 3862958888,
  "Youga": 65402552,
  "Youga2": 1026149675,
  "Zentorno": 2891838741,
  "Zion": 3172678083,
  "Zion2": 3101863448,
  "ZombieA": 3285698347,
  "ZombieB": 3724934023,
  "ZType": 758895617
}

export default vehicles