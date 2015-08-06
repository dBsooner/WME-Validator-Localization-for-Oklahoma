// ==UserScript==
// @name                WME Validator Localization for Oklahoma
// @namespace           https://greasyfork.org/en/scripts/11505-wme-validator-localization-for-oklahoma
// @version             2.0.2
// @author              dBsooner | turnertr
// @description         This script localizes WME Validator for United States/Oklahoma. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//
/*
  See Settings->About->Available checks for complete list of checks and their params.
  Examples:
  Enable #170 "Lowercase street name" but allow lowercase "exit" and "to":
    "170.enabled": true,
    "170.params": {
        "regexp": "/^((exit|to) )?[a-z]/",
    "},
  Enable #130 "Custom check" to find a dot in street names, but allow dots at Ramps:
    "130.enabled": true,
    "130.params": {
        "titleEN": "Street name with a dot",
        "problemEN": "There is a dot in the street name (excluding Ramps)",
        "solutionEN": "Expand the abbreviation or remove the dot",
        "template": "${type}:${street}",
        "regexp": "D/^[^4][0-9]?:.*\\./",
    },
    *Note: use D at the beginning of RegExp to enable debugging on JS console.
    *Note: do not forget to escape backslashes in strings, i.e. use "\\" instead of "\".
	
	TODO: Add better EXIT check similar to what I did in Massachusetts. 
*/
window.WME_Validator_United_States = {
  ".country": "United States/Oklahoma",
  ".codeISO": "US",
  ".author": "dBsooner",
  ".updated": "2015-08-06",
  ".link": "TODO: ",
  
   //Default US checks
  "27.enabled": !0,
  "90.enabled": !0,
  "106.enabled": !0,
  "112.enabled": !1,
  "170.enabled": !0,
  "170.params": {
	"regexp": "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": !0,
  "171.solutionLink": "W:Abbreviations_&_Acronyms#Standard_Suffix_Abbreviations",
  
 "130.enabled": true,
 "130.params": {
	"titleEN": "Not Oklahoma",
	"problem": "The segment is assigned to another state",
	"solutionEN": "Make sure you are editing in OK and change it or disable script when working in another state",
	"template": "${state}",
	"regexp": "!/Oklahoma/"
  },
  "130.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",   
  "131.enabled": true,
  "131.params": {
	"titleEN": "Wrong banner abbreviation",
	"problemEN": "Banner abbreviation may be incorrect. Abbreviations ALT, BUS, BYP, CONN, LOOP, and SPUR should be in ALL CAPS",
	"solutionEN": "Change banner abbreviation to ALT, BUS, BYP, CONN, LOOP, SPUR, or TRUCK",
	"template": "${street}#${altStreet[#]}",
	"regexp": "/[0-9]+[A-Z]? ([Aa]lt(ernate)?|[Bb](us(iness)?|yp(ass)?)|[Cc]onn(ector)?|[Ll]oop|[Ss]pur|[Tt]ruck)/"
  },
  "131.solutionLink": "W:Road_names/USA#United_States_Numbered_Highways",
  "132.enabled": true,
  "132.params": {
	"titleEN": "Incorrect Segment Name",
	"problemEN": "Oklahoma uses CR for county road, SH for state highway, US for national highway, and I for interstate names",
	"solutionEN": "Rename the Street or Alt Street",
	"template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/^Oklahoma:.*(?!(SH|CR|US|I)-[0-9]{1,3} ?[A-Za-z]{0,5})([Ii](- | -|-|=| =|= )?|[Uu]\.?[Ss]\.?( [Hh](WY|wy|ighway)| Rte| -|- |-|=| =|= )?|([Oo][Kk]|[Ss]tate|[Cc](ounty|[Oo])) ?([Hh](WY|wy|ighway)|[Rr][Dd]|Rte)|(([Oo][Kk]|([Ss]|[Cc])([Hh]|[Rr]))(- | -|-|=| =|= ))) ?[0-9]{1,3} ?[A-Za-z]{0,5}/"
  },
  "132.solutionLink": "W:Oklahoma",
  // ADD INTERSTATE TO THIS CHECK, INCLUDING ALL EXTENSIONS FOR INTERSTATES
  "133.enabled": true,
  "133.params": {
	"titleEN": "Wrong road type (major)",
	"problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
	"solutionEN": "Change the road type to Major Highway",
	"template": "${typeRank}:#${street}@#${altStreet[@#]}@",
	"regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "133.solutionLink": "W:Road_types/USA#Major_Highway",
  // ADD EXTRA EXTENSIONS TO THIS CHECK
  "134.enabled": true,
  "134.params": {
	"titleEN": "Wrong road type (minor)",
	"problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
	"solutionEN": "Change the road type to Minor Highway",
	"template": "${typeRank}:#${street}@#${altStreet[@#]}@",
	"regexp": "/^[1-9][^2-5]:.*#((State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*|(US Hwy |US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?)@/i"
  },
  "134.solutionLink": "W:Road_types/USA#Minor_Highway",
  "135.enabled": true,
  "135.params": {
	"titleEN": "Wrong road type (primary)",
	"problemEN": "All State BUS, SPUR, LOOP Highways should be at least Primary Street type",
	"solutionEN": "Change the road type to Primary Street",
	"template": "${typeRank}:#${street}@#${altStreet[@#]}@",
	"regexp": "/^[1-9][^1-5]:.*#(State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?@/i"
  },
  "135.solutionLink": "W:Road_types/USA#Primary_Street",
  "136.enabled": true,    
  //"136.severity": "warning",
  "136.params": {
	"titleEN": "Tulsa Metro: Incorrect Street Name Format",
	"problemEN": "Tulsa Metro Street Types: N/S Segments should not have East/West abbreviated. E/W Segments south of Admiral and East of Main should not have trailing 'S' or 'South'. (Excludes ramps)",
	"solutionEN": "Rename the Street or Alt Street",
	"template": "${type}#${state}:@${city}:${street}@#${altStreet[@#]}@",
      //New Check for N/S with East/West instead of E/W.
      //^(?!4).*Oklahoma:.*(@Tulsa:(E|East) [0-9]{1,3}(st|nd|rd|th) (St|Street|Pl|Ct|Cr|Cir) S)|((N(orth)?|S(outh)?) ?[0-9]{1,3}(st|nd|rd|th|) ?(West|East) ?(Av|Pl|Ct|Cr|Cir))
	"regexp": "/^(?!4).*Oklahoma:.*(@Tulsa:(E|East) [0-9]{1,3}(st|nd|rd|th) (St|Street|Pl|Ct|Cr|Cir) S)|((N |S )[0-9]{1,3}(st|nd|rd|th|) ?[WE]? ?(Av|Pl|Ct|Cr|Cir))/i"
  },
  "136.solutionLink": "W:Oklahoma#Roads",    
  "137.enabled": true,
  "137.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr or St or Dr where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/^([SNEW] )+(St |Dr )|^St |^Dr |Jr |Rev /"
  },
  "137.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations",
  //Freeway Lock
  "150.enabled": true,
  "150.params": {
	  "n": 5,
  },
  //Major Highway Lock
  "151.enabled": true,
  "151.params": {
	  "n": 4,
  },
  //Minor Highway Lock
  "152.enabled": true,
  "152.enabled": {
	  "n": 3,
  },
  //Ramp Lock
  "153.enabled": true,
    "153.params": {
	  "n": 2,
  },
  //Primary Street Lock
  "154.enabled": true,
  "154.params": {
	  "n": 2,
  },
};
