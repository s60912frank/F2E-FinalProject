
/** openshift indexes **/
db.getCollection("openshift").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** sessions indexes **/
db.getCollection("sessions").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** sessions indexes **/
db.getCollection("sessions").ensureIndex({
  "expires": NumberInt(1)
},[
  
]);

/** topics indexes **/
db.getCollection("topics").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** openshift records **/
db.getCollection("openshift").insert({
  "_id": ObjectId("5751a4a56a2c8b3b7b8a024c"),
  "application": "mouthcannon",
  "dbhost": "127.1.254.2"
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": "aDCbgh6omCGzThx2-XOHQpikdzWSxmvs",
  "expires": ISODate("2016-09-29T04:15:50.597Z"),
  "session": "{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"5753ee465d51a6b9a6aa3b91\"}}"
});

/** topics records **/
db.getCollection("topics").insert({
  "__v": NumberInt(4),
  "_id": ObjectId("576968ba027860819d8674d3"),
  "category": "政治議題",
  "comments": [
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "WHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE6666666",
      "time": ISODate("2016-06-21T16:18:13.911Z"),
      "_id": ObjectId("576968c5027860819d8674d4")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "11111111",
      "time": ISODate("2016-06-21T16:18:27.282Z"),
      "_id": ObjectId("576968d3027860819d8674d5")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "888",
      "time": ISODate("2016-06-21T16:20:00.305Z"),
      "_id": ObjectId("57696930027860819d8674d6")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "444444444",
      "time": ISODate("2016-06-21T16:20:17.886Z"),
      "_id": ObjectId("57696941027860819d8674d7")
    }
  ],
  "commentsCount": NumberInt(4),
  "desc": "https://www.youtube.com/watch?v=bZH4tJ7p8qY",
  "name": "YTYTYTYTYTYTYTYTYTYYT",
  "opinion": "777777777777777",
  "startedBy": "5753ee465d51a6b9a6aa3b91",
  "time": ISODate("2016-06-21T16:18:02.453Z")
});
db.getCollection("topics").insert({
  "__v": NumberInt(11),
  "_id": ObjectId("5754e64e816ac453c9661a95"),
  "comments": [
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "888888888888",
      "time": ISODate("2016-06-06T03:02:45.75Z"),
      "_id": ObjectId("5754e7d5816ac453c9661a97")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "機掰嗚嗚嗚嗚嗚",
      "time": ISODate("2016-06-06T07:41:49.654Z"),
      "_id": ObjectId("5755293d816ac453c9661a99")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "666?",
      "time": ISODate("2016-06-21T16:24:35.271Z"),
      "_id": ObjectId("57696a434b33af581b5f69cc")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "機車",
      "time": ISODate("2016-06-22T05:16:21.99Z"),
      "_id": ObjectId("576a1f25c7da6d9e4d088f61")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "嗚嗚",
      "time": ISODate("2016-06-23T05:30:30.879Z"),
      "_id": ObjectId("576b73f658a5793d24711c87")
    }
  ],
  "commentsCount": NumberInt(5),
  "name": "WHEEEEEEEE",
  "startedBy": "5753ee465d51a6b9a6aa3b91",
  "time": ISODate("2016-06-06T02:56:14.420Z")
});
db.getCollection("topics").insert({
  "__v": NumberInt(1),
  "_id": ObjectId("576a13131d20a37b4005177f"),
  "category": "靠北發洩",
  "comments": [
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "真的要爆了",
      "time": ISODate("2016-06-22T06:09:26.52Z"),
      "_id": ObjectId("576a2b9658a5793d24711c03")
    }
  ],
  "commentsCount": NumberInt(1),
  "desc": "http://whatscap.ristury.com/java/WhatsCAP/content/photo/v1/21071_WM.jpg",
  "name": "嗚嗚嗚",
  "opinion": "嗚嗚嗚嗚嗚",
  "startedBy": "5753ee465d51a6b9a6aa3b91",
  "time": ISODate("2016-06-22T04:24:51.218Z")
});
db.getCollection("topics").insert({
  "startedBy": "576a2a646065d203ab262917",
  "commentsCount": NumberInt(0),
  "time": ISODate("2016-06-22T06:08:00.572Z"),
  "opinion": "老化指數為每百個幼年人口（0至14歲）所對應的老年（65歲以上）人口數，指數越高，代表高老齡化情況越嚴重；而台灣的老化指數，預計最快將在明年破百，意即老人將比小孩更多。",
  "desc": "內政部今（22日）公布2015年全國老化指數為92.18，相較10年前老化指數僅52.05，增加近一倍。內政部表示，最快今年或明年老化指數就會破百，意即台灣65歲以上長者將比14歲以下小孩還要多。此外，內政部的生育率數據則顯示，六都婦女生育生第一胎的年齡平均都超過30歲，其中以台北市平均32.44歲最高，生育第三胎以上的比率最低；未來台灣將面臨少子化與老年化的社會。\n中央社報導，內政部指出，2015年全國老化指數為92.18，較2014年增加6.48，老年人口成長迅速，與世界主要國家相比，較日本200、德國161.54、南韓92.86為低，但比美國及澳洲78.95、中國大陸58.82為高。",
  "category": "社會議題",
  "name": "全台老化指數攀升 最快今年老人將比小孩多",
  "_id": ObjectId("576a2b4058a5793d24711c01"),
  "__v": NumberInt(0)
});
db.getCollection("topics").insert({
  "startedBy": "575535e8816ac453c9661a9b",
  "commentsCount": NumberInt(0),
  "time": ISODate("2016-06-22T06:09:08.146Z"),
  "opinion": "92年英國政府因為無力捍衛英鎊匯價，宣布退出歐洲匯率體系（ERM），英鎊大幅貶值，索羅斯因為早已沽空英鎊，獲利超過10億美元。今次，索羅斯警告，脫歐帶來的貶值壓力比92年更龐大，英鎊起碼跌15%，甚至超過20%：「太多人以為投票贊成離開歐盟同個人財務狀況無關，這真是太樂觀。一旦脫歐，最明顯最即時的效果，就是每家每戶的財富都會因為英鎊貶值而減少。同時，金融市場、所有投資、價格，以至工作就業都會出現急劇變化。」",
  "desc": "英國在星期四（26日）會為是否脫離歐盟舉行公投，這些日子以來，「留歐派」宣傳脫歐有多危險的「恐懼工程」排山倒海，這天更來了張王牌—大鱷索羅斯（George Soros）。他在英國《衛報》撰文指，英國脫歐將觸發比1992年的黑色星期三更大的貶值危機。",
  "category": "社會議題",
  "name": "「金融大鱷」索羅斯警告：脫歐將讓英鎊貶值超過15%",
  "_id": ObjectId("576a2b8458a5793d24711c02"),
  "__v": NumberInt(0)
});
db.getCollection("topics").insert({
  "__v": NumberInt(2),
  "_id": ObjectId("576a2ba358a5793d24711c04"),
  "category": "靠北發洩",
  "comments": [
    {
      "uid": "576a2d8658a5793d24711c20",
      "comment": "QAQQQQQQQQQQ",
      "time": ISODate("2016-06-22T06:18:17.634Z"),
      "_id": ObjectId("576a2da958a5793d24711c24")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "快逃離鬼島喔",
      "time": ISODate("2016-06-22T06:18:27.84Z"),
      "_id": ObjectId("576a2db358a5793d24711c25")
    }
  ],
  "commentsCount": NumberInt(2),
  "desc": "最近迷上看一個英文外籍老師的臉書狀態，他叫小畢，明明是個美國人，中文卻說得比很多母語是中文的人還要好。甚至還可以用臺灣的時下梗針砭時事，不時還用英文片語教學配上時事例句，非常幽默。\n前幾天看到他新增了一個動態，是關於台灣家長對於小孩的英語學習迷思\n大學時曾兼職英文家教的我有非常深的感觸⋯⋯\n我從小就讀雙語幼稚園，國小開始補習英文。小四從何X仁轉到一間私人的英文補習班，我的英文才開始進步。你知道為什麼嗎？",
  "name": "為什麼你的英文爛？是臺灣的教育害了你",
  "opinion": "在何X仁，老師就是照著課本教，超級無聊，定期考試，一班又有十幾個小朋友。當然，身為一個「小朋友」怎麼會喜歡考試呢？所以我當時非常不喜歡讀英文。因為我當時認為英文只能用來考試。直到我娘幫我換到一間私人補習班，老師都是會講中文的外國人，才開始了我真正學英文的旅程。還記得第一堂課，真的是個震撼教育。當時的老師叫Kirk，一進教室，他請我自我介紹：「My name is….」話還沒說完，我就被他打斷了，他叫我重新發音「Name」這個字，長母音的A而不是短音A，我念了不下十次，他終於點頭，表示我終於發音正確了。但同時，我也被要求回家後「罰錄」Name這個單字30次。在課堂上，老師也要求講英文（但如果真的言不及義還是可以講中文補充）。每次的回家作業就是30題問題，要把答案寫到作業簿上，在課堂上每個同學都需要輪流上台被台下的同學問問題。當然，答錯的話就是罰錄10到30次不等。在這樣高壓且競爭的環境之下，我的英文發音、文法日漸進步好轉，但在當下確實是非常挫折。",
  "startedBy": "576a2a646065d203ab262917",
  "time": ISODate("2016-06-22T06:09:39.694Z")
});
db.getCollection("topics").insert({
  "startedBy": "575535e8816ac453c9661a9b",
  "commentsCount": NumberInt(0),
  "time": ISODate("2016-06-22T06:14:51.876Z"),
  "opinion": "深夜11點40分，歷經3.5小時後投票結果出爐，2535張同意罷工票，9張不同意罷工票，3張無效票，贊成罷工得票率超過99.5％，已大幅超過工會於臨時會員代表大會通過的七成同意票之罷工門檻。工會宣布拿到實質罷工權，將於近日內正式展開罷工。但在有進一步的行動之前，工會還是希望資方拿出誠懇態度與工會協商。",
  "desc": "http://i0.wp.com/s3-ap-northeast-1.amazonaws.com/tnl-static/2016/6/5j11rz9q7acv9t4t1r9r.jpg?resize=1000%2C600&quality=90\n自由報導，華航勞資雙方因為工時、休假等問題遲遲無法達成共識，空服員以舉辦罷工投票等具體行動，拒絕俗稱「責任制條款」的《勞基法》84條之1，希望將休息時間還給空服員。桃園市空服員職業工會8日起發起罷工投票，陸續在台北、高雄、桃園舉辦投票，今（21）日最後一天投票於晚間六點結束，隨即借用桃園市產業總工會位於八德區的辦公室進行開票，開票過程不開放旁觀，僅開放會員入內觀看開票狀況，開票全程有律師監票。桃園市政府勞工局則有派員到場了解開票過程。\n自由報導，此次罷工投票共有二張票，一張是支持罷工與否，另一張票則是是否支持罷工時拉起封鎖線。工會秘書林佳瑋表示，工會會員人數共2638人，全數均華航空服員，2週來共有2548人出席投票，估算投票率為96％，開票預計持續到深夜或隔天凌晨結束。",
  "category": "社會議題",
  "name": "華航罷工投票超過99.5％同意 將於近日內展開罷工",
  "_id": ObjectId("576a2cdb58a5793d24711c09"),
  "__v": NumberInt(0)
});
db.getCollection("topics").insert({
  "__v": NumberInt(5),
  "_id": ObjectId("576a2a116065d203ab262916"),
  "category": "勁爆八卦",
  "comments": [
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "嗨嗨嗨嗨嗨",
      "time": ISODate("2016-06-22T06:31:58.946Z"),
      "_id": ObjectId("576a30de58a5793d24711c2e")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "我是新議題",
      "time": ISODate("2016-06-22T06:32:07.990Z"),
      "_id": ObjectId("576a30e758a5793d24711c2f")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "六六六",
      "time": ISODate("2016-06-22T06:32:13.271Z"),
      "_id": ObjectId("576a30ed58a5793d24711c30")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "wheeeeee",
      "time": ISODate("2016-06-22T06:33:27.512Z"),
      "_id": ObjectId("576a313758a5793d24711c31")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "http://mouthcannon-gmin.rhcloud.com/issue?title=我們該創個新議題了吧??",
      "time": ISODate("2016-06-22T06:33:45.954Z"),
      "_id": ObjectId("576a314958a5793d24711c32")
    }
  ],
  "commentsCount": NumberInt(5),
  "desc": "上課DEMO要用新的吧???",
  "name": "我們該創個新議題了吧??",
  "opinion": "不然0.0太大顆了WWWW\n",
  "startedBy": "575535e8816ac453c9661a9b",
  "time": ISODate("2016-06-22T06:02:57.765Z")
});
db.getCollection("topics").insert({
  "__v": NumberInt(2),
  "_id": ObjectId("576a2eda58a5793d24711c2a"),
  "category": "靠北發洩",
  "comments": [
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "憤怒的柯p",
      "time": ISODate("2016-06-22T06:24:06.928Z"),
      "_id": ObjectId("576a2f0658a5793d24711c2b")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": " 這就是落水鬼 ，是水猴子，在山塘，水庫裏生活，會拉遊泳的人，很多會水性的人都死在它手裏，在陸地­沒一點力氣，一到水裏它要比成人大幾倍的力，所以一旦在水裏被它抱住就必死無疑，請教­育身邊的大人小孩都別去山塘水庫玩水，會死人的。這是真實的，傳遞一下可救不少人。一­個朋友抓到的！小時候聽的多，就是沒見過！如今開眼界了。",
      "time": ISODate("2016-06-22T06:48:59.357Z"),
      "_id": ObjectId("576a34db58a5793d24711c37")
    }
  ],
  "commentsCount": NumberInt(2),
  "desc": "http://i.imgur.com/gbmgFmB.gif",
  "name": "灌水囉",
  "opinion": "為什麼這個梗這麼紅",
  "startedBy": "5753ee465d51a6b9a6aa3b91",
  "time": ISODate("2016-06-22T06:23:22.735Z")
});
db.getCollection("topics").insert({
  "__v": NumberInt(4),
  "_id": ObjectId("576a39d658a5793d24711c3f"),
  "category": "政治議題",
  "comments": [
    {
      "uid": "575535e8816ac453c9661a9b",
      "comment": "???",
      "time": ISODate("2016-06-22T07:10:23.204Z"),
      "_id": ObjectId("576a39df58a5793d24711c40")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "??????????",
      "time": ISODate("2016-06-22T07:15:05.869Z"),
      "_id": ObjectId("576a3af958a5793d24711c41")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "想做愛",
      "time": ISODate("2016-06-22T07:15:16.764Z"),
      "_id": ObjectId("576a3b0458a5793d24711c42")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "想要跳起來",
      "time": ISODate("2016-06-22T07:15:27.827Z"),
      "_id": ObjectId("576a3b0f58a5793d24711c43")
    }
  ],
  "commentsCount": NumberInt(4),
  "desc": "https://www.youtube.com/watch?v=xG8--_OOWE0",
  "name": "666666666666666666666",
  "opinion": "00000",
  "startedBy": "575535e8816ac453c9661a9b",
  "time": ISODate("2016-06-22T07:10:14.509Z")
});
db.getCollection("topics").insert({
  "__v": NumberInt(11),
  "_id": ObjectId("57696843027860819d8674cf"),
  "category": "政治議題",
  "comments": [
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
      "time": ISODate("2016-06-21T16:16:57.429Z"),
      "_id": ObjectId("57696879027860819d8674d0")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "878787878",
      "time": ISODate("2016-06-21T16:17:23.677Z"),
      "_id": ObjectId("57696893027860819d8674d1")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "777777777777778",
      "time": ISODate("2016-06-21T16:17:27.301Z"),
      "_id": ObjectId("57696897027860819d8674d2")
    },
    {
      "uid": "575535e8816ac453c9661a9b",
      "comment": "ALOHA~~~~",
      "time": ISODate("2016-06-22T05:55:49.436Z"),
      "_id": ObjectId("576a2865c84c940e36a2f083")
    },
    {
      "uid": "575535e8816ac453c9661a9b",
      "comment": "ALOHA~~",
      "time": ISODate("2016-06-22T05:55:56.220Z"),
      "_id": ObjectId("576a286cc84c940e36a2f084")
    },
    {
      "uid": "575535e8816ac453c9661a9b",
      "comment": "ALOHA~?",
      "time": ISODate("2016-06-22T05:56:03.105Z"),
      "_id": ObjectId("576a2873c84c940e36a2f085")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "嗨",
      "time": ISODate("2016-06-22T06:14:02.823Z"),
      "_id": ObjectId("576a2caa58a5793d24711c07")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "6666666",
      "time": ISODate("2016-06-22T07:16:55.750Z"),
      "_id": ObjectId("576a3b6758a5793d24711c44")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "柯文哲在哪裡",
      "time": ISODate("2016-06-22T07:17:03.121Z"),
      "_id": ObjectId("576a3b6f58a5793d24711c45")
    }
  ],
  "commentsCount": NumberInt(9),
  "desc": "https://www.youtube.com/watch?v=0IQkXUqc-14&t=670s",
  "name": "測試喔喔喔喔喔喔喔喔喔喔",
  "opinion": "WHEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
  "startedBy": "5753ee465d51a6b9a6aa3b91",
  "time": ISODate("2016-06-21T16:16:03.944Z")
});
db.getCollection("topics").insert({
  "__v": NumberInt(52),
  "_id": ObjectId("576a3b7658a5793d24711c46"),
  "category": "勁爆八卦",
  "comments": [
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "00",
      "time": ISODate("2016-06-22T07:17:15.459Z"),
      "_id": ObjectId("576a3b7b58a5793d24711c47")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:15.636Z"),
      "_id": ObjectId("576a3b7b58a5793d24711c48")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "00",
      "time": ISODate("2016-06-22T07:17:16.30Z"),
      "_id": ObjectId("576a3b7c58a5793d24711c49")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:16.190Z"),
      "_id": ObjectId("576a3b7c58a5793d24711c4a")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:16.340Z"),
      "_id": ObjectId("576a3b7c58a5793d24711c4b")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:16.510Z"),
      "_id": ObjectId("576a3b7c58a5793d24711c4c")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:16.670Z"),
      "_id": ObjectId("576a3b7c58a5793d24711c4d")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:16.832Z"),
      "_id": ObjectId("576a3b7c58a5793d24711c4e")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:16.972Z"),
      "_id": ObjectId("576a3b7c58a5793d24711c4f")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:17.150Z"),
      "_id": ObjectId("576a3b7d58a5793d24711c50")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:17.310Z"),
      "_id": ObjectId("576a3b7d58a5793d24711c51")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:17.494Z"),
      "_id": ObjectId("576a3b7d58a5793d24711c52")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:17.637Z"),
      "_id": ObjectId("576a3b7d58a5793d24711c53")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:17.825Z"),
      "_id": ObjectId("576a3b7d58a5793d24711c54")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:17.982Z"),
      "_id": ObjectId("576a3b7d58a5793d24711c55")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:18.193Z"),
      "_id": ObjectId("576a3b7e58a5793d24711c56")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:18.344Z"),
      "_id": ObjectId("576a3b7e58a5793d24711c57")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:18.537Z"),
      "_id": ObjectId("576a3b7e58a5793d24711c58")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:18.688Z"),
      "_id": ObjectId("576a3b7e58a5793d24711c59")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:18.841Z"),
      "_id": ObjectId("576a3b7e58a5793d24711c5a")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:19.87Z"),
      "_id": ObjectId("576a3b7f58a5793d24711c5b")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:19.463Z"),
      "_id": ObjectId("576a3b7f58a5793d24711c5c")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:19.615Z"),
      "_id": ObjectId("576a3b7f58a5793d24711c5d")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:19.783Z"),
      "_id": ObjectId("576a3b7f58a5793d24711c5e")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:19.943Z"),
      "_id": ObjectId("576a3b7f58a5793d24711c5f")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:20.110Z"),
      "_id": ObjectId("576a3b8058a5793d24711c60")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:20.278Z"),
      "_id": ObjectId("576a3b8058a5793d24711c61")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:20.430Z"),
      "_id": ObjectId("576a3b8058a5793d24711c62")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:20.566Z"),
      "_id": ObjectId("576a3b8058a5793d24711c63")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:20.904Z"),
      "_id": ObjectId("576a3b8058a5793d24711c64")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:21.462Z"),
      "_id": ObjectId("576a3b8158a5793d24711c65")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:21.600Z"),
      "_id": ObjectId("576a3b8158a5793d24711c66")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:21.760Z"),
      "_id": ObjectId("576a3b8158a5793d24711c67")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:21.954Z"),
      "_id": ObjectId("576a3b8158a5793d24711c68")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:22.161Z"),
      "_id": ObjectId("576a3b8258a5793d24711c69")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:22.376Z"),
      "_id": ObjectId("576a3b8258a5793d24711c6a")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:22.553Z"),
      "_id": ObjectId("576a3b8258a5793d24711c6b")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:22.709Z"),
      "_id": ObjectId("576a3b8258a5793d24711c6c")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:22.923Z"),
      "_id": ObjectId("576a3b8258a5793d24711c6d")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:23.114Z"),
      "_id": ObjectId("576a3b8358a5793d24711c6e")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:23.299Z"),
      "_id": ObjectId("576a3b8358a5793d24711c6f")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:23.511Z"),
      "_id": ObjectId("576a3b8358a5793d24711c70")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:23.687Z"),
      "_id": ObjectId("576a3b8358a5793d24711c71")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:23.874Z"),
      "_id": ObjectId("576a3b8358a5793d24711c72")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:24.88Z"),
      "_id": ObjectId("576a3b8458a5793d24711c73")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:24.283Z"),
      "_id": ObjectId("576a3b8458a5793d24711c74")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "0",
      "time": ISODate("2016-06-22T07:17:24.453Z"),
      "_id": ObjectId("576a3b8458a5793d24711c75")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "00",
      "time": ISODate("2016-06-22T07:17:24.876Z"),
      "_id": ObjectId("576a3b8458a5793d24711c76")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "https://i.ytimg.com/vi/Wua2hiMJu8s/maxresdefault.jpg",
      "time": ISODate("2016-06-22T07:18:19.349Z"),
      "_id": ObjectId("576a3bbb58a5793d24711c77")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "87?",
      "time": ISODate("2016-06-22T07:21:54.799Z"),
      "_id": ObjectId("576a3c9258a5793d24711c7d")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "港仔?",
      "time": ISODate("2016-06-22T07:21:58.328Z"),
      "_id": ObjectId("576a3c9658a5793d24711c7e")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "還不爬積分",
      "time": ISODate("2016-06-22T07:22:06.781Z"),
      "_id": ObjectId("576a3c9e58a5793d24711c7f")
    }
  ],
  "commentsCount": NumberInt(52),
  "desc": "https://www.youtube.com/watch?v=leNb3Qqq20s",
  "name": "放暑假囉",
  "opinion": "豆花~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "startedBy": "576a2a646065d203ab262917",
  "time": ISODate("2016-06-22T07:17:10.438Z")
});
db.getCollection("topics").insert({
  "__v": NumberInt(5),
  "_id": ObjectId("576a385658a5793d24711c3b"),
  "category": "社會議題",
  "comments": [
    {
      "uid": "575535e8816ac453c9661a9b",
      "comment": "樓主，你這部是社會議題吧~~錯版囉",
      "time": ISODate("2016-06-22T07:04:32.331Z"),
      "_id": ObjectId("576a388058a5793d24711c3c")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "臭肥宅",
      "time": ISODate("2016-06-22T07:19:39.736Z"),
      "_id": ObjectId("576a3c0b58a5793d24711c78")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "我不當人類啦，jojo！!!!!!!",
      "time": ISODate("2016-06-22T07:19:51.675Z"),
      "_id": ObjectId("576a3c1758a5793d24711c79")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "我不當人類啦，jojo！!!!!!!",
      "time": ISODate("2016-06-22T07:19:55.76Z"),
      "_id": ObjectId("576a3c1b58a5793d24711c7a")
    },
    {
      "uid": "576a2a646065d203ab262917",
      "comment": "我不當人類啦，jojo！!!!!!!",
      "time": ISODate("2016-06-22T07:19:58.691Z"),
      "_id": ObjectId("576a3c1e58a5793d24711c7b")
    }
  ],
  "commentsCount": NumberInt(5),
  "desc": "我不當人類啦，jojo！!!!!!!",
  "name": "ㄛ拉ㄛ拉ㄛ拉",
  "opinion": "\n都拉拉ㄌ拉拉拉拉拉拉拉ㄌ拉ㄌ拉拉拉拉拉拉\nwryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\n\n都拉拉ㄌ拉拉拉拉拉拉拉ㄌ拉ㄌ拉拉拉拉拉拉",
  "startedBy": "57628b6c2d401557cec623b5",
  "time": ISODate("2016-06-22T07:03:50.968Z")
});
db.getCollection("topics").insert({
  "__v": NumberInt(8),
  "_id": ObjectId("576a3c6d58a5793d24711c7c"),
  "category": "靠北發洩",
  "comments": [
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "剁",
      "time": ISODate("2016-06-22T07:22:58.217Z"),
      "_id": ObjectId("576a3cd258a5793d24711c80")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "剁",
      "time": ISODate("2016-06-22T07:22:59.395Z"),
      "_id": ObjectId("576a3cd358a5793d24711c81")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "剁",
      "time": ISODate("2016-06-22T07:23:00.233Z"),
      "_id": ObjectId("576a3cd458a5793d24711c82")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "剁剁剁",
      "time": ISODate("2016-06-22T07:23:06.874Z"),
      "_id": ObjectId("576a3cda58a5793d24711c83")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "剁剁剁剁剁剁剁",
      "time": ISODate("2016-06-22T07:23:15.130Z"),
      "_id": ObjectId("576a3ce358a5793d24711c84")
    },
    {
      "uid": "576a348158a5793d24711c36",
      "comment": "剁剁剁剁剁剁剁剁!",
      "time": ISODate("2016-06-22T07:23:23.390Z"),
      "_id": ObjectId("576a3ceb58a5793d24711c85")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "87",
      "time": ISODate("2016-06-23T07:12:18.297Z"),
      "_id": ObjectId("576b8bd258a5793d24711c88")
    },
    {
      "uid": "5753ee465d51a6b9a6aa3b91",
      "comment": "whee",
      "time": ISODate("2016-09-15T04:14:40.277Z"),
      "_id": ObjectId("57da203026c7c27597457d52")
    }
  ],
  "commentsCount": NumberInt(8),
  "desc": "http://i.imgur.com/PZN88Fk.gif",
  "name": "再一發柯文哲",
  "opinion": "太爽了吧",
  "startedBy": "576a348158a5793d24711c36",
  "time": ISODate("2016-06-22T07:21:17.160Z")
});

