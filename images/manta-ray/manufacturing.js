/* Manufacturing plan for AquaMorph (from the team's manufacturing operation sheets).
   Loaded automatically by the project page. */
window.PROJECT_DATA = window.PROJECT_DATA || {};
window.PROJECT_DATA["manta-ray"] = window.PROJECT_DATA["manta-ray"] || {};
window.PROJECT_DATA["manta-ray"].manufacturing = [
 {
  "part": "Body",
  "material": "PLA (3D printed), epoxy/UV resin coat",
  "drawing": "02-body",
  "processes": [
   "3D printing",
   "Resin coating",
   "Threading / inserts"
  ],
  "steps": [
   {
    "op": "3D Print",
    "desc": "Print Manta Ray body in PLA",
    "equip": "FDM 3D Printer Ultimaker S5",
    "notes": "Layer height 0.2mm Infill 20%"
   },
   {
    "op": "Support Removal",
    "desc": "Remove support structures from print",
    "equip": "Hand tool",
    "notes": ""
   },
   {
    "op": "Surface Prep",
    "desc": "Sand and clean printed body",
    "equip": "Sandpaper cloth",
    "notes": "Require smooth surface for resin coat"
   },
   {
    "op": "Threading",
    "desc": "Add threaded holes",
    "equip": "Tap kit",
    "notes": "M3"
   },
   {
    "op": "Resin Coating",
    "desc": "Apply epoxy or UV resin to seal body",
    "equip": "Resin and brush",
    "notes": "Use proper ventilation and gloves"
   },
   {
    "op": "Curing",
    "desc": "Allow resin to fully cure",
    "equip": "Ambient or UV",
    "notes": ""
   },
   {
    "op": "Final Debur and Polish",
    "desc": "Light sanding or polishing after resin cure",
    "equip": "Fine sandpaper",
    "notes": "Optional"
   }
  ]
 },
 {
  "part": "Lid",
  "material": "PLA (3D printed), resin coat",
  "drawing": "03-lid",
  "processes": [
   "3D printing",
   "Resin coating",
   "Threading / inserts"
  ],
  "steps": [
   {
    "op": "3D Print",
    "desc": "Print lid in PLA",
    "equip": "FDM 3D Printer Ultimaker S5",
    "notes": "Layer height 0.2mm Infill 20-30%"
   },
   {
    "op": "Support Removal",
    "desc": "Remove support structures from print",
    "equip": "Hand tool",
    "notes": "May use pliers or tweezers"
   },
   {
    "op": "Surface Prep",
    "desc": "Sand and clean lid surface",
    "equip": "Sandpaper cloth",
    "notes": "Require smooth surface for resin coat"
   },
   {
    "op": "Fit Check",
    "desc": "Test fit to Manta Ray body",
    "equip": "Hand tools",
    "notes": ""
   },
   {
    "op": "Threading",
    "desc": "Add threaded holes",
    "equip": "Tap kit",
    "notes": "M3"
   },
   {
    "op": "Resin Coating",
    "desc": "Apply epoxy or UV resin to seal body",
    "equip": "Resin and brush",
    "notes": "Use proper ventilation and gloves"
   },
   {
    "op": "Curing",
    "desc": "Allow resin to fully cure",
    "equip": "Ambient or UV",
    "notes": ""
   },
   {
    "op": "Final Debur and Polish",
    "desc": "Light sanding or polishing after resin cure",
    "equip": "Fine sandpaper",
    "notes": "Optional"
   },
   {
    "op": "Inspection",
    "desc": "Check fit, sealing and surface quality",
    "equip": "Visual inspection",
    "notes": "Check that the resin did not interfere with the fit"
   }
  ]
 },
 {
  "part": "Gasket",
  "material": "Reinforced neoprene sheet",
  "drawing": "04-gasket",
  "processes": [
   "Hand cutting"
  ],
  "steps": [
   {
    "op": "Material Prep",
    "desc": "Cut gasket sheet to rough size",
    "equip": "Scissors",
    "notes": "Use neoprene reinforced sheet from McMaster"
   },
   {
    "op": "Trace and Mark",
    "desc": "Trace lid body onto gasket",
    "equip": "Marker",
    "notes": "Check correct shape and hole placement"
   },
   {
    "op": "Precision Cut",
    "desc": "Cut out traced gasket shape",
    "equip": "X-acto or utility knife",
    "notes": "Ensure accurate contour"
   },
   {
    "op": "Hole Punching",
    "desc": "Create holes for screws",
    "equip": "Hole punch",
    "notes": "Ensure no overlaps"
   },
   {
    "op": "Fit Check",
    "desc": "Align gasket between body and lid",
    "equip": "Manual fitting",
    "notes": "Ensure no overlaps"
   },
   {
    "op": "Assembly Ready",
    "desc": "Clean surface",
    "equip": "",
    "notes": "Apply gasket adhesive if needed"
   }
  ]
 },
 {
  "part": "Electronics box: body",
  "material": "PLA (3D printed)",
  "drawing": "08-electronics-box-body",
  "processes": [
   "3D printing",
   "Resin coating",
   "Threading / inserts"
  ],
  "steps": [
   {
    "op": "3D Print",
    "desc": "Print electronic box body using PLA",
    "equip": "FDM 3D Printer Ultimaker S5",
    "notes": "Layer height 0.2 mm; Infill 30–40%"
   },
   {
    "op": "Support Removal",
    "desc": "Remove internal and external supports",
    "equip": "Hand tools",
    "notes": "May use pliers or tweezers as needed"
   },
   {
    "op": "Surface Prep",
    "desc": "Sand and Clean surface",
    "equip": "Sandpaper, cloth",
    "notes": ""
   },
   {
    "op": "Hole cleanup",
    "desc": "Drill/ream wire ports if undersized",
    "equip": "Hand drill",
    "notes": ""
   },
   {
    "op": "Threading",
    "desc": "Add threaded inserts for lid screws",
    "equip": "Insert tool",
    "notes": "M3"
   },
   {
    "op": "Fit Check",
    "desc": "Test fit",
    "equip": "Hand tools",
    "notes": "Adjust design as needed"
   },
   {
    "op": "Resin Coating",
    "desc": "Apply resin coat to add water resistance",
    "equip": "Resin and brush",
    "notes": "Use proper ventilation and gloves. Optional step."
   },
   {
    "op": "Final Inspection",
    "desc": "Verify dimensions",
    "equip": "Caliper",
    "notes": ""
   }
  ]
 },
 {
  "part": "Electronics box: lid",
  "material": "Acrylic sheet (laser cut)",
  "drawing": "09-electronics-box-lid",
  "processes": [
   "Laser cutting",
   "Threading / inserts"
  ],
  "steps": [
   {
    "op": "Material Prep",
    "desc": "Clean surface of acrylic sheet",
    "equip": "Acrylic cleaner",
    "notes": ""
   },
   {
    "op": "Laser cutting",
    "desc": "Cut lid profile and mounting holes from DXF file",
    "equip": "Laser Cutter",
    "notes": "Use low speed passes for thick acrylic, secure sheet flat"
   },
   {
    "op": "Deburring and edge prep",
    "desc": "Engrave outlines",
    "equip": "Deburring tool, file",
    "notes": ""
   },
   {
    "op": "Fit check",
    "desc": "Align with electronics box body and mounting holes",
    "equip": "Manual fitting",
    "notes": "Verify hole alignment"
   },
   {
    "op": "Assembly Ready",
    "desc": "Add threaded inserts for lid screws",
    "equip": "Insert tool",
    "notes": "M3"
   },
   {
    "op": "Fit Check",
    "desc": "Test fit",
    "equip": "Hand tools",
    "notes": "Adjust design as needed"
   },
   {
    "op": "Assembly Ready",
    "desc": "Clean and prep for final assembly",
    "equip": "Cloth",
    "notes": ""
   }
  ]
 },
 {
  "part": "Wing actuators",
  "material": "Dragon Skin 10 silicone, cast in PLA molds",
  "drawing": "06-wing-actuator",
  "processes": [
   "3D printing",
   "Silicone casting",
   "Vacuum degassing",
   "Bonding"
  ],
  "steps": [
   {
    "op": "3D Print Mold",
    "desc": "Print actuator mold using PLA",
    "equip": "FDM 3D Printer",
    "notes": ""
   },
   {
    "op": "Post Process Mold",
    "desc": "Remove supports",
    "equip": "Hand tools",
    "notes": "May use sandpaper to smooth out walls"
   },
   {
    "op": "Silicone preparation",
    "desc": "Mix silicone elastomer parts A and B",
    "equip": "Smooth-On Dragon Skin 10 kit",
    "notes": ""
   },
   {
    "op": "Degas Silicone",
    "desc": "Remove air bubbles via vacuum chamber",
    "equip": "Vacuum chamber",
    "notes": ""
   },
   {
    "op": "Silicone Casting",
    "desc": "Pour or inject silicone into mold cavity",
    "equip": "Funnels or syringes",
    "notes": "Fill slowly to avoid trapping air"
   },
   {
    "op": "Curing",
    "desc": "Allow silicone to cure completely",
    "equip": "Ambient",
    "notes": "Follow cure time"
   },
   {
    "op": "Demolding",
    "desc": "Carefully remove cured actuator from mold",
    "equip": "Hand tools",
    "notes": "Use mold release spray as needed"
   },
   {
    "op": "Post Process",
    "desc": "Trim and clean edges to remove any defects",
    "equip": "X-Acto knife",
    "notes": ""
   },
   {
    "op": "Bonding",
    "desc": "Attach actuators to wings and body",
    "equip": "Silicone adhesive",
    "notes": "May add a resin coat to ensure strong adhesion"
   }
  ]
 },
 {
  "part": "Hydraulic gear pump",
  "material": "PLA (3D printed) + motor",
  "drawing": "10-gear-pump",
  "processes": [
   "3D printing",
   "Assembly"
  ],
  "steps": [
   {
    "op": "3D Print Components",
    "desc": "Print pump housing, rotor, gears and other parts in PLA",
    "equip": "FDM 3D printer",
    "notes": "Use fine detail for tight tolerances"
   },
   {
    "op": "Support Removal",
    "desc": "Remove supports",
    "equip": "Hand tools",
    "notes": "May use tweezers or pliers to aid"
   },
   {
    "op": "Surface Prep",
    "desc": "Sand mating surfaces",
    "equip": "Sandpaper",
    "notes": "Ensure smooth low friction surfaces"
   },
   {
    "op": "Assembly",
    "desc": "Assemble printed parts",
    "equip": "Hand tools, adhesive (optional)",
    "notes": ""
   },
   {
    "op": "Motor integration",
    "desc": "Attach motor",
    "equip": "Manual fitting",
    "notes": "Align with shaft"
   },
   {
    "op": "Tubing Connection",
    "desc": "Connect inlet and outlet",
    "equip": "Manual fitting",
    "notes": "Ensure leak-free fit"
   },
   {
    "op": "Final Inspection",
    "desc": "Visual and functional check",
    "equip": "Sensors, multimeter, and manual fitting",
    "notes": "Verify sealing, flow and rotation"
   }
  ]
 },
 {
  "part": "Actuator cap",
  "material": "Acrylic sheet (laser cut)",
  "drawing": "07-actuator-cap",
  "processes": [
   "Laser cutting",
   "Threading / inserts"
  ],
  "steps": [
   {
    "op": "Material Prep",
    "desc": "Clean surface of acrylic sheet",
    "equip": "Acrylic cleaner",
    "notes": ""
   },
   {
    "op": "Laser cutting",
    "desc": "Cut lid profile and mounting holes from DXF file",
    "equip": "Laser Cutter",
    "notes": "Use low speed passes for thick acrylic, secure sheet flat"
   },
   {
    "op": "Deburring and edge prep",
    "desc": "Engrave outlines",
    "equip": "Deburring tool, file",
    "notes": ""
   },
   {
    "op": "Fit check",
    "desc": "Align with electronics box body and mounting holes",
    "equip": "Manual fitting",
    "notes": "Verify hole alignment"
   },
   {
    "op": "Assembly Ready",
    "desc": "Add threaded inserts for lid screws",
    "equip": "Insert tool",
    "notes": "M3"
   },
   {
    "op": "Fit Check",
    "desc": "Test fit",
    "equip": "Hand tools",
    "notes": "Adjust design as needed"
   },
   {
    "op": "Assembly Ready",
    "desc": "Clean and prep for final assembly",
    "equip": "Cloth",
    "notes": ""
   }
  ]
 },
 {
  "part": "Wings",
  "material": "1/8 in silicone sheet",
  "drawing": "05-wing",
  "processes": [
   "Hand cutting"
  ],
  "steps": [
   {
    "op": "Raw Stock",
    "desc": "1/8 in thick silicone sheet",
    "equip": "Printed template",
    "notes": "print and trace template onto sheet"
   },
   {
    "op": "Cut",
    "desc": "Cut 2 wing profiles",
    "equip": "Xacto Knife",
    "notes": ""
   },
   {
    "op": "Fit check",
    "desc": "Test fit with actuators and body",
    "equip": "Manual fitting",
    "notes": ""
   },
   {
    "op": "Assembly Ready",
    "desc": "Clean and prep for assembly",
    "equip": "Cloth",
    "notes": ""
   }
  ]
 }
];
