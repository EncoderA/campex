var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.028283241100133694,
        "pitch": 0,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": -0.002585986646606031,
          "pitch": 0.19488525432881332,
          "rotation": 0,
          "target": "2-g1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3015420181244757,
          "pitch": 0.02328703170491586,
          "title": "C building",
          "text": "<div>IT</div><div>AIDS and Electrical</div><div>E&amp;TC</div><div>Instrumentation</div>Civil"
        }
      ],
       // 🎧 Add this new line for audio
      "audio": "audio/mainkbtcoe.mp3",
      "guideText": "Welcome to MVP Samaj’s Karmaveer Adv. Baburao Ganpatrao Thakare College of Engineering, Nashik — proudly known as KBTCOE.Established in 1999, the college stands as one of the most reputed institutions under the MVP Samaj, and is affiliated to Savitribai Phule Pune University.With the vision of nurturing innovation, leadership, and excellence, KBTCOE offers world-class education in engineering and technology."
    },
    {
      "id": "1-gymkhana",
      "name": "gymkhana",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.190073528128206,
        "pitch": 0.18555356619144092,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": -3.073110392445873,
          "pitch": 0.14223162913747167,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.8689297067312349,
          "pitch": 0.08784373854799021,
          "rotation": 6.283185307179586,
          "target": "2-g1"
        }
      ],
      "infoHotspots": [],
  
      "audio": "audio/gymkhana.mp3",
      "guideText": "The Gymkhana, located to the left of the C-Building entrance, promotes sports and fitness among students.It includes facilities for cricket, football, volleyball, basketball, and several indoor games.KBTCOE believes in nurturing both academic and physical well-being, encouraging students to participate in annual sports events and inter-college tournaments."
    },
    {
      "id": "2-g1",
      "name": "g1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3495471992819219,
        "pitch": 0.021786928446367426,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": -0.05544792378250207,
          "pitch": 0.15787737158835569,
          "rotation": 0,
          "target": "3-g2"
        },
        {
          "yaw": 1.5606120688438416,
          "pitch": 0.22992375509295115,
          "rotation": 0,
          "target": "6-g4-lab2"
        },
        {
          "yaw": -1.864398249423033,
          "pitch": 0.3198837104915686,
          "rotation": 0,
          "target": "1-gymkhana"
        },
        {
          "yaw": 3.0028782998673407,
          "pitch": 0.14847719503365475,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.6352223116443891,
          "pitch": 0.2911593534488084,
          "rotation": 0,
          "target": "10-g-center"
        },
        {
          "yaw": 1.7518759948160678,
          "pitch": 0.05548880673505252,
          "rotation": 0.7853981633974483,
          "target": "12-11"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7654369109271286,
          "pitch": -0.20666855413231033,
          "title": "GymKhana",
          "text": "Text"
        }
      ],

      "audio": "audio/c-building.mp3",
      "guideText": "Next, we visit Building C, which is a vibrant mix of multiple engineering branches.The Civil Engineering Department occupies the lower floors, featuring specialized labs like the Surveying Lab, Concrete Technology Lab, and Geotechnical Engineering Lab.The Information Technology and Artificial Intelligence & Data Science Departments focus on digital innovation and research in emerging technologies.The Instrumentation & Control, Electronics and Telecommunication, and Electrical Engineering Departments are also located here, with well-equipped labs for circuit design, automation, and embedded systems.The Seminar Hall in this building hosts guest lectures, technical talks, and cultural programs throughout the year.To the left of the entrance of Building C, you’ll find the Gymkhana, which includes both indoor and outdoor sports facilities for students."
    },
    {
      "id": "3-g2",
      "name": "g2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5034679563887767,
        "pitch": 0.18301173651758162,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": -1.5934242476617015,
          "pitch": 0.17948325893618033,
          "rotation": 0,
          "target": "4-g3"
        },
        {
          "yaw": 2.0989610479421588,
          "pitch": 0.39481764783754514,
          "rotation": 0.7853981633974483,
          "target": "8-civil-sem-hall1"
        },
        {
          "yaw": -0.020665283034434268,
          "pitch": 0.14785356450599885,
          "rotation": 0,
          "target": "2-g1"
        },
        {
          "yaw": 1.6587850502665757,
          "pitch": 0.008938101219833072,
          "rotation": 0,
          "target": "13-12"
        },
        {
          "yaw": -0.8320394580341546,
          "pitch": 0.2559072742861286,
          "rotation": 0,
          "target": "10-g-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.84785642648459,
          "pitch": 0.11335842311211586,
          "title": "Vending Machine",
          "text": "SNACKITO"
        },
        {
          "yaw": 1.0167920514897268,
          "pitch": 0.07014120098283705,
          "title": "Purchase Department&nbsp;",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-g3",
      "name": "g3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.6820116904920823,
        "pitch": 0.08302729023076338,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": 2.623285874128232,
          "pitch": 0.2078766063342652,
          "rotation": 5.497787143782138,
          "target": "7-g3-lab"
        },
        {
          "yaw": 0.020644044401420203,
          "pitch": 0.18303031024456828,
          "rotation": 0,
          "target": "3-g2"
        },
        {
          "yaw": -1.5633430637147434,
          "pitch": 0.14599042109591664,
          "rotation": 0,
          "target": "5-g4-lab1"
        },
        {
          "yaw": -0.7640388094739308,
          "pitch": 0.24652105118614465,
          "rotation": 0,
          "target": "10-g-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.636359248771793,
          "pitch": 0.011959966680002765,
          "title": "Department Library",
          "text": "Text"
        },
        {
          "yaw": 0.8321687332335497,
          "pitch": 0.07595377701060713,
          "title": "Civil dep HOD Cabin",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-g4-lab1",
      "name": "g4-lab1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9906821452830528,
          "pitch": 0.20936527051138043,
          "rotation": 10.995574287564278,
          "target": "2-g1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-g4-lab2",
      "name": "g4-lab2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.40735592204264925,
        "pitch": 0.07962661276372529,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": 0.26416956284223403,
          "pitch": 0.029855677605766573,
          "rotation": 1.5707963267948966,
          "target": "2-g1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-g3-lab",
      "name": "g3-lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04710818370406322,
          "pitch": 0.3799347085606932,
          "rotation": 6.283185307179586,
          "target": "4-g3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-civil-sem-hall1",
      "name": "civil sem hall1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.103611356532081,
          "pitch": 0.13408284989052177,
          "rotation": 5.497787143782138,
          "target": "3-g2"
        },
        {
          "yaw": -3.1406279571674514,
          "pitch": -0.029877007958095447,
          "rotation": 3.141592653589793,
          "target": "9-civil-sem-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-civil-sem-hall2",
      "name": "civil sem hall2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8588908723174313,
          "pitch": 0.22947831749001324,
          "rotation": 0.7853981633974483,
          "target": "3-g2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-g-center",
      "name": "g-center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.708143252153624,
          "pitch": 0.03746942168974243,
          "rotation": 6.283185307179586,
          "target": "2-g1"
        },
        {
          "yaw": 3.1285350920157935,
          "pitch": -0.05961495856955956,
          "rotation": 6.283185307179586,
          "target": "9-civil-sem-hall2"
        },
        {
          "yaw": 0.010104857219708663,
          "pitch": -0.023189356737923106,
          "rotation": 0,
          "target": "12-11"
        },
        {
          "yaw": -2.395689745548955,
          "pitch": -0.006088518083569028,
          "rotation": 6.283185307179586,
          "target": "4-g3"
        },
        {
          "yaw": 2.449838320629909,
          "pitch": 0.020742193881458704,
          "rotation": 0,
          "target": "3-g2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0028853103558966,
          "pitch": -0.06870867214956711,
          "title": "Seminar Hall",
          "text": "Civil"
        },
        {
          "yaw": 0.8256680528595179,
          "pitch": -0.08491932513161338,
          "title": "GymKhana",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-14",
      "name": "1.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.803427179180705,
        "pitch": 0.09135746541107181,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": -0.034523865123702535,
          "pitch": 0.18971155070465784,
          "rotation": 0,
          "target": "16-13"
        },
        {
          "yaw": -1.5730836819882619,
          "pitch": 0.13961367916695444,
          "rotation": 0,
          "target": "12-11"
        },
        {
          "yaw": 1.912896873856159,
          "pitch": 0.1026191154705085,
          "rotation": 0,
          "target": "18-14-lab"
        },
        {
          "yaw": -1.752279238411571,
          "pitch": 0.05517323313753231,
          "rotation": 5.497787143782138,
          "target": "20-21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-11",
      "name": "1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7577618363586449,
        "pitch": 0.010383788396051585,
        "fov": 1.2682066683119317
      },
      "linkHotspots": [
        {
          "yaw": -1.5151547531829177,
          "pitch": 0.15002716397754057,
          "rotation": 0,
          "target": "13-12"
        },
        {
          "yaw": 0.053429955020185105,
          "pitch": 0.18552053986542205,
          "rotation": 0,
          "target": "11-14"
        },
        {
          "yaw": 0.29510955424410135,
          "pitch": 0.00714034596498081,
          "rotation": 0.7853981633974483,
          "target": "20-21"
        },
        {
          "yaw": 0.31955351182795155,
          "pitch": 0.17089746504524328,
          "rotation": 2.356194490192345,
          "target": "2-g1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-12",
      "name": "1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.723817301935668,
        "pitch": -0.06622317288697133,
        "fov": 1.2682066683119317
      },
      "linkHotspots": [
        {
          "yaw": -3.0825603385636544,
          "pitch": 0.4165825616261998,
          "rotation": 0,
          "target": "14-12-chem-lab"
        },
        {
          "yaw": -2.0645558264795874,
          "pitch": 0.27028193632483344,
          "rotation": 5.497787143782138,
          "target": "15-12-phy-lab"
        },
        {
          "yaw": 1.8248736679486628,
          "pitch": 0.30130946377318324,
          "rotation": 9.42477796076938,
          "target": "3-g2"
        },
        {
          "yaw": 1.3412364932263117,
          "pitch": 0.23811006673908253,
          "rotation": 0,
          "target": "22-22"
        },
        {
          "yaw": -1.4717582664556996,
          "pitch": 0.1744177287975095,
          "rotation": 0,
          "target": "16-13"
        },
        {
          "yaw": 0.03559772936355721,
          "pitch": 0.1251073150208306,
          "rotation": 0,
          "target": "12-11"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0992056370506376,
          "pitch": 0.18800117987510667,
          "title": "Engineering&nbsp; Chemistry Lab",
          "text": "Text"
        },
        {
          "yaw": -2.09808526747028,
          "pitch": 0.09838623427587834,
          "title": "Engineering Physics Lab",
          "text": "Text"
        }
      ]
    },
    {
      "id": "14-12-chem-lab",
      "name": "1.2-chem lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08619851215429719,
          "pitch": 0.035444106350343674,
          "rotation": 1.5707963267948966,
          "target": "13-12"
        },
        {
          "yaw": -0.3432409427961307,
          "pitch": 0.087181798001577,
          "rotation": 4.71238898038469,
          "target": "15-12-phy-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-12-phy-lab",
      "name": "1.2-phy lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7205636057827327,
          "pitch": 0.19943317725364906,
          "rotation": 0,
          "target": "13-12"
        },
        {
          "yaw": 1.067088323640771,
          "pitch": 0.06864585116509403,
          "rotation": 1.5707963267948966,
          "target": "14-12-chem-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-13",
      "name": "1.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7670852850753214,
        "pitch": -0.010293533676119182,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": -0.03237173767984203,
          "pitch": 0.20338947990926926,
          "rotation": 0,
          "target": "13-12"
        },
        {
          "yaw": -1.567495695313701,
          "pitch": 0.20643333387180718,
          "rotation": 0,
          "target": "11-14"
        },
        {
          "yaw": -2.2766728826798506,
          "pitch": 0.25118115626716886,
          "rotation": 0,
          "target": "17-13-mechanics-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.290393659773878,
          "pitch": 0.0605569363282612,
          "title": "Engineering Mechanics Lab",
          "text": "Text"
        },
        {
          "yaw": 0.7647925152929584,
          "pitch": -0.02449490304149471,
          "title": "HOD Cabin Electrical Departement",
          "text": "Text"
        }
      ]
    },
    {
      "id": "17-13-mechanics-lab",
      "name": "1.3 mechanics lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.866484598228201,
          "pitch": 0.18335952543868217,
          "rotation": 0,
          "target": "16-13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-14-lab",
      "name": "1.4 lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05285668099580221,
          "pitch": 0.18196928218642228,
          "rotation": 1.5707963267948966,
          "target": "11-14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-23",
      "name": "2.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8836772433629285,
        "pitch": -0.09655071524782244,
        "fov": 1.2682066683119317
      },
      "linkHotspots": [
        {
          "yaw": -1.8670056773045864,
          "pitch": 0.23681487651920818,
          "rotation": 0,
          "target": "24-23--lab"
        },
        {
          "yaw": 0.008643979451754547,
          "pitch": 0.14013932424810704,
          "rotation": 0,
          "target": "21-24"
        },
        {
          "yaw": 1.4956639152865945,
          "pitch": 0.17318948699038117,
          "rotation": 0,
          "target": "22-22"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2114792951976545,
          "pitch": -0.04133646170086536,
          "title": "HOD Cabin Instrumentation dept",
          "text": "Text"
        }
      ]
    },
    {
      "id": "20-21",
      "name": "2.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7286455205833526,
        "pitch": -0.08642358778594073,
        "fov": 1.2682066683119317
      },
      "linkHotspots": [
        {
          "yaw": 0.27182985433861084,
          "pitch": 0.1939786974599329,
          "rotation": 2.356194490192345,
          "target": "12-11"
        },
        {
          "yaw": 0.2365147177939324,
          "pitch": 0.0058865577651108225,
          "rotation": 0.7853981633974483,
          "target": "25-31"
        },
        {
          "yaw": -0.03981489729101284,
          "pitch": 0.16110923655632092,
          "rotation": 0,
          "target": "21-24"
        },
        {
          "yaw": -1.6489642446886865,
          "pitch": 0.1714889275561866,
          "rotation": 0,
          "target": "22-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-24",
      "name": "2.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7356183127670075,
        "pitch": -0.08411140154350782,
        "fov": 1.2682066683119317
      },
      "linkHotspots": [
        {
          "yaw": -0.008761168777427386,
          "pitch": 0.1442262572461086,
          "rotation": 0,
          "target": "19-23"
        },
        {
          "yaw": -1.5624658261668003,
          "pitch": 0.11914481394718734,
          "rotation": 0,
          "target": "20-21"
        },
        {
          "yaw": 1.847565097820584,
          "pitch": 0.2182340434881631,
          "rotation": 0,
          "target": "23-24-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8486875873116393,
          "pitch": 0.07195535866939196,
          "title": "Transducer&nbsp; and Biomedical Lab",
          "text": "Text"
        },
        {
          "yaw": 2.9580253268311765,
          "pitch": 0.05307779663225176,
          "title": "Computer lab",
          "text": "PMS lab"
        }
      ]
    },
    {
      "id": "22-22",
      "name": "2.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.779340319850883,
        "pitch": 0.08840983496982702,
        "fov": 1.2682066683119317
      },
      "linkHotspots": [
        {
          "yaw": -0.08065565160471877,
          "pitch": 0.18369765725882736,
          "rotation": 0,
          "target": "20-21"
        },
        {
          "yaw": 1.420268698884028,
          "pitch": 0.1947524453965066,
          "rotation": 0,
          "target": "28-32"
        },
        {
          "yaw": 1.9662339442091037,
          "pitch": 0.40992948345563107,
          "rotation": 3.141592653589793,
          "target": "13-12"
        },
        {
          "yaw": -1.56231335224337,
          "pitch": 0.2251351216514461,
          "rotation": 0,
          "target": "19-23"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-24-lab",
      "name": "2.4-lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07094636576714386,
          "pitch": 0.21642397163105542,
          "rotation": 0,
          "target": "21-24"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-23--lab",
      "name": "2.3 -lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9719245232037395,
          "pitch": 0.07746893678414679,
          "rotation": 1.5707963267948966,
          "target": "19-23"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-31",
      "name": "3.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7481202810168774,
        "pitch": -0.0037978930334752192,
        "fov": 1.2682066683119317
      },
      "linkHotspots": [
        {
          "yaw": -0.07227887019933199,
          "pitch": 0.23824974342609018,
          "rotation": 0,
          "target": "28-32"
        },
        {
          "yaw": 1.4074906042324855,
          "pitch": 0.2334963094973581,
          "rotation": 0,
          "target": "26-34"
        },
        {
          "yaw": 1.6147089025252255,
          "pitch": 0.17580102474848402,
          "rotation": 2.356194490192345,
          "target": "20-21"
        },
        {
          "yaw": 1.6131904395723087,
          "pitch": 0.031122283260813788,
          "rotation": 0.7853981633974483,
          "target": "31-41"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-34",
      "name": "3.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.014828175283570388,
          "pitch": 0.11514363485108703,
          "rotation": 0,
          "target": "27-33"
        },
        {
          "yaw": -1.5853525896190224,
          "pitch": 0.1606724410539897,
          "rotation": 0,
          "target": "25-31"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-33",
      "name": "3.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02559780500760489,
          "pitch": 0.167347612740814,
          "rotation": 0,
          "target": "28-32"
        },
        {
          "yaw": -1.558594522766203,
          "pitch": 0.17042339482360624,
          "rotation": 0,
          "target": "26-34"
        },
        {
          "yaw": 3.081697647565651,
          "pitch": 0.17091709688560996,
          "rotation": 0,
          "target": "30-33-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-32",
      "name": "3.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.027113425648686,
        "pitch": 0.11296798537088293,
        "fov": 1.2682066683119317
      },
      "linkHotspots": [
        {
          "yaw": 1.9343470837637815,
          "pitch": 0.4011042650318579,
          "rotation": 3.141592653589793,
          "target": "22-22"
        },
        {
          "yaw": 1.4343426768147935,
          "pitch": 0.1955872509085932,
          "rotation": 0,
          "target": "32-42"
        },
        {
          "yaw": -3.075609536974749,
          "pitch": 0.2570040120046908,
          "rotation": 0,
          "target": "29-32-lab"
        },
        {
          "yaw": -1.4820334236412442,
          "pitch": 0.17789655508759594,
          "rotation": 0,
          "target": "27-33"
        },
        {
          "yaw": 0.02748428120669466,
          "pitch": 0.2007017337202157,
          "rotation": 0,
          "target": "25-31"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-32-lab",
      "name": "3.2-lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.482987497249459,
        "pitch": 0.09340942969603816,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": -0.1587105319212121,
          "pitch": 0.15136112477851782,
          "rotation": 0.7853981633974483,
          "target": "28-32"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-33-lab",
      "name": "3.3-lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0917308419197802,
          "pitch": 0.15874789935768518,
          "rotation": 0,
          "target": "27-33"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-41",
      "name": "4.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17381788575214507,
          "pitch": 0.03211321323084704,
          "rotation": 0.7853981633974483,
          "target": "37-51"
        },
        {
          "yaw": 0.19995217779520758,
          "pitch": 0.23299462161417317,
          "rotation": 2.356194490192345,
          "target": "25-31"
        },
        {
          "yaw": -0.0977304107129342,
          "pitch": 0.24473477398803212,
          "rotation": 0,
          "target": "33-44"
        },
        {
          "yaw": -1.497060409996406,
          "pitch": 0.18837649224914088,
          "rotation": 0,
          "target": "32-42"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-42",
      "name": "4.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.9521607871325131,
        "pitch": 0.07371306054180948,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": 1.491829262742658,
          "pitch": 0.14477206427878642,
          "rotation": 0,
          "target": "31-41"
        },
        {
          "yaw": -0.02333887859408179,
          "pitch": 0.16757295908499437,
          "rotation": 0,
          "target": "34-43"
        },
        {
          "yaw": 2.881443903621303,
          "pitch": 0.17873359113639253,
          "rotation": 0,
          "target": "36-52"
        },
        {
          "yaw": -2.902094688246418,
          "pitch": 0.35474620750636454,
          "rotation": 3.141592653589793,
          "target": "28-32"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-44",
      "name": "4.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0661987366278716,
        "pitch": 0.07750640893728367,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": 1.610655940381534,
          "pitch": 0.1501645760540491,
          "rotation": 0,
          "target": "34-43"
        },
        {
          "yaw": -0.021745461627684648,
          "pitch": 0.16542848126132448,
          "rotation": 0,
          "target": "31-41"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-43",
      "name": "4.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.008897307238296293,
          "pitch": 0.2046931345853178,
          "rotation": 0,
          "target": "32-42"
        },
        {
          "yaw": -1.5575211862093212,
          "pitch": 0.17548631302823203,
          "rotation": 0,
          "target": "33-44"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-53",
      "name": "5.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8578504730845395,
          "pitch": 0.2471896045194235,
          "rotation": 0,
          "target": "43-53-lab"
        },
        {
          "yaw": 1.6255755325641568,
          "pitch": 0.16926417828159224,
          "rotation": 0,
          "target": "36-52"
        },
        {
          "yaw": -0.013328880979315727,
          "pitch": 0.18129815114735948,
          "rotation": 0,
          "target": "38-54"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.427804162992695,
          "pitch": -0.05216132249383598,
          "title": "HOD cabin",
          "text": "Text"
        },
        {
          "yaw": -1.8551816029176322,
          "pitch": 0.041496349024161105,
          "title": "Project Lab",
          "text": "Text"
        }
      ]
    },
    {
      "id": "36-52",
      "name": "5.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5666342914008915,
        "pitch": 0.17030258814832422,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": 0.004549385885452395,
          "pitch": 0.24754551340881825,
          "rotation": 0,
          "target": "37-51"
        },
        {
          "yaw": 1.89358177197788,
          "pitch": 0.44951862608134974,
          "rotation": 3.141592653589793,
          "target": "32-42"
        },
        {
          "yaw": -1.5228584556549603,
          "pitch": 0.18881789764696677,
          "rotation": 0,
          "target": "35-53"
        },
        {
          "yaw": -1.8980114259890506,
          "pitch": 0.3907822241313923,
          "rotation": 4.71238898038469,
          "target": "42-52-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-51",
      "name": "5.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.187628615319003,
          "pitch": 0.1541469139918945,
          "rotation": 2.356194490192345,
          "target": "31-41"
        },
        {
          "yaw": -0.08089464829656379,
          "pitch": 0.21841417909098837,
          "rotation": 0,
          "target": "38-54"
        },
        {
          "yaw": -1.5454582003473547,
          "pitch": 0.19220129192838442,
          "rotation": 0,
          "target": "36-52"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-54",
      "name": "5.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8151037877156604,
        "pitch": 0.05461915105587778,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": 0.0019708723266980144,
          "pitch": 0.17781448036557812,
          "rotation": 0,
          "target": "35-53"
        },
        {
          "yaw": -1.640197795614963,
          "pitch": 0.17913223099731823,
          "rotation": 0,
          "target": "37-51"
        },
        {
          "yaw": 3.0250498596131674,
          "pitch": 0.2326661664722316,
          "rotation": 0.7853981633974483,
          "target": "39-54-lab"
        },
        {
          "yaw": 2.747716131992574,
          "pitch": 0.2246828843341646,
          "rotation": 4.71238898038469,
          "target": "41-54-2lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0143809099998293,
          "pitch": 0.09235248573364885,
          "title": "Computer Network Lab",
          "text": "Text"
        },
        {
          "yaw": 2.7437266642426863,
          "pitch": 0.08502148062952841,
          "title": "Programming Lab",
          "text": "Text"
        }
      ]
    },
    {
      "id": "39-54-lab",
      "name": "5.4-lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6309041208758366,
        "pitch": 0.1243204652381138,
        "fov": 1.2912494743184422
      },
      "linkHotspots": [
        {
          "yaw": -0.07616345171405925,
          "pitch": 0.3540586852665797,
          "rotation": 0,
          "target": "38-54"
        },
        {
          "yaw": 1.285970004940193,
          "pitch": 0.10586152048276531,
          "rotation": 0.7853981633974483,
          "target": "41-54-2lab"
        },
        {
          "yaw": 2.9998598739490374,
          "pitch": -0.012316768293443303,
          "rotation": 3.141592653589793,
          "target": "40-54-lab2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-54-lab2",
      "name": "5.4-lab2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11015857213836,
          "pitch": 0.16938967480377087,
          "rotation": 0,
          "target": "39-54-lab"
        },
        {
          "yaw": 2.5353903368795123,
          "pitch": 0.09940526006741557,
          "rotation": 4.71238898038469,
          "target": "41-54-2lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-54-2lab",
      "name": "5.4-2lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.002965831815018305,
          "pitch": 0.10929835616651573,
          "rotation": 4.71238898038469,
          "target": "38-54"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-52-classroom",
      "name": "5.2-classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10080314689690795,
          "pitch": 0.168801882310067,
          "rotation": 0.7853981633974483,
          "target": "36-52"
        },
        {
          "yaw": 2.468450087365934,
          "pitch": 0.05998367125003412,
          "rotation": 4.71238898038469,
          "target": "36-52"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-53-lab",
      "name": "5.3-lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.869634306108404,
          "pitch": 0.20415796757486682,
          "rotation": 0,
          "target": "35-53"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Campex",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
