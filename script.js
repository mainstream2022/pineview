(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
  "this.Container_DEDF4A98_F0ED_7944_417F_DF928D1D1E99",
  "this.Container_F37BB950_FD49_0388_41EF_3532BDE53D18",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_EB571A2B_FD57_0616_41E6_E35AE34E42C4]); this.init(); if(!this.get('fullscreenAvailable')) { [this.IconButton_FC719D78_EFAD_3BC4_4198_F28607540662].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "initialPosition": {
  "yaw": 169.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1550A75_D0C2_2594_41E0_C4CEA8E6FB89",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W02",
 "hfovMin": "135%",
 "id": "panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884",
 "overlays": [
  "this.overlay_E1CFBF01_FAD8_B54D_41C2_C575D599907F",
  "this.overlay_E1AD7EFF_FAD9_D4B4_41E8_EA1E9BD42660"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25"
  },
  {
   "backwardYaw": -8.59,
   "yaw": -116.14,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 60.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C2F8AB42_D0C2_5BEC_41E6_E025EF11290B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 136.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C2CE6B34_D0C2_5B94_41C7_9BB4FB847405",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -55.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1258A60_D0C2_25AC_41E0_B40B98700BF5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_C19949A1_D0C2_26AC_41A8_760D2ACC8132, 0)",
   "media": "this.album_EB9DA772_F9A0_E32F_41D3_EB6B34903327",
   "player": "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32FPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_C19949A1_D0C2_26AC_41A8_760D2ACC8132",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -8.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C20ABB67_D0C2_5BB4_41E0_8B8B8590C6FE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 63.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C2185B5A_D0C2_5B9C_41CF_D2EEBAE0F170",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PhotoAlbum",
 "thumbnailUrl": "media/album_EB9DA772_F9A0_E32F_41D3_EB6B34903327_t.png",
 "id": "album_EB9DA772_F9A0_E32F_41D3_EB6B34903327",
 "label": "Photo Album molave",
 "playList": "this.album_EB9DA772_F9A0_E32F_41D3_EB6B34903327_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": 171.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1CD9A0E_D0C2_2575_41E2_E07F219B06C7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 117,
  "yaw": -166.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C2BCCB04_D0C2_5B75_41B1_BE3AC2031C6E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_EB571A2B_FD57_0616_41E6_E35AE34E42C4.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_EB571A2B_FD57_0616_41E6_E35AE34E42C4",
 "data": {
  "label": "love"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A1",
 "hfovMin": "138%",
 "id": "panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC",
 "overlays": [
  "this.overlay_E32239F1_F0E2_786E_41B3_844CE52DD642",
  "this.overlay_E32249F1_F0E2_786E_41D4_C7896573D9E9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -10.6,
   "yaw": 106.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_t.jpg",
 "hfovMax": 124
},
{
 "initialPosition": {
  "yaw": -53.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1FD1A19_D0C2_259F_41DC_AE3BE9B4879D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W08",
 "hfovMin": "135%",
 "id": "panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A",
 "overlays": [
  "this.overlay_D8DB339A_FAE8_4D7C_41E6_1C4CFA547013"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -65.28,
   "yaw": -173.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -176.37,
  "class": "PanoramaCameraPosition",
  "pitch": -9.28
 },
 "class": "PanoramaCamera",
 "id": "panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "children": [
  {
   "label": "AERIALS",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "A0Out",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "A1",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "A2",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "A3",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "A4",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "A5",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "A6",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "A7",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "A8",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "A9",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  },
  {
   "label": "W0Out",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "MenuItem"
  },
  {
   "label": "W01",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "MenuItem"
  },
  {
   "label": "W02",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "MenuItem"
  },
  {
   "label": "W03",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "MenuItem"
  },
  {
   "label": "W04",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "MenuItem"
  },
  {
   "label": "W05",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "MenuItem"
  },
  {
   "label": "W06",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "MenuItem"
  },
  {
   "label": "W07",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "MenuItem"
  },
  {
   "label": "W08",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "MenuItem"
  },
  {
   "label": "W09",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "MenuItem"
  },
  {
   "label": "GATE",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_EB9DA772_F9A0_E32F_41D3_EB6B34903327_0_t.jpg",
 "id": "album_EB9DA772_F9A0_E32F_41D3_EB6B34903327_0",
 "width": 2908,
 "label": "Molave House Model",
 "image": {
  "levels": [
   {
    "url": "media/album_EB9DA772_F9A0_E32F_41D3_EB6B34903327_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2720
},
{
 "initialPosition": {
  "yaw": 37.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C13BEA49_D0C2_25FC_41CC_F22D83573FFD",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 179.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1182A31_D0C2_25AF_41DC_C545313B35AE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_C061499E_D0C2_2694_41B1_64CAB6A3D18C, [this.htmltext_C061999E_D0C2_2694_41C7_78D9052B1A1D,this.component_C061C99E_D0C2_2694_41D7_762624CF15D8,this.component_C061F99E_D0C2_2694_41D0_4EE12AC880DE], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_C061299D_D0C2_2694_418F_B1A21F63F2A0"
 ],
 "id": "playList_C061199D_D0C2_2694_41D9_ED737A525169"
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_0_t.jpg",
 "id": "album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_0",
 "width": 4000,
 "label": "original-Pineview-Vicinity-Map",
 "image": {
  "levels": [
   {
    "url": "media/album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2772
},
{
 "initialPosition": {
  "hfov": 131,
  "yaw": -7.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C2911AD3_D0C2_5A93_4131_C5C6C57DFA42",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W04",
 "hfovMin": "135%",
 "id": "panorama_E3A48716_EF4B_03ED_4197_CAC078968906",
 "overlays": [
  "this.overlay_DB6595F4_FAE8_D4B4_41E7_572D21C2877B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -93.08,
   "yaw": -43.87,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 112,
  "yaw": 3.5,
  "class": "PanoramaCameraPosition",
  "pitch": -1.67
 },
 "class": "PanoramaCamera",
 "id": "panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 174.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1B999D0_D0C2_26EC_41D1_314852D8EDE2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 29.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C10A5A3D_D0C2_2597_41A0_17E5938C1E23",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -95.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1DDF9FF_D0C2_2693_419E_B4CBCB40E6E6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 120.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1B129DC_D0C2_2694_41E4_ECE1C896494F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 124,
  "yaw": 160.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C2DE9B26_D0C2_5BB4_41A1_862067D71AC1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3A48716_EF4B_03ED_4197_CAC078968906_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E39C0742_EF49_0265_41E7_B06059E075F4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W07",
 "hfovMin": "135%",
 "id": "panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2",
 "overlays": [
  "this.overlay_D83609AC_FAE8_BD54_4191_5BE0D007AE7A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 124.77,
   "yaw": 171.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 22.36,
  "class": "PanoramaCameraPosition",
  "pitch": -3.11
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A3",
 "hfovMin": "135%",
 "id": "panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD",
 "overlays": [
  "this.overlay_E30DED3C_F0FE_79D5_41E1_491C6A01FE7C",
  "this.overlay_E5176CE1_F0EE_B86F_41E4_FF7D06CBDDC3",
  "this.overlay_EDD49E6B_F957_1894_41E8_56D2370E3B7C",
  "this.overlay_E509FD58_F9A9_38B4_41CF_A848DBA84592"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 172.52,
   "yaw": 69.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4"
  },
  {
   "backwardYaw": 140.28,
   "yaw": 114.41,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2"
  },
  {
   "backwardYaw": 13.72,
   "yaw": -62.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39C0742_EF49_0265_41E7_B06059E075F4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A2",
 "hfovMin": "135%",
 "id": "panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900",
 "overlays": [
  "this.overlay_E2ABFBE4_F0E2_D875_41C2_957B7877C933",
  "this.overlay_E48E4CC4_F0E2_78B6_41E6_200D89F2DBC2",
  "this.overlay_ECA5AE3F_F97F_38EC_41D4_C3008074A5EE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4"
  },
  {
   "backwardYaw": -62.61,
   "yaw": 13.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -140.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1E8DA25_D0C2_25B7_41AB_AF8F3856BEFF",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -15.87,
  "class": "PanoramaCameraPosition",
  "pitch": -8.75
 },
 "class": "PanoramaCamera",
 "id": "panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W06",
 "hfovMin": "135%",
 "id": "panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38",
 "overlays": [
  "this.overlay_DBBD8C87_FAD7_FB54_41EA_9A78628496CA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 84.83,
   "yaw": -119.09,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -110.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1AA39E7_D0C2_26B3_41BC_EBFDC02BE1B6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W05",
 "hfovMin": "135%",
 "id": "panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A7",
 "hfovMin": "135%",
 "id": "panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4",
 "overlays": [
  "this.overlay_E5FEFE94_F0E2_78D6_41E2_9B29460794EB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 69.38,
   "yaw": 172.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_t.jpg",
 "hfovMax": 138
},
{
 "initialPosition": {
  "yaw": 86.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1773AA7_D0C2_5AB4_41E1_C9D3040AE288",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_camera"
  },
  {
   "media": "this.panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_camera"
  },
  {
   "media": "this.panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_camera"
  },
  {
   "media": "this.panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_camera"
  },
  {
   "media": "this.panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_camera"
  },
  {
   "media": "this.panorama_E39C0742_EF49_0265_41E7_B06059E075F4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E39C0742_EF49_0265_41E7_B06059E075F4_camera"
  },
  {
   "media": "this.panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_camera"
  },
  {
   "media": "this.panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_camera"
  },
  {
   "media": "this.panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_camera"
  },
  {
   "media": "this.panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_camera"
  },
  {
   "media": "this.panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_camera"
  },
  {
   "media": "this.panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_camera"
  },
  {
   "media": "this.panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_camera"
  },
  {
   "media": "this.panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_camera"
  },
  {
   "media": "this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_camera"
  },
  {
   "media": "this.panorama_E3A48716_EF4B_03ED_4197_CAC078968906",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E3A48716_EF4B_03ED_4197_CAC078968906_camera"
  },
  {
   "media": "this.panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_camera"
  },
  {
   "media": "this.panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_camera"
  },
  {
   "media": "this.panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_camera"
  },
  {
   "media": "this.panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_camera"
  },
  {
   "media": "this.panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_camera"
  },
  {
   "media": "this.panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 114.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C2AC5B19_D0C2_5B9C_41B4_ED8DDF8F74DE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1476A91_D0C2_256C_41E2_ED96A6112AEA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 117,
  "yaw": 70.76,
  "class": "PanoramaCameraPosition",
  "pitch": -6.25
 },
 "class": "PanoramaCamera",
 "id": "panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W03",
 "hfovMin": "135%",
 "id": "panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA",
 "overlays": [
  "this.overlay_DA671ABE_FAD8_5CB7_41E8_BA5309388D82",
  "this.overlay_E46B2EDD_FAD8_74F5_41E5_F9A9642FBFC6",
  "this.overlay_E401B51C_FADB_B574_41D3_E5983B1D38DF",
  "this.overlay_E59881E3_FAE8_CCCC_41E8_3580514B7710",
  "this.overlay_DB1B1B3F_FAE9_BDB5_41D2_CAA9AFC1CEDF",
  "this.overlay_DA0E4E35_FAE8_B7B4_41C6_0A75ECD2082C",
  "this.overlay_DB27FC86_FAF8_7B54_41DA_5F98185C2D55"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -19.64,
   "yaw": -150.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649"
  },
  {
   "backwardYaw": -43.87,
   "yaw": -93.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A48716_EF4B_03ED_4197_CAC078968906"
  },
  {
   "backwardYaw": -119.09,
   "yaw": 84.83,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38"
  },
  {
   "backwardYaw": -173.8,
   "yaw": -65.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F"
  },
  {
   "backwardYaw": -116.14,
   "yaw": -8.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884"
  },
  {
   "backwardYaw": 171.39,
   "yaw": 124.77,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 131,
  "yaw": 15.08,
  "class": "PanoramaCameraPosition",
  "pitch": 5.53
 },
 "class": "PanoramaCamera",
 "id": "panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A8",
 "hfovMin": "135%",
 "id": "panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2",
 "overlays": [
  "this.overlay_E5C38C96_F0E2_D8D5_41DF_C78F7AA0E471"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 114.41,
   "yaw": 140.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "AERIALS",
 "hfovMin": "139%",
 "id": "panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961",
 "overlays": [
  "this.overlay_D6A5056E_F0A7_4BDD_41D2_E7F633C51DAE",
  "this.overlay_D8ACEC2C_F0A5_595D_4175_F83A9C2386E8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_t.jpg",
 "hfovMax": 105
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3A4C085_EF4B_7EEF_419F_EA901C48590F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W01",
 "hfovMin": "135%",
 "id": "panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B",
 "overlays": [
  "this.overlay_E1CE8C32_FAD7_DB4D_41E9_7D86DAA0CACC",
  "this.overlay_E1248EF1_FAD8_F4CD_41EB_243FDBDDBFC7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.71,
   "yaw": 135.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_t.jpg",
 "hfovMax": 130
},
{
 "class": "PhotoAlbum",
 "thumbnailUrl": "media/album_E5B10736_FAFB_D5B4_41B6_643385234725_t.png",
 "id": "album_E5B10736_FAFB_D5B4_41B6_643385234725",
 "label": "Photo Album WALLNUT",
 "playList": "this.album_E5B10736_FAFB_D5B4_41B6_643385234725_AlbumPlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A4",
 "hfovMin": "135%",
 "id": "panorama_E39C0742_EF49_0265_41E7_B06059E075F4",
 "overlays": [
  "this.overlay_EE47AABD_F97B_19EC_41EB_C7DEFBD39955",
  "this.overlay_E00BE39E_FA38_4D77_41D2_652D2399E6F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910"
  },
  {
   "backwardYaw": -59.38,
   "yaw": -0.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A5",
 "hfovMin": "135%",
 "id": "panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940",
 "overlays": [
  "this.overlay_E106DCE5_FA38_54D4_41AA_F62CA6BE45EF",
  "this.overlay_E6228E2D_FA2B_B754_41EE_0E1D7CB78957",
  "this.overlay_E0F68D39_FA28_D5BC_41E3_5CE8D98C2B79",
  "this.overlay_E26F3C3A_FAE0_E4D7_41C9_1D7CEA982009"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 126.97,
   "yaw": 163,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148"
  },
  {
   "backwardYaw": 39.18,
   "yaw": -142.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD"
  },
  {
   "backwardYaw": -0.9,
   "yaw": -59.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39C0742_EF49_0265_41E7_B06059E075F4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 6.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C2E86B4E_D0C2_5BF4_41E1_75C280F190A6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "GATE",
 "hfovMin": "135%",
 "id": "panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FA9A63B6_EF6C_31EF_41E5_F7E79ED10F62_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W09",
 "hfovMin": "135%",
 "id": "panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649",
 "overlays": [
  "this.overlay_E57B0770_FAE9_D5CC_41BF_A1097F0A7A40"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -150.46,
   "yaw": -19.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_t.jpg",
 "hfovMax": 135
},
{
 "initialPosition": {
  "hfov": 112,
  "yaw": -73.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C187C9C4_D0C2_26F4_41D4_83329CF22CDA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -39.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C282AAEE_D0C2_5AB5_41AC_530EC321D4DF",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_C19D39A7_D0C2_26B4_41E0_1EB14F43DFD2, 0)",
   "media": "this.album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2",
   "player": "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32FPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_C19D39A7_D0C2_26B4_41E0_1EB14F43DFD2",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "W0Out",
 "hfovMin": "135%",
 "id": "panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25",
 "overlays": [
  "this.overlay_E6487640_FA28_57CC_41E2_5032ACF4EA9B",
  "this.overlay_E5EE81F5_FAE8_4CB5_41B7_4D411E588139"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 135.75,
   "yaw": -5.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A0Out",
 "hfovMin": "135%",
 "id": "panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981",
 "overlays": [
  "this.overlay_E092D904_F08A_2B74_41B2_0B0EFAEC5295",
  "this.overlay_E0ACC229_F08A_19BC_41DC_13F24118D4E6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 106.78,
   "yaw": -10.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A9",
 "hfovMin": "135%",
 "id": "panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910",
 "overlays": [
  "this.overlay_E712D714_FA28_D574_41DB_127FB3799578"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -142.5,
   "yaw": 39.18,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "A6",
 "hfovMin": "135%",
 "id": "panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148",
 "overlays": [
  "this.overlay_E39D1F8C_FA39_D554_41E2_291FA33709C1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 163,
   "yaw": 126.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_C19659AD_D0C2_26B4_41E8_38D945FC1795",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5B10736_FAFB_D5B4_41B6_643385234725_0_t.jpg",
 "id": "album_E5B10736_FAFB_D5B4_41B6_643385234725_0",
 "width": 2932,
 "label": "WALLNUT",
 "image": {
  "levels": [
   {
    "url": "media/album_E5B10736_FAFB_D5B4_41B6_643385234725_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2696
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PhotoAlbum",
 "thumbnailUrl": "media/album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_t.png",
 "id": "album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2",
 "label": "Photo Album original-Pineview-Vicinity-Map",
 "playList": "this.album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_AlbumPlayList"
},
{
 "closeButtonBackgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "id": "window_F59F1A25_FA7A_1B65_41E2_C4A74E05F9BF",
 "backgroundOpacity": 1,
 "width": 600,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "closeButtonRollOverIconLineWidth": 1,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "height": 800,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "titleFontSize": "1.29vmin",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "shadowVerticalLength": 0,
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_F59ECA25_FA7A_1B65_41E4_1001AAEDCA70",
  "this.container_C061499E_D0C2_2694_41B1_64CAB6A3D18C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonPressedBorderColor": "#000000",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "class": "Window",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonRollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 3,
 "gap": 6,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "close": "this.playList_C061199D_D0C2_2694_41D9_ED737A525169.set('selectedIndex', -1);",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window3826"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -44.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C162EABC_D0C2_5A95_41AE_9F6E6A5A91CC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -65.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C1A1A9F3_D0C2_2693_41C1_65433EF30299",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -11.42,
  "class": "PanoramaCameraPosition",
  "pitch": -3.57
 },
 "class": "PanoramaCamera",
 "id": "panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 124,
  "yaw": -39.39,
  "class": "PanoramaCameraPosition",
  "pitch": -12.45
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 103,
  "yaw": 25.34,
  "class": "PanoramaCameraPosition",
  "pitch": -14.61
 },
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 25.34,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 1
 },
 "id": "panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetHfov": 103,
   "targetStereographicFactor": 0,
   "targetPitch": -14.61
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -161.41,
  "class": "PanoramaCameraPosition",
  "pitch": -3.17
 },
 "class": "PanoramaCamera",
 "id": "panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_C19F29A4_D0C2_26B4_4183_F9C861A19BEA, 0)",
   "media": "this.album_E5B10736_FAFB_D5B4_41B6_643385234725",
   "player": "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32FPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_C19F29A4_D0C2_26B4_4183_F9C861A19BEA",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "buttonPause": "this.IconButton_DEDEEA98_F0ED_7944_41B9_60276DE1A672",
 "viewerArea": "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32FPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonRestart": "this.IconButton_DEDE3A98_F0ED_7944_41C9_70133E4649F0"
},
{
 "buttonMoveRight": "this.IconButton_DEDE8A98_F0ED_7944_41C1_A0B6100476A4",
 "buttonZoomIn": "this.IconButton_DEDF5A98_F0ED_7944_41B6_41B2E0C4D2FD",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_D08BE838_F065_5945_41D4_56D96456CC20",
 "viewerArea": "this.MainViewer",
 "buttonPlayLeft": "this.IconButton_DEDE2A98_F0ED_7944_41CB_C0613906FEBF",
 "mouseControlMode": "drag_acceleration",
 "buttonMoveUp": "this.IconButton_DEDEFA98_F0ED_7944_41CE_E8CBB1347376",
 "id": "MainViewerPanoramaPlayer",
 "buttonMoveDown": "this.IconButton_DEDE9A98_F0ED_7944_41E2_7FDD115C9ECB",
 "buttonRestart": "this.IconButton_DEDE3A98_F0ED_7944_41C9_70133E4649F0",
 "buttonPause": "this.IconButton_DEDEEA98_F0ED_7944_41B9_60276DE1A672",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveLeft": "this.IconButton_DEDEDA98_F0ED_7944_41D0_C3EDC0162AE1",
 "touchControlMode": "drag_rotation",
 "buttonPlayRight": "this.IconButton_DEDEBA98_F0ED_7944_41D8_93F4118DB216",
 "buttonZoomOut": "this.IconButton_DEDE0A98_F0ED_7944_41E9_B586C0D04FA1"
},
{
 "initialPosition": {
  "yaw": 117.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_C135FA55_D0C2_2594_41D6_732453970E4F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "italic",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Times New Roman",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FF0000",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 5,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 5,
 "toolTipPaddingTop": 5,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 5,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "progressBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 5,
 "toolTipFontSize": "18px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "bold",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 5"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": "0%",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "76.71%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 117.6,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 162.45,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Image_F35BD1BC_EF9C_CABC_41D5_EA752597A8FA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 691,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "LOGO"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
 "left": "0%",
 "children": [
  "this.Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_DEDF4A98_F0ED_7944_417F_DF928D1D1E99",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_DEDE0A98_F0ED_7944_41E9_B586C0D04FA1",
  "this.IconButton_DEDE3A98_F0ED_7944_41C9_70133E4649F0",
  "this.IconButton_DEDE2A98_F0ED_7944_41CB_C0613906FEBF",
  "this.IconButton_DEDEDA98_F0ED_7944_41D0_C3EDC0162AE1",
  "this.Container_DEDECA98_F0ED_7944_41BD_90DCB95E94D6",
  "this.IconButton_DEDE8A98_F0ED_7944_41C1_A0B6100476A4",
  "this.IconButton_DEDEBA98_F0ED_7944_41D8_93F4118DB216",
  "this.IconButton_DEDF5A98_F0ED_7944_41B6_41B2E0C4D2FD"
 ],
 "scrollBarVisible": "rollOver",
 "right": "15.93%",
 "width": "30.706%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "hidden",
 "minHeight": 20,
 "propagateClick": false,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "minWidth": 20,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "height": "20.116%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "PLAYER"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_F37BB950_FD49_0388_41EF_3532BDE53D18",
 "backgroundOpacity": 0,
 "children": [
  "this.HTMLText_F0FAD837_FD4B_01F4_41B0_A17DCB7AD7E3"
 ],
 "scrollBarVisible": "rollOver",
 "right": "10.69%",
 "width": "65.557%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "12.88%",
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container1934"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "class": "UIComponent",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent3949"
 },
 "shadow": false,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "class": "ZoomImage",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage3950"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "iconHeight": 20,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "layout": "horizontal",
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "borderColor": "#000000",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minWidth": 0,
 "mode": "push",
 "class": "CloseButton",
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "data": {
  "name": "CloseButton3951"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 128,
 "maxWidth": 128,
 "id": "IconButton_FC719D78_EFAD_3BC4_4198_F28607540662",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "width": 49,
 "toolTipPaddingTop": 5,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 5,
 "verticalAlign": "middle",
 "toolTipBorderRadius": 5,
 "borderRadius": 0,
 "toolTipFontStyle": "italic",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Times New Roman",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTip": "Fullscreen",
 "toolTipShadowVerticalLength": 0,
 "height": 39,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "toolTipFontColor": "#FF0000",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 5,
 "transparencyActive": true,
 "toolTipFontSize": "18px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_FC719D78_EFAD_3BC4_4198_F28607540662.png",
 "data": {
  "name": "IconButton1493"
 },
 "shadow": false,
 "toolTipFontWeight": "bold",
 "cursor": "hand",
 "toolTipPaddingRight": 5
},
{
 "horizontalAlign": "center",
 "id": "IconButton_EBEA8B5D_F065_3FFF_41B7_7F5CE5D02DD5",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_EBEA8B5D_F065_3FFF_41B7_7F5CE5D02DD5_rollover.png",
 "propagateClick": false,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EBEA8B5D_F065_3FFF_41B7_7F5CE5D02DD5.png",
 "pressedIconURL": "skin/IconButton_EBEA8B5D_F065_3FFF_41B7_7F5CE5D02DD5_pressed.png",
 "data": {
  "name": "Button34604"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 129.23,
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Facade"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E4B1D654_FAD8_57CB_41D9_816693DF1599",
   "pitch": -4.54,
   "yaw": 129.23,
   "hfov": 11.68,
   "distance": 100
  }
 ],
 "id": "overlay_E1CFBF01_FAD8_B54D_41C2_C575D599907F",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -116.14,
   "hfov": 10.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA, this.camera_C1CD9A0E_D0C2_2575_41E2_E07F219B06C7); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dining Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E4B27654_FAD8_57CB_41CA_17441E8DE96E",
   "pitch": -30.48,
   "yaw": -116.14,
   "hfov": 10.1,
   "distance": 100
  }
 ],
 "id": "overlay_E1AD7EFF_FAD9_D4B4_41E8_EA1E9BD42660",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "items": [
  {
   "media": "this.album_EB9DA772_F9A0_E32F_41D3_EB6B34903327_0",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_EB9DA772_F9A0_E32F_41D3_EB6B34903327_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 106.78,
   "hfov": 10.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981, this.camera_C1550A75_D0C2_2594_41E0_C4CEA8E6FB89); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Facade"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_EC46AE0E_F969_38AC_41E2_9FCC1BB5FDCA",
   "pitch": -3.29,
   "yaw": 106.78,
   "hfov": 10.31,
   "distance": 100
  }
 ],
 "id": "overlay_E32239F1_F0E2_786E_41B3_844CE52DD642",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -58.09,
   "hfov": 8.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E3F4A298_F96B_09B4_41D1_1C719F669656",
   "pitch": -39.94,
   "yaw": -58.09,
   "hfov": 8.99,
   "distance": 100
  }
 ],
 "id": "overlay_E32249F1_F0E2_786E_41D4_C7896573D9E9",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -173.8,
   "hfov": 9.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA, this.camera_C2AC5B19_D0C2_5B9C_41B4_ED8DDF8F74DE); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E585C510_FAEF_B54C_41EA_D4C04366BA71",
   "pitch": -35.01,
   "yaw": -173.8,
   "hfov": 9.6,
   "distance": 100
  }
 ],
 "id": "overlay_D8DB339A_FAE8_4D7C_41E6_1C4CFA547013",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "media": "this.album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_AlbumPlayList, this.htmltext_C061999E_D0C2_2694_41C7_78D9052B1A1D, this.albumitem_C061299D_D0C2_2694_418F_B1A21F63F2A0); this.loopAlbum(this.playList_C061199D_D0C2_2694_41D9_ED737A525169, 0)",
 "player": "this.viewer_uidC061399D_D0C2_2694_41D5_2050F888B7F2PhotoAlbumPlayer",
 "id": "albumitem_C061299D_D0C2_2694_418F_B1A21F63F2A0"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -43.87,
   "hfov": 10.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA, this.camera_C1773AA7_D0C2_5AB4_41E1_C9D3040AE288); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dining Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DF79ECF4_FAE8_F4B4_41D7_10C18D4921AC",
   "pitch": -25.4,
   "yaw": -43.87,
   "hfov": 10.59,
   "distance": 100
  }
 ],
 "id": "overlay_DB6595F4_FAE8_D4B4_41E7_572D21C2877B",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 171.39,
   "hfov": 8.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA, this.camera_C1258A60_D0C2_25AC_41E0_B40B98700BF5); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E5859510_FAEF_B54C_41DC_95F2B97B5E8E",
   "pitch": -27.75,
   "yaw": 171.39,
   "hfov": 8.57,
   "distance": 100
  }
 ],
 "id": "overlay_D83609AC_FAE8_BD54_4191_5BE0D007AE7A",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -62.61,
   "hfov": 11.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900, this.camera_C2BCCB04_D0C2_5B75_41B1_BE3AC2031C6E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_EE7AF9F6_F977_7B7C_4198_DC0942A9DCD5",
   "pitch": -10.72,
   "yaw": -62.61,
   "hfov": 11.51,
   "distance": 100
  }
 ],
 "id": "overlay_E30DED3C_F0FE_79D5_41E1_491C6A01FE7C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 114.41,
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2, this.camera_C282AAEE_D0C2_5AB5_41AC_530EC321D4DF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bed Room "
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8500AD9_F0E2_585F_41C6_611923592465",
   "pitch": -32.27,
   "yaw": 114.41,
   "hfov": 9.91,
   "distance": 100
  }
 ],
 "id": "overlay_E5176CE1_F0EE_B86F_41E4_FF7D06CBDDC3",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -131.65,
   "hfov": 10.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kitchen"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_EC466E0F_F969_38AC_41DF_245E97B0E6E0",
   "pitch": -29.32,
   "yaw": -131.65,
   "hfov": 10.22,
   "distance": 100
  }
 ],
 "id": "overlay_EDD49E6B_F957_1894_41E8_56D2370E3B7C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 69.38,
   "hfov": 9.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4, this.camera_C2911AD3_D0C2_5A93_4131_C5C6C57DFA42); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Master's Bedroom"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_ED60F92A_F9A0_2F3D_41CE_916DFFC637E3",
   "pitch": -39.13,
   "yaw": 69.38,
   "hfov": 9.09,
   "distance": 100
  }
 ],
 "id": "overlay_E509FD58_F9A9_38B4_41CF_A848DBA84592",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 13.72,
   "hfov": 10.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD, this.camera_C135FA55_D0C2_2594_41D6_732453970E4F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dining Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E3F22D9C_F0E2_58D6_41B4_2CABF8D8372C",
   "pitch": -25.91,
   "yaw": 13.72,
   "hfov": 10.54,
   "distance": 100
  }
 ],
 "id": "overlay_E2ABFBE4_F0E2_D875_41C2_957B7877C933",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -74.75,
   "hfov": 9.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Master's Bedroom"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E4C489EB_F0E2_B872_41DC_0BF44A8239DC",
   "pitch": -33.98,
   "yaw": -74.75,
   "hfov": 9.72,
   "distance": 100
  }
 ],
 "id": "overlay_E48E4CC4_F0E2_78B6_41E6_200D89F2DBC2",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -165.36,
   "hfov": 11.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Facade"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E104A558_F97F_08B4_41E6_58853DBEAE44",
   "pitch": -14.15,
   "yaw": -165.36,
   "hfov": 11.36,
   "distance": 100
  }
 ],
 "id": "overlay_ECA5AE3F_F97F_38EC_41D4_C3008074A5EE",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -119.09,
   "hfov": 9.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA, this.camera_C1DDF9FF_D0C2_2693_419E_B4CBCB40E6E6); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E5860510_FAEF_B54C_41C1_7431AC6A1FEC",
   "pitch": -34.26,
   "yaw": -119.09,
   "hfov": 9.69,
   "distance": 100
  }
 ],
 "id": "overlay_DBBD8C87_FAD7_FB54_41EA_9A78628496CA",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 172.52,
   "hfov": 14.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD, this.camera_C1AA39E7_D0C2_26B3_41BC_EBFDC02BE1B6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E62D8C4B_F0EE_7FB3_41E2_32785A83EC17",
   "pitch": -33.17,
   "yaw": 172.52,
   "hfov": 14.77,
   "distance": 100
  }
 ],
 "id": "overlay_E5FEFE94_F0E2_78D6_41E2_9B29460794EB",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.59,
   "hfov": 10.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884, this.camera_C2185B5A_D0C2_5B9C_41CF_D2EEBAE0F170); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E7E685ED_FAD9_B4D4_41E4_387B5D4558B1",
   "pitch": -31.17,
   "yaw": -8.59,
   "hfov": 10.03,
   "distance": 100
  }
 ],
 "id": "overlay_DA671ABE_FAD8_5CB7_41E8_BA5309388D82",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84.83,
   "hfov": 11.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38, this.camera_C2F8AB42_D0C2_5BEC_41E6_E025EF11290B); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bedroom 1"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E7E635ED_FAD9_B4D4_41DF_DAA5BC933610",
   "pitch": -16.62,
   "yaw": 84.83,
   "hfov": 11.23,
   "distance": 100
  }
 ],
 "id": "overlay_E46B2EDD_FAD8_74F5_41E5_F9A9642FBFC6",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 124.77,
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2, this.camera_C20ABB67_D0C2_5BB4_41E0_8B8B8590C6FE); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Master's Berdroom"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E7E7C5ED_FAD9_B4D4_41D0_09BBFCBF38F3",
   "pitch": -16.89,
   "yaw": 124.77,
   "hfov": 11.21,
   "distance": 100
  }
 ],
 "id": "overlay_E401B51C_FADB_B574_41D3_E5983B1D38DF",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -150.46,
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649, this.camera_C2DE9B26_D0C2_5BB4_41A1_862067D71AC1); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Service Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E586D510_FAEF_B54C_41EB_38E83915F4F5",
   "pitch": -6.8,
   "yaw": -150.46,
   "hfov": 11.64,
   "distance": 100
  }
 ],
 "id": "overlay_E59881E3_FAE8_CCCC_41E8_3580514B7710",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -65.28,
   "hfov": 11.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A, this.camera_C2E86B4E_D0C2_5BF4_41E1_75C280F190A6); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bedroom 2"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DF795CF3_FAE8_F4CC_41EC_15F08B853C97",
   "pitch": -19.09,
   "yaw": -65.28,
   "hfov": 11.07,
   "distance": 100
  }
 ],
 "id": "overlay_DB1B1B3F_FAE9_BDB5_41D2_CAA9AFC1CEDF",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.08,
   "hfov": 11.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A48716_EF4B_03ED_4197_CAC078968906, this.camera_C2CE6B34_D0C2_5B94_41C7_9BB4FB847405); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kitchen Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DF792CF3_FAE8_F4CC_41EE_53A569D0B4E9",
   "pitch": -17.1,
   "yaw": -93.08,
   "hfov": 11.2,
   "distance": 100
  }
 ],
 "id": "overlay_DA0E4E35_FAE8_B7B4_41C6_0A75ECD2082C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.7,
   "hfov": 11.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet & Bath"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E73A5B78_FAFB_BDBC_41DD_C780AD4D0290",
   "pitch": -5.91,
   "yaw": -171.7,
   "hfov": 11.66,
   "distance": 100
  }
 ],
 "id": "overlay_DB27FC86_FAF8_7B54_41DA_5F98185C2D55",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 140.28,
   "hfov": 9.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD, this.camera_C1A1A9F3_D0C2_2693_41C1_65433EF30299); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E851AADA_F0E2_585D_41EC_BC0E28A7C780",
   "pitch": -32.75,
   "yaw": 140.28,
   "hfov": 9.86,
   "distance": 100
  }
 ],
 "id": "overlay_E5C38C96_F0E2_D8D5_41DF_C78F7AA0E471",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.9,
   "hfov": 6.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Wallnut"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE5C03EB_F09B_CEDB_41E5_AC5836615DF7",
   "pitch": -21.58,
   "yaw": 1.9,
   "hfov": 6.54,
   "distance": 100
  }
 ],
 "id": "overlay_D6A5056E_F0A7_4BDD_41D2_E7F633C51DAE",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 59.55,
   "hfov": 6.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Molave"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C3DCE6BA_F0E5_4945_41E5_360A918758A0",
   "pitch": -10.53,
   "yaw": 59.55,
   "hfov": 6.91,
   "distance": 100
  }
 ],
 "id": "overlay_D8ACEC2C_F0A5_595D_4175_F83A9C2386E8",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 135.75,
   "hfov": 11.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25, this.camera_C1B999D0_D0C2_26EC_41D1_314852D8EDE2); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Facade"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E74A80EF_FADB_CCD4_41D8_1AD34A129173",
   "pitch": -6.12,
   "yaw": 135.75,
   "hfov": 11.65,
   "distance": 100
  }
 ],
 "id": "overlay_E1CE8C32_FAD7_DB4D_41E9_7D86DAA0CACC",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 27.93,
   "hfov": 11.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E74A40EF_FADB_CCD4_417B_21DC827DE2C1",
   "pitch": -11.2,
   "yaw": 27.93,
   "hfov": 11.5,
   "distance": 100
  }
 ],
 "id": "overlay_E1248EF1_FAD8_F4CD_41EB_243FDBDDBFC7",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "items": [
  {
   "media": "this.album_E5B10736_FAFB_D5B4_41B6_643385234725_0",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_E5B10736_FAFB_D5B4_41B6_643385234725_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.9,
   "hfov": 10,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940, this.camera_C1B129DC_D0C2_2694_41E4_ECE1C896494F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dining Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E14FB237_F979_08FC_41C2_BB35398FB0BC",
   "pitch": -31.44,
   "yaw": -0.9,
   "hfov": 10,
   "distance": 100
  }
 ],
 "id": "overlay_EE47AABD_F97B_19EC_41EB_C7DEFBD39955",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 72.95,
   "hfov": 10.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Service Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E50E4846_FA37_BBD4_41DC_6F366C0EEE95",
   "pitch": -21.83,
   "yaw": 72.95,
   "hfov": 10.88,
   "distance": 100
  }
 ],
 "id": "overlay_E00BE39E_FA38_4D77_41D2_652D2399E6F7",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 163,
   "hfov": 11.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148, this.camera_C1FD1A19_D0C2_259F_41DC_AE3BE9B4879D); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet & Bath"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E50DE846_FA37_BBD4_41D3_B6544BD42D13",
   "pitch": -18.54,
   "yaw": 163,
   "hfov": 11.11,
   "distance": 100
  }
 ],
 "id": "overlay_E106DCE5_FA38_54D4_41AA_F62CA6BE45EF",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -142.5,
   "hfov": 10.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910, this.camera_C1E8DA25_D0C2_25B7_41AB_AF8F3856BEFF); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Service Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6C71288_FA28_4F5C_41E8_66AC2D299D69",
   "pitch": -23.96,
   "yaw": -142.5,
   "hfov": 10.71,
   "distance": 100
  }
 ],
 "id": "overlay_E6228E2D_FA2B_B754_41EE_0E1D7CB78957",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -59.38,
   "hfov": 8.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39C0742_EF49_0265_41E7_B06059E075F4, this.camera_C1182A31_D0C2_25AF_41DC_C545313B35AE); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kitchen Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E65E9963_FA2B_FDCD_41EA_36FC47813287",
   "pitch": -41.6,
   "yaw": -59.38,
   "hfov": 8.76,
   "distance": 100
  }
 ],
 "id": "overlay_E0F68D39_FA28_D5BC_41E3_5CE8D98C2B79",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 20.31,
   "hfov": 11.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dining Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E114E759_FAE1_2352_41D1_62F881AC1B02",
   "pitch": -19.91,
   "yaw": 20.31,
   "hfov": 11.02,
   "distance": 100
  }
 ],
 "id": "overlay_E26F3C3A_FAE0_E4D7_41C9_1D7CEA982009",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -19.64,
   "hfov": 10.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA, this.camera_C10A5A3D_D0C2_2597_41A0_17E5938C1E23); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Click to go back"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E5857511_FAEF_B54C_41E5_2E80D45D81BF",
   "pitch": -27.74,
   "yaw": -19.64,
   "hfov": 10.37,
   "distance": 100
  }
 ],
 "id": "overlay_E57B0770_FAE9_D5CC_41BF_A1097F0A7A40",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.71,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B, this.camera_C162EABC_D0C2_5A95_41AE_9F6E6A5A91CC); this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34, true, 0, null, null, false); this.setComponentVisibility(this.Label_ED8CC5F3_F08E_3AAC_41E4_2E6937A672B3, true, 0, null, null, false); this.setComponentVisibility(this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Click to enter"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E74AE0EF_FADB_CCD4_41C7_35D84DC100FF",
   "pitch": -1.15,
   "yaw": -5.71,
   "hfov": 11.72,
   "distance": 100
  }
 ],
 "id": "overlay_E6487640_FA28_57CC_41E2_5032ACF4EA9B",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.07,
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, true, 0, null, null, false); this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C19F29A4_D0C2_26B4_4183_F9C861A19BEA.set('selectedIndex', -1); }, this); this.playList_C19F29A4_D0C2_26B4_4183_F9C861A19BEA.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "House Info"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E580E50F_FAEF_B554_41CE_1CB857A5B939",
   "pitch": -2.18,
   "yaw": 6.07,
   "hfov": 10.29,
   "distance": 100
  }
 ],
 "id": "overlay_E5EE81F5_FAE8_4CB5_41B7_4D411E588139",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -10.6,
   "hfov": 7.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC, this.camera_C187C9C4_D0C2_26F4_41D4_83329CF22CDA); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34, true, 0, null, null, false); this.setComponentVisibility(this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83, true, 0, null, null, false); this.setComponentVisibility(this.Label_ED8CC5F3_F08E_3AAC_41E4_2E6937A672B3, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Click to enter"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B7272B_F09E_27BC_41C2_A16E180F0A00",
   "pitch": -2.75,
   "yaw": -10.6,
   "hfov": 7.02,
   "distance": 100
  }
 ],
 "id": "overlay_E092D904_F08A_2B74_41B2_0B0EFAEC5295",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -1.56,
   "hfov": 7.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, true, 0, null, null, false); this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C19949A1_D0C2_26AC_41A8_760D2ACC8132.set('selectedIndex', -1); }, this); this.playList_C19949A1_D0C2_26AC_41A8_760D2ACC8132.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "House Info"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E120C2E5_F096_1EB4_41DB_74BDA746D8F2",
   "pitch": -2.8,
   "yaw": -1.56,
   "hfov": 7.02,
   "distance": 100
  }
 ],
 "id": "overlay_E0ACC229_F08A_19BC_41DC_13F24118D4E6",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 39.18,
   "hfov": 10.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940, this.camera_C13BEA49_D0C2_25FC_41CC_F22D83573FFD); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Click to go back"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6C42289_FA28_4F5C_41E8_5C69C79E210B",
   "pitch": -25.75,
   "yaw": 39.18,
   "hfov": 10.56,
   "distance": 100
  }
 ],
 "id": "overlay_E712D714_FA28_D574_41DB_127FB3799578",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 126.97,
   "hfov": 8.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940, this.camera_C1476A91_D0C2_256C_41E2_ED96A6112AEA); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dining Area"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E50D8846_FA37_BBD4_41CF_DADED86D0F71",
   "pitch": -43.25,
   "yaw": 126.97,
   "hfov": 8.54,
   "distance": 100
  }
 ],
 "id": "overlay_E39D1F8C_FA39_D554_41E2_291FA33709C1",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "items": [
  {
   "media": "this.album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_0",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_F59ECA25_FA7A_1B65_41E4_1001AAEDCA70",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\"><B><I>How to get there:</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\"><B>Via South Superhighway </B></SPAN><SPAN STYLE=\"font-size:14px;\">\u2013 Take Carmona Exit. Turn right at Governor\u2019s Drive. At the Tanza-Trece Martires intersection (landmarks include the Provincial Capitol, and a 7-11 on the left), turn right at the Tanza-Indang Road. Go straight and turn left at A. Soriano Highway or Naic-Tanza Road (landmark is McDonald\u2019s on the left). From A. Soriano Highway, turn left at Remulla Drive. The main entrance gate of Springfield View is on the right.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\"><B>Via Coastal Road</B></SPAN><SPAN STYLE=\"font-size:14px;\"> \u2013 Upon reaching Brgy. Talaba turn right to Bacoor town proper. Upon reaching Brgy. Mabolo turn right to Binakayan Road until you reach EPZA road.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">Proceed until you reach Puregold and straight ahead Tanza-Naic Road. Turn Left at Remulla Drive.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\"><B>Via Cavitex</B></SPAN><SPAN STYLE=\"font-size:14px;\"> \u2013 Upon reaching Coastal Road go straight to Cavitex turn right to Binakayan Road until you reach EPZA road. Proceed until you reach Puregold and straight ahead Tanza-Naic Road. Turn Left at Remulla Drive.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\"><B><I>Landmarks:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">\u2022 McDonald\u2019s \u2013 6 km</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">\u2022 Puregold Tanza \u2013 6 km</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3827"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "container_C061499E_D0C2_2694_41B1_64CAB6A3D18C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uidC061399D_D0C2_2694_41D5_2050F888B7F2",
  {
   "scrollBarOpacity": 0.5,
   "left": 0,
   "children": [
    "this.htmltext_C061999E_D0C2_2694_41C7_78D9052B1A1D"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "right": 0,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "verticalAlign": "bottom",
   "paddingLeft": 0,
   "borderRadius": 0,
   "overflow": "scroll",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "bottom": 0,
   "backgroundColor": [],
   "minWidth": 20,
   "class": "Container",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "height": "30%",
   "contentOpaque": true,
   "scrollBarColor": "#FFFFFF",
   "data": {
    "name": "Container3944"
   },
   "shadow": false,
   "horizontalAlign": "left",
   "layout": "vertical"
  },
  "this.component_C061C99E_D0C2_2694_41D7_762624CF15D8",
  "this.component_C061F99E_D0C2_2694_41D0_4EE12AC880DE"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "backgroundColor": [],
 "minWidth": 20,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "50%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container3943"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDEEA98_F0ED_7944_41B9_60276DE1A672",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDEEA98_F0ED_7944_41B9_60276DE1A672_rollover.png",
 "propagateClick": false,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDEEA98_F0ED_7944_41B9_60276DE1A672.png",
 "pressedIconURL": "skin/IconButton_DEDEEA98_F0ED_7944_41B9_60276DE1A672_pressed.png",
 "data": {
  "name": "Button46347"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "italic",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Times New Roman",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FF0000",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 5,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 5,
 "toolTipPaddingTop": 5,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 5,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 5,
 "toolTipFontSize": "18px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "bold",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDE3A98_F0ED_7944_41C9_70133E4649F0",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDE3A98_F0ED_7944_41C9_70133E4649F0_rollover.png",
 "propagateClick": false,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDE3A98_F0ED_7944_41C9_70133E4649F0.png",
 "pressedIconURL": "skin/IconButton_DEDE3A98_F0ED_7944_41C9_70133E4649F0_pressed.png",
 "data": {
  "name": "Button46342"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDE8A98_F0ED_7944_41C1_A0B6100476A4",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDE8A98_F0ED_7944_41C1_A0B6100476A4_rollover.png",
 "propagateClick": false,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDE8A98_F0ED_7944_41C1_A0B6100476A4.png",
 "pressedIconURL": "skin/IconButton_DEDE8A98_F0ED_7944_41C1_A0B6100476A4_pressed.png",
 "data": {
  "name": "Button46349"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDF5A98_F0ED_7944_41B6_41B2E0C4D2FD",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDF5A98_F0ED_7944_41B6_41B2E0C4D2FD_rollover.png",
 "propagateClick": false,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDF5A98_F0ED_7944_41B6_41B2E0C4D2FD.png",
 "pressedIconURL": "skin/IconButton_DEDF5A98_F0ED_7944_41B6_41B2E0C4D2FD_pressed.png",
 "data": {
  "name": "Button46352"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_D08BE838_F065_5945_41D4_56D96456CC20",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "width": 50.8,
 "toolTipPaddingTop": 5,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 5,
 "verticalAlign": "top",
 "toolTipBorderRadius": 5,
 "borderRadius": 0,
 "toolTipFontStyle": "italic",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "toolTipFontFamily": "Times New Roman",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTip": "Toggle Hotspot visibility",
 "toolTipShadowVerticalLength": 0,
 "height": 44,
 "toolTipBorderColor": "#767676",
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "toolTipFontColor": "#FF0000",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 5,
 "transparencyActive": true,
 "toolTipFontSize": "18px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_D08BE838_F065_5945_41D4_56D96456CC20.png",
 "pressedIconURL": "skin/IconButton_D08BE838_F065_5945_41D4_56D96456CC20_pressed.png",
 "data": {
  "name": "IconButton Hs visibility"
 },
 "shadow": false,
 "toolTipFontWeight": "bold",
 "cursor": "hand",
 "toolTipPaddingRight": 5
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDE2A98_F0ED_7944_41CB_C0613906FEBF",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDE2A98_F0ED_7944_41CB_C0613906FEBF_rollover.png",
 "propagateClick": false,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDE2A98_F0ED_7944_41CB_C0613906FEBF.png",
 "pressedIconURL": "skin/IconButton_DEDE2A98_F0ED_7944_41CB_C0613906FEBF_pressed.png",
 "data": {
  "name": "Button46343"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDEFA98_F0ED_7944_41CE_E8CBB1347376",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDEFA98_F0ED_7944_41CE_E8CBB1347376_rollover.png",
 "propagateClick": false,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDEFA98_F0ED_7944_41CE_E8CBB1347376.png",
 "pressedIconURL": "skin/IconButton_DEDEFA98_F0ED_7944_41CE_E8CBB1347376_pressed.png",
 "data": {
  "name": "Button46346"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDE9A98_F0ED_7944_41E2_7FDD115C9ECB",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDE9A98_F0ED_7944_41E2_7FDD115C9ECB_rollover.png",
 "propagateClick": false,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDE9A98_F0ED_7944_41E2_7FDD115C9ECB.png",
 "pressedIconURL": "skin/IconButton_DEDE9A98_F0ED_7944_41E2_7FDD115C9ECB_pressed.png",
 "data": {
  "name": "Button46348"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDEDA98_F0ED_7944_41D0_C3EDC0162AE1",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDEDA98_F0ED_7944_41D0_C3EDC0162AE1_rollover.png",
 "propagateClick": false,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDEDA98_F0ED_7944_41D0_C3EDC0162AE1.png",
 "pressedIconURL": "skin/IconButton_DEDEDA98_F0ED_7944_41D0_C3EDC0162AE1_pressed.png",
 "data": {
  "name": "Button46344"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDEBA98_F0ED_7944_41D8_93F4118DB216",
 "backgroundOpacity": 0,
 "width": 40,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDEBA98_F0ED_7944_41D8_93F4118DB216_rollover.png",
 "propagateClick": false,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDEBA98_F0ED_7944_41D8_93F4118DB216.png",
 "pressedIconURL": "skin/IconButton_DEDEBA98_F0ED_7944_41D8_93F4118DB216_pressed.png",
 "data": {
  "name": "Button46350"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_DEDE0A98_F0ED_7944_41E9_B586C0D04FA1",
 "backgroundOpacity": 0,
 "width": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DEDE0A98_F0ED_7944_41E9_B586C0D04FA1_rollover.png",
 "propagateClick": false,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEDE0A98_F0ED_7944_41E9_B586C0D04FA1.png",
 "pressedIconURL": "skin/IconButton_DEDE0A98_F0ED_7944_41E9_B586C0D04FA1_pressed.png",
 "data": {
  "name": "Button46341"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "left": 0,
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 179.2,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.45,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "children": [
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_ED8CC5F3_F08E_3AAC_41E4_2E6937A672B3"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "11.86%",
 "scrollBarWidth": 10,
 "height": 86.6,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_F35BD1BC_EF9C_CABC_41D5_EA752597A8FA",
 "backgroundOpacity": 0,
 "width": 109.3,
 "right": "14.32%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_F35BD1BC_EF9C_CABC_41D5_EA752597A8FA.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "4.34%",
 "bottom": "78.5%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "UPPER LEFT LOGO"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
 "left": "15%",
 "children": [
  "this.Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_DEDECA98_F0ED_7944_41BD_90DCB95E94D6",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_DEDEFA98_F0ED_7944_41CE_E8CBB1347376",
  "this.IconButton_DEDEEA98_F0ED_7944_41B9_60276DE1A672",
  "this.IconButton_DEDE9A98_F0ED_7944_41E2_7FDD115C9ECB"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "minWidth": 20,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container46345"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.23,
 "id": "HTMLText_F0FAD837_FD4B_01F4_41B0_A17DCB7AD7E3",
 "left": "0%",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:'Segoe UI';\"><SPAN STYLE=\"font-size:20px;\">for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpos</SPAN><SPAN STYLE=\"font-size:20px;\">e only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only for viewing and revision purpose only</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText2639"
 },
 "shadow": false,
 "visible": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E4B1D654_FAD8_57CB_41D9_816693DF1599",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A242DD_EF4B_021F_41C9_EF220CF0F884_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E4B27654_FAD8_57CB_41CA_17441E8DE96E",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_EC46AE0E_F969_38AC_41E2_9FCC1BB5FDCA",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E322E9F1_F0E2_786E_41D9_40E58D4D96DC_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E3F4A298_F96B_09B4_41D1_1C719F669656",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A56F48_EF4B_0265_41E7_F3578573BD4A_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E585C510_FAEF_B54C_41EA_D4C04366BA71",
 "rowCount": 6
},
{
 "buttonPause": "this.IconButton_DEDEEA98_F0ED_7944_41B9_60276DE1A672",
 "viewerArea": "this.viewer_uidC061399D_D0C2_2694_41D5_2050F888B7F2",
 "id": "viewer_uidC061399D_D0C2_2694_41D5_2050F888B7F2PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonRestart": "this.IconButton_DEDE3A98_F0ED_7944_41C9_70133E4649F0"
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A48716_EF4B_03ED_4197_CAC078968906_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DF79ECF4_FAE8_F4B4_41D7_10C18D4921AC",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A28470_EF4B_0625_41E8_BD126CB52DB2_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5859510_FAEF_B54C_41DC_95F2B97B5E8E",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_EE7AF9F6_F977_7B7C_4198_DC0942A9DCD5",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E8500AD9_F0E2_585F_41C6_611923592465",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_EC466E0F_F969_38AC_41DF_245E97B0E6E0",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39C0D6E_EF49_063D_41B5_36319C08D0BD_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_ED60F92A_F9A0_2F3D_41CE_916DFFC637E3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E3F22D9C_F0E2_58D6_41B4_2CABF8D8372C",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E4C489EB_F0E2_B872_41DC_0BF44A8239DC",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2AB1BE4_F0E2_D875_41C9_D679B5565900_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E104A558_F97F_08B4_41E6_58853DBEAE44",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A49B2D_EF4B_023F_41DD_05251828BD38_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5860510_FAEF_B54C_41C1_7431AC6A1FEC",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39DE711_EF4B_03E7_41C4_92F70986A6E4_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E62D8C4B_F0EE_7FB3_41E2_32785A83EC17",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E7E685ED_FAD9_B4D4_41E4_387B5D4558B1",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E7E635ED_FAD9_B4D4_41DF_DAA5BC933610",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E7E7C5ED_FAD9_B4D4_41D0_09BBFCBF38F3",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E586D510_FAEF_B54C_41EB_38E83915F4F5",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DF795CF3_FAE8_F4CC_41EC_15F08B853C97",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DF792CF3_FAE8_F4CC_41EE_53A569D0B4E9",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A63DB5_EF4B_062F_41E9_F4CD15EFBDBA_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E73A5B78_FAFB_BDBC_41DD_C780AD4D0290",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39C3116_EF4B_3FED_41BE_8A35FD1917A2_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E851AADA_F0E2_585D_41EC_BC0E28A7C780",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE5C03EB_F09B_CEDB_41E5_AC5836615DF7",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23EE054_EF4B_3E6D_41E2_E6F8B8D81961_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_C3DCE6BA_F0E5_4945_41E5_360A918758A0",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E74A80EF_FADB_CCD4_41D8_1AD34A129173",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24B798D_EF4B_0EFF_41D6_A90DD67F867B_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E74A40EF_FADB_CCD4_417B_21DC827DE2C1",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E14FB237_F979_08FC_41C2_BB35398FB0BC",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39C0742_EF49_0265_41E7_B06059E075F4_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E50E4846_FA37_BBD4_41DC_6F366C0EEE95",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E50DE846_FA37_BBD4_41D3_B6544BD42D13",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E6C71288_FA28_4F5C_41E8_66AC2D299D69",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E65E9963_FA2B_FDCD_41EA_36FC47813287",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39DE257_EF4B_026B_41D9_E6A31CA43940_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E114E759_FAE1_2352_41D1_62F881AC1B02",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3A278E1_EF4B_0E26_41E8_AED08C8C4649_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5857511_FAEF_B54C_41E5_2E80D45D81BF",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E74AE0EF_FADB_CCD4_41C7_35D84DC100FF",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23C2DE5_EF4B_062F_41D5_CAA0212ADF25_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_E580E50F_FAEF_B554_41CE_1CB857A5B939",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E2B7272B_F09E_27BC_41C2_A16E180F0A00",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2853B2E_EF49_023D_41DB_DAA6D4C39981_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_E120C2E5_F096_1EB4_41DB_74BDA746D8F2",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3AA0C4E_EF4B_067D_41E6_603270ACB910_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E6C42289_FA28_4F5C_41E8_5C69C79E210B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E39C0BF0_EF4B_0225_41DF_2B7D65C3B148_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E50D8846_FA37_BBD4_41CF_DADED86D0F71",
 "rowCount": 6
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uidC061399D_D0C2_2694_41D5_2050F888B7F2",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "ViewerArea3942"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmltext_C061999E_D0C2_2694_41C7_78D9052B1A1D",
 "backgroundOpacity": 0.7,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "borderSize": 0,
 "html": "",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3945"
 },
 "shadow": false,
 "visible": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "id": "component_C061C99E_D0C2_2694_41D7_762624CF15D8",
 "left": 10,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "45%",
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.loadFromCurrentMediaPlayList(this.album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_AlbumPlayList, -1)",
 "borderSize": 0,
 "iconURL": "skin/album_left.png",
 "data": {
  "name": "IconButton3946"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "id": "component_C061F99E_D0C2_2694_41D0_4EE12AC880DE",
 "backgroundOpacity": 0,
 "right": 10,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "45%",
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.loadFromCurrentMediaPlayList(this.album_EF3EBE14_F9E0_E23B_41C9_2111E9403BD2_AlbumPlayList, 1)",
 "borderSize": 0,
 "iconURL": "skin/album_right.png",
 "data": {
  "name": "IconButton3947"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 30,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#0089C8"
 ],
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container blue"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "width": 50,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "verticalAlign": "top",
 "paddingLeft": 40,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#0089C8"
 ],
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- Buttons set"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "left": 280,
 "width": 50,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34, false, 0, null, null, false); this.setComponentVisibility(this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83, false, 0, null, null, false); this.setComponentVisibility(this.Label_ED8CC5F3_F08E_3AAC_41E4_2E6937A672B3, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "text": "MOLAVE",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "10%",
 "height": 79.68,
 "minWidth": 1,
 "class": "Label",
 "fontSize": "36px",
 "paddingTop": 10,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "data": {
  "name": "MOLAVE"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontColor": "#000000"
},
{
 "fontFamily": "Oswald",
 "id": "Label_ED8CC5F3_F08E_3AAC_41E4_2E6937A672B3",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "5.08%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "WALLNUT",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "height": 75,
 "minWidth": 1,
 "class": "Label",
 "fontSize": "36px",
 "paddingTop": 10,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "data": {
  "name": "WALLNUT"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontColor": "#000000"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
  "this.IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "9.09%",
 "backgroundOpacity": 0,
 "width": "80.909%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "height": "25.041%",
 "minWidth": 40,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.3,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "left": "0%",
 "children": [
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F",
  "this.Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "26.19%",
 "bottom": "20.69%",
 "scrollBarWidth": 6,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 130,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 5,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical"
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg",
 "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0.2,
 "width": 144.2,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 0,
 "shadowOpacity": 0.25,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 50.8,
 "rollOverIconHeight": 50,
 "minWidth": 1,
 "mode": "toggle",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 0); if(!this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F.get('visible')){ this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34, false, 0, null, null, false); this.setComponentVisibility(this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83, false, 0, null, null, false); this.setComponentVisibility(this.Label_ED8CC5F3_F08E_3AAC_41E4_2E6937A672B3, false, 0, null, null, false)",
 "fontSize": "17.9634px",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "shadowHorizontalLength": 3,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Aerial View >",
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": true,
 "iconWidth": 32,
 "data": {
  "name": "Aerial  button"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0,
 "id": "Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Button_5AB86F7A_40D3_00DE_41BD_D1B9EFCA70D1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "height": 55.2,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1-1"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "layout": "vertical"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
 "backgroundOpacity": 0.2,
 "width": "65%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 11,
 "shadowOpacity": 0.25,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Label_ED8CC5F3_F08E_3AAC_41E4_2E6937A672B3, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34, true, 0, null, null, false); this.setComponentVisibility(this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83, true, 0, null, null, false)",
 "fontSize": "20px",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "shadowHorizontalLength": 3,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Molave >",
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": true,
 "iconWidth": 32,
 "data": {
  "name": "molave button"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundOpacity": 0.2,
 "width": "65%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 0,
 "shadowOpacity": 0.25,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34, true, 0, null, null, false); this.setComponentVisibility(this.Label_ED8CC5F3_F08E_3AAC_41E4_2E6937A672B3, true, 0, null, null, false)",
 "fontSize": "20px",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "shadowHorizontalLength": 3,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Wallnut >",
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": true,
 "iconWidth": 32,
 "data": {
  "name": "wallnut button"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundOpacity": 0.2,
 "width": "65%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 0,
 "shadowOpacity": 0.25,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false)",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "shadowHorizontalLength": 3,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Club House >",
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": true,
 "iconWidth": 32,
 "data": {
  "name": "clubhouse button"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundOpacity": 0.2,
 "width": "65%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 0,
 "shadowOpacity": 0.25,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false)",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "shadowHorizontalLength": 3,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Swimming Pool >",
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": true,
 "iconWidth": 32,
 "data": {
  "name": "swim pool button"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 2,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 78,
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_FBBB4CA6_EFAD_394C_41DF_9ED4136A581A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "99.818%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 56,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 7,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 1"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EBEA8B5D_F065_3FFF_41B7_7F5CE5D02DD5",
  "this.IconButton_FC719D78_EFAD_3BC4_4198_F28607540662",
  "this.IconButton_D08BE838_F065_5945_41D4_56D96456CC20",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 7,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 2"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_5AB86F7A_40D3_00DE_41BD_D1B9EFCA70D1",
 "backgroundOpacity": 0,
 "width": "96.818%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "height": 58,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 21)",
 "fontSize": 18,
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "label": "Main Entrance >",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "fontStyle": "italic",
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "gate button"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "backgroundOpacity": 0,
 "width": 44,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.showWindow(this.window_F59F1A25_FA7A_1B65_41E2_C4A74E05F9BF, null, false); this.playList_C061199D_D0C2_2694_41D9_ED737A525169.set('selectedIndex', 0); ",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "data": {
  "name": "IconButton Location"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "backgroundOpacity": 0,
 "width": 44,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.openLink('https://www.youtube.com/watch?v=_oa119wSERk&t=8s', '_blank')",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "data": {
  "name": "IconButton Video"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 52,
 "maxWidth": 53,
 "id": "IconButton_FBBB4CA6_EFAD_394C_41DF_9ED4136A581A",
 "backgroundOpacity": 0,
 "width": 48,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": 48,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.openLink('https://www.facebook.com/profile.php?id=100069118976887', '_blank')",
 "iconURL": "skin/IconButton_FBBB4CA6_EFAD_394C_41DF_9ED4136A581A.png",
 "data": {
  "name": "IconButton4575"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "backgroundOpacity": 0,
 "width": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "data": {
  "name": "IconButton --"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
}],
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "existsKey": function(key){  return key in window; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); }
 },
 "buttonToggleFullscreen": "this.IconButton_FC719D78_EFAD_3BC4_4198_F28607540662",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": true,
 "horizontalAlign": "left",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_EBEA8B5D_F065_3FFF_41B7_7F5CE5D02DD5"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
