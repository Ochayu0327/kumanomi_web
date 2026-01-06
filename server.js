var express = require("express");
var server = express();

server.use(express.static(__dirname+"/Server"));

server.get("/even_card",(req,res)=>{

    var even_card=[
        {
          pic: "/img/about/chumiao1.png",
          title: "北部聯合成發演出",
          text: "2025/07/20 台北城市科技大學"
        },

        {
          pic: "/img/about/chumiao1.png",
          title: "北部聯合成發演出",
          text: "2025/07/20 台北城市科技大學"
        },

        {
            pic: "/img/about/chumiao1.png",
            title: "北部聯合成發演出",
            text: "2025/07/20 台北城市科技大學"
        },
       
        {
          pic: "/img/about/chumiao1.png",
          title: "北部聯合成發演出",
          text: "2025/07/20 台北城市科技大學"
        },

        {
          pic: "/img/about/chumiao1.png",
          title: "北部聯合成發演出",
          text: "2025/07/20 台北城市科技大學"
        },

        {
            pic: "/img/about/chumiao1.png",
            title: "北部聯合成發演出",
            text: "2025/07/20 台北城市科技大學"
        },
       
       
      ]
      res.send(even_card);

  })


server.listen(80)