/** users records **/
db.getCollection("users").insert({
  "__v": NumberLong(0),
  "_id": ObjectId("5753ee465d51a6b9a6aa3b91"),
  "facebookId": "1010545282315431",
  "isAdmin": true,
  "name": "陳繼民",
  "nickname": "G民",
  "token": "EAABgmzmiSjgBACWQ56yIbqoPl0hBsAISvraUgkUiF2B63FqnREMPmR6vB2ZByqJOItD9zZCZA4qs92cv7QghtRnrHVApnmTBCiKFvfbIzHaTxRlYxvWkmTH3hWZBMhqnXrpg25U1hoW5s0jKHb7qbur4UG2ZCqSgXHaSnJAP3dgZDZD"
});
db.getCollection("users").insert({
  "__v": NumberLong(0),
  "_id": ObjectId("575535e8816ac453c9661a9b"),
  "facebookId": "1001370319912280",
  "isAdmin": true,
  "name": "李修豪",
  "nickname": "Gmin",
  "token": "EAABgmzmiSjgBAMI4Sthh2P5HlGUqYFTVTZBHEamFIhlo4aqOhIt8KnyscopqHkYzY4AInEltH0IWerVHuHPUYOgFkWlnxd10e9GNBgof2JrjhwiyIPdu5GM46kQDlbMZCeZAiJrSICJ8y1OFuZBskq0go9LgijYZD"
});
db.getCollection("users").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("57628aec2d401557cec623ac"),
  "facebookId": "1724533724491999",
  "isAdmin": false,
  "name": "李修叡",
  "nickname": "修特",
  "token": "EAABgmzmiSjgBAAIN4ZBMUnTyDVZBj6oB3vt10yGoikmQAXL7LV8ZBuFJPVxCwVIoZBj8xDxUSZAexvClr1TL6Gzcrevgh7JWVZCK5QI51Kbdvk7qZBVF5GVFiza7NNNPelM4ci8lVBG3uTZC17ZCJWupmmujOm6Vn6YsZD"
});
db.getCollection("users").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("57628b6c2d401557cec623b5"),
  "facebookId": "1058727500873104",
  "isAdmin": false,
  "name": "Shan Show",
  "nickname": "肥宅",
  "token": "EAABgmzmiSjgBAPhxZAqpJxRgZBIgObcyfSvHAEtVDFGdNpivJytkZB6l4ifsW5pIuq0ADfRfv3RkS2EWNShv4rUJfYtFOnAZAzP24JHgxRWrGiA58hcUMZA9u4LZCNxofoiqIYvkoZBWWDCpQsrl3uwcV3NGbRv7vYruAE4TLtFWTdZAubfnrCPV"
});
db.getCollection("users").insert({
  "isAdmin": false,
  "nickname": "張廣唐",
  "name": "張廣唐",
  "token": "EAABgmzmiSjgBANeS4DZALudCXgn12agUCM9MZAbrZBza80S6YFw87g4y273ZCsa0x57cQNk5mRAZAG6huTSUrcFSTR0EEN6GXmNCR5ttLBUEptpIpzx16VGnR7jZCUyp8d1gMhW21MGYgVitIb4rBqB4ak0eOHzzO2s45OokIOGwZDZD",
  "facebookId": "1387425977941180",
  "_id": ObjectId("57628f262d401557cec623ba"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "isAdmin": false,
  "nickname": "陳晏羲",
  "name": "陳晏羲",
  "token": "EAABgmzmiSjgBADZAYhzq8nHjiI38EdXLCfWCafSFgoyGzFboH4Ry7ZCZBVrv3rCY2zwjccRrLq1I9g6CUlWM3ldDDGiaY6IK9Cw0EdWxdR8hWHZCwqKGqEnvaRz0g2pECwqlosTQRNnORLHZCWxL0drbZB2ZAPPxSMZD",
  "facebookId": "1431517886873953",
  "_id": ObjectId("5769f03d4b33af581b5f69cf"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("576a2a646065d203ab262917"),
  "facebookId": "907602376052464",
  "isAdmin": false,
  "name": "潘俊廷",
  "nickname": "回覆魔人",
  "token": "EAABgmzmiSjgBAAskwaftJXI9GmLkO9FCb7oWMEpaLQVnmC5BEh8aDhfAP4y5ZCpJOxcAHu3Qu5HMmJARmoTfuKyPyEXNhiLmNQbS5u51gi4en8BFwNPC2UDYAO4uuPADVFZC2vMQZB2OUCSc0m3af5xiq1SrIDPEdWNaaCYMwZDZD"
});
db.getCollection("users").insert({
  "isAdmin": false,
  "nickname": "白世信",
  "name": "白世信",
  "token": "EAABgmzmiSjgBAGwcBJZB1yqTmRPYFdV8BsC7KF0Dd0VVRvQcgENPnEdxGjB1vLKYGDBZBF5u0NsJEtnZC8DnE5EfYbURFrZBMdXEjPIS7VuGr8gVfjuNiFMnByDs4VRZAidFq0EvZC9WnNTGUQ5q8GQrtA7RgcODlqGUZBBR9eCywZDZD",
  "facebookId": "1138318169523781",
  "_id": ObjectId("576a2d8658a5793d24711c20"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("576a348158a5793d24711c36"),
  "facebookId": "1203056266382061",
  "isAdmin": false,
  "name": "譚凱隆",
  "nickname": "LBJ23",
  "token": "EAABgmzmiSjgBAIkRxVDAwUN6PxMv7ymPzZAvsyYFXqcAkglXXTjdb7ydX9bd0wiulEMSZASuNQLEJaRHUTy4jiSNnBdU9gkobhkYfMB3dZA2ZCjWg1T0fZCWegOZCVTtPIgLYEljKduKpN4PiXTiuY0KtrpRPWWP8ZD"
});
db.getCollection("users").insert({
  "isAdmin": false,
  "nickname": "蔡耀樟",
  "name": "蔡耀樟",
  "token": "EAABgmzmiSjgBADHPikCI9fYIR0OiZCrToP31JXLZCGs8NaGgflqTIzM4FGDeT2oe9Vnv6CdzHajAf3K1rYDbHJB09ROQVJ9nxEP9ZCZCa9GXgdEtZAC5RJuRyV6ZCwgHcYjqsorXWxoei1ZCtTiS9J9DOa0pWOtzPVh5tGiuvBNMwZDZD",
  "facebookId": "1172213806164122",
  "_id": ObjectId("576a7d2e58a5793d24711c86"),
  "__v": NumberInt(0)
});
