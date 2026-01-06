var express = require("express");
var server = express();

server.use(express.static(__dirname+"/Server"));

server.get("/even_card",(req,res)=>{

    var even_card=[
        {
          pic: "/img/about/comingsoon.png",
          title: "光踊祭",
          text: "2026/02/01 @台北流行音樂中心Live house D"
        },

        {
          pic: "/img/about/ele.png",
          title: "Elementary Stream - fox capture plan",
          text: "2025/11/29 YouTube"
        },

        {
            pic: "/img/about/artsya.png",
            title: "7人形象照公開",
            text: "2025/11/26 Instagram"
        },
       
        {
          pic: "/img/about/chumiao1.png",
          title: "竹苗聯合成發",
          text: "2025/11/09 @竹北高中"
        },

        {
          pic: "/img/about/os3.png",
          title: "作品IGNITE 參加OS3線上賽",
          text: "2025/10/11 Bilibili"
        },

        {
            pic: "/img/about/peiryn.png",
            title: "北部日系近代藝術聯合成發",
            text: "2025/07/20 @台北城市科技大學大成館"
        },
       
       
      ]
      res.send(even_card);

  })


server.listen(80